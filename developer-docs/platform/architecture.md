---
id: architecture
title: Reference Architecture
sidebar_position: 1
---

Syneca is built with a cloud-native architecture designed for resilience and extensibility.

## Services

- **Core APIs** power CRUD operations and orchestrate workflows.
- **Integration Gateway** facilitates secure data exchange with external systems.
- **Event Bus** propagates domain events and supports near-real-time automation.

## Data Strategy

Data is stored using a mix of relational and document databases. Event sourcing captures change history, while analytical snapshots feed reporting experiences without impacting transactional performance.
