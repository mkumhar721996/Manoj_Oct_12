---
id: ADR-0003
category: component
title: Workflow Worker
status: accepted
superseded_by: null
component_id: comp_workflow_worker
responsibility: Executes workflow/process steps asynchronously via custom execution
  logic driven by messages from the Job Queue (no dedicated workflow-engine product).
kind: worker
split_reason: Background execution of workflow steps needs to run independently of
  request/response cycle.
talks_to:
- component_id: comp_relational_database
  interaction: shared-storage
  evidence: Worker reads/writes process execution state as it runs workflow steps.
evidence: 'User: ''Use a simpler generic job queue + custom workflow execution logic
  in the Worker.'''
---

## Context

User: 'Use a simpler generic job queue + custom workflow execution logic in the Worker.'

## Decision

Executes workflow/process steps asynchronously via custom execution logic driven by messages from the Job Queue (no dedicated workflow-engine product).

Kept separate because Background execution of workflow steps needs to run independently of request/response cycle..

## Talks to

- **Relational Database** (shared-storage) — Worker reads/writes process execution state as it runs workflow steps.
