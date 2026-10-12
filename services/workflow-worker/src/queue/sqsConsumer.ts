import {
  DeleteMessageCommand,
  ReceiveMessageCommand,
  SQSClient,
  type Message,
} from "@aws-sdk/client-sqs";

export interface SqsConsumerOptions {
  client: SQSClient;
  queueUrl: string;
  waitTimeSeconds?: number;
  maxNumberOfMessages?: number;
}

export class SqsConsumer {
  constructor(private readonly options: SqsConsumerOptions) {}

  async receive(): Promise<Message[]> {
    const response = await this.options.client.send(
      new ReceiveMessageCommand({
        QueueUrl: this.options.queueUrl,
        WaitTimeSeconds: this.options.waitTimeSeconds ?? 10,
        MaxNumberOfMessages: this.options.maxNumberOfMessages ?? 10,
      }),
    );
    return response.Messages ?? [];
  }

  async delete(receiptHandle: string): Promise<void> {
    await this.options.client.send(
      new DeleteMessageCommand({
        QueueUrl: this.options.queueUrl,
        ReceiptHandle: receiptHandle,
      }),
    );
  }
}
