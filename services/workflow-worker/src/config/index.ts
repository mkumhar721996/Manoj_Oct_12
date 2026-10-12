export interface WorkerConfig {
  databaseUrl: string;
  sqsQueueUrl: string;
  awsRegion: string;
  pollIntervalMs: number;
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): WorkerConfig {
  const databaseUrl = env.DATABASE_URL;
  const sqsQueueUrl = env.SQS_QUEUE_URL;

  if (!databaseUrl) {
    throw new Error("Missing required environment variable: DATABASE_URL");
  }
  if (!sqsQueueUrl) {
    throw new Error("Missing required environment variable: SQS_QUEUE_URL");
  }

  return {
    databaseUrl,
    sqsQueueUrl,
    awsRegion: env.AWS_REGION ?? "us-east-1",
    pollIntervalMs: Number(env.POLL_INTERVAL_MS ?? 5000),
  };
}
