---
id: ADR-0006
category: nfr
title: "NFR: scale \u2014 100-500 total employees, 50-100 concurrent users, thousands\
  \ of workflow\u2026"
status: accepted
superseded_by: null
dimension: scale
metric: concurrent active users / monthly workflow executions
threshold: 100-500 total employees, 50-100 concurrent users, thousands of workflow
  executions per month; architecture should scale further without major redesign
component_id: null
needs_dedicated_tracking: true
evidence: 'User-provided figures: ''Initial users: 100-500 internal employees; Concurrent
  users: 50-100; Workflow volume: Thousands of workflow executions per month.'''
---

## Context

User-provided figures: 'Initial users: 100-500 internal employees; Concurrent users: 50-100; Workflow volume: Thousands of workflow executions per month.'

## Decision

concurrent active users / monthly workflow executions: 100-500 total employees, 50-100 concurrent users, thousands of workflow executions per month; architecture should scale further without major redesign
