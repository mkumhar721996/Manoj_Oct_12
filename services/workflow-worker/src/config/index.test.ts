import { describe, expect, it } from "vitest";
import { loadConfig } from "./index.js";

describe("loadConfig", () => {
  it("loads values from the provided environment", () => {
    const config = loadConfig({
      DATABASE_URL: "postgres://localhost:5432/workflow",
      SQS_QUEUE_URL: "https://sqs.example.com/queue",
      AWS_REGION: "eu-west-1",
      POLL_INTERVAL_MS: "1000",
    });

    expect(config).toEqual({
      databaseUrl: "postgres://localhost:5432/workflow",
      sqsQueueUrl: "https://sqs.example.com/queue",
      awsRegion: "eu-west-1",
      pollIntervalMs: 1000,
    });
  });

  it("applies defaults for optional values", () => {
    const config = loadConfig({
      DATABASE_URL: "postgres://localhost:5432/workflow",
      SQS_QUEUE_URL: "https://sqs.example.com/queue",
    });

    expect(config.awsRegion).toBe("us-east-1");
    expect(config.pollIntervalMs).toBe(5000);
  });

  it("throws when DATABASE_URL is missing", () => {
    expect(() => loadConfig({ SQS_QUEUE_URL: "https://sqs.example.com/queue" })).toThrow(
      /DATABASE_URL/,
    );
  });

  it("throws when SQS_QUEUE_URL is missing", () => {
    expect(() =>
      loadConfig({ DATABASE_URL: "postgres://localhost:5432/workflow" }),
    ).toThrow(/SQS_QUEUE_URL/);
  });
});
