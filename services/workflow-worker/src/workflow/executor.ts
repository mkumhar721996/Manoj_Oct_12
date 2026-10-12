export interface WorkflowStepMessage {
  processInstanceId: string;
  stepId: string;
  stepType: string;
  payload?: Record<string, unknown>;
}

export type StepHandler = (message: WorkflowStepMessage) => Promise<void>;

export class WorkflowExecutor {
  private readonly handlers = new Map<string, StepHandler>();

  register(stepType: string, handler: StepHandler): void {
    this.handlers.set(stepType, handler);
  }

  async execute(message: WorkflowStepMessage): Promise<void> {
    const handler = this.handlers.get(message.stepType);
    if (!handler) {
      throw new Error(`No handler registered for step type: ${message.stepType}`);
    }
    await handler(message);
  }
}

export function parseWorkflowStepMessage(body: string): WorkflowStepMessage {
  const parsed = JSON.parse(body) as Partial<WorkflowStepMessage>;

  if (!parsed.processInstanceId || !parsed.stepId || !parsed.stepType) {
    throw new Error("Invalid workflow step message: missing required fields");
  }

  return {
    processInstanceId: parsed.processInstanceId,
    stepId: parsed.stepId,
    stepType: parsed.stepType,
    payload: parsed.payload,
  };
}
