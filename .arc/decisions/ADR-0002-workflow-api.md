---
id: ADR-0002
category: component
title: Workflow API
status: accepted
superseded_by: null
component_id: comp_workflow_api
responsibility: Owns workflow definitions and process state; exposes CRUD for workflow
  design and triggers process execution for the Web App.
kind: api_service
split_reason: Single API serving the single web client so far.
talks_to:
- component_id: comp_job_queue
  interaction: async
  evidence: API enqueues workflow step execution requests for background processing.
- component_id: comp_relational_database
  interaction: shared-storage
  evidence: API reads/writes workflow definitions and process state.
evidence: Derived from greenfield web app description; single client so far.
---

## Context

Derived from greenfield web app description; single client so far.

## Decision

Owns workflow definitions and process state; exposes CRUD for workflow design and triggers process execution for the Web App.

Kept separate because Single API serving the single web client so far..

## Talks to

- **Job Queue** (async) — API enqueues workflow step execution requests for background processing.
- **Relational Database** (shared-storage) — API reads/writes workflow definitions and process state.
