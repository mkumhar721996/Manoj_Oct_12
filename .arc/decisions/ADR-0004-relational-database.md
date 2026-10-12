---
id: ADR-0004
category: component
title: Relational Database
status: accepted
superseded_by: null
component_id: comp_relational_database
responsibility: Stores workflow definitions, process instances/state, and business
  data; runs on PostgreSQL.
kind: infrastructure
split_reason: Data-ownership boundary; backing service the project doesn't build.
evidence: 'User: ''Use PostgreSQL as the primary relational database.'''
---

## Context

User: 'Use PostgreSQL as the primary relational database.'

## Decision

Stores workflow definitions, process instances/state, and business data; runs on PostgreSQL.

Kept separate because Data-ownership boundary; backing service the project doesn't build..
