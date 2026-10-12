---
id: ADR-0005
category: component
title: Job Queue
status: accepted
superseded_by: null
component_id: comp_job_queue
responsibility: Decouples the Workflow API from the Workflow Worker, carrying workflow
  step execution requests; runs on Amazon SQS.
kind: managed_service
split_reason: Backing service the project doesn't build; needed to hand off async
  work from API to Worker.
talks_to:
- component_id: comp_workflow_worker
  interaction: async
  evidence: Worker consumes queued workflow step execution requests.
evidence: 'User: ''Amazon SQS (managed)'''
---

## Context

User: 'Amazon SQS (managed)'

## Decision

Decouples the Workflow API from the Workflow Worker, carrying workflow step execution requests; runs on Amazon SQS.

Kept separate because Backing service the project doesn't build; needed to hand off async work from API to Worker..

## Talks to

- **Workflow Worker** (async) — Worker consumes queued workflow step execution requests.
