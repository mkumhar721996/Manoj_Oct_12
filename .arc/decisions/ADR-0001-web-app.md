---
id: ADR-0001
category: component
title: Web App
status: accepted
superseded_by: null
component_id: comp_web_app
responsibility: Internal-facing UI where employees design/configure custom workflows
  and monitor running business processes.
kind: web_ui
split_reason: Only client so far; separate from backend because it's a different runtime
  (browser UI).
talks_to:
- component_id: comp_workflow_api
  interaction: sync
  evidence: Web App is the UI for the Workflow API; standard client-server call.
evidence: 'User: ''Internal employees who can also design/configure custom workflows'''
---

## Context

User: 'Internal employees who can also design/configure custom workflows'

## Decision

Internal-facing UI where employees design/configure custom workflows and monitor running business processes.

Kept separate because Only client so far; separate from backend because it's a different runtime (browser UI)..

## Talks to

- **Workflow API** (sync) — Web App is the UI for the Workflow API; standard client-server call.
