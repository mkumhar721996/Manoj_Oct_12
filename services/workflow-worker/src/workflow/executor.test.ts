import { describe, expect, it, vi } from "vitest";
import { WorkflowExecutor, parseWorkflowStepMessage } from "./executor.js";

describe("parseWorkflowStepMessage", () => {
  it("parses a valid message body", () => {
    const message = parseWorkflowStepMessage(
      JSON.stringify({
        processInstanceId: "process-1",
        stepId: "step-1",
        stepType: "send-email",
        payload: { to: "user@example.com" },
      }),
    );

    expect(message).toEqual({
      processInstanceId: "process-1",
      stepId: "step-1",
      stepType: "send-email",
      payload: { to: "user@example.com" },
    });
  });

  it("throws when required fields are missing", () => {
    expect(() => parseWorkflowStepMessage(JSON.stringify({ stepId: "step-1" }))).toThrow(
      /Invalid workflow step message/,
    );
  });
});

describe("WorkflowExecutor", () => {
  it("dispatches a message to the registered handler", async () => {
    const executor = new WorkflowExecutor();
    const handler = vi.fn().mockResolvedValue(undefined);
    executor.register("send-email", handler);

    const message = {
      processInstanceId: "process-1",
      stepId: "step-1",
      stepType: "send-email",
    };
    await executor.execute(message);

    expect(handler).toHaveBeenCalledWith(message);
  });

  it("throws when no handler is registered for the step type", async () => {
    const executor = new WorkflowExecutor();

    await expect(
      executor.execute({
        processInstanceId: "process-1",
        stepId: "step-1",
        stepType: "unknown",
      }),
    ).rejects.toThrow(/No handler registered/);
  });
});
