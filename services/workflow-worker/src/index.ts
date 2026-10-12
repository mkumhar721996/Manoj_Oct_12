import "dotenv/config";
import { SQSClient } from "@aws-sdk/client-sqs";
import { loadConfig } from "./config/index.js";
import { createDbPool } from "./db/client.js";
import { SqsConsumer } from "./queue/sqsConsumer.js";
import { WorkflowExecutor, parseWorkflowStepMessage } from "./workflow/executor.js";

async function main(): Promise<void> {
  const config = loadConfig();
  const dbPool = createDbPool(config.databaseUrl);
  const sqsClient = new SQSClient({ region: config.awsRegion });
  const consumer = new SqsConsumer({ client: sqsClient, queueUrl: config.sqsQueueUrl });
  const executor = new WorkflowExecutor();

  let running = true;
  const shutdown = () => {
    running = false;
  };
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  console.log("workflow-worker started, polling for workflow step messages");

  while (running) {
    const messages = await consumer.receive();

    for (const message of messages) {
      if (!message.Body || !message.ReceiptHandle) {
        continue;
      }

      try {
        const step = parseWorkflowStepMessage(message.Body);
        await executor.execute(step);
        await consumer.delete(message.ReceiptHandle);
      } catch (error) {
        console.error("Failed to process workflow step message", error);
      }
    }

    if (messages.length === 0) {
      await new Promise((resolve) => setTimeout(resolve, config.pollIntervalMs));
    }
  }

  await dbPool.end();
}

main().catch((error) => {
  console.error("workflow-worker failed to start", error);
  process.exit(1);
});
