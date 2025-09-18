---
id: environment-setup
title: Environment Setup
sidebar_position: 2
---

Follow these steps to configure your local environment for Syneca development.

1. **Install prerequisites**
   - Node.js 18+
   - Docker Desktop or compatible container runtime
   - Syneca CLI (`npm install -g @syneca/cli`)
2. **Authenticate**
   - Run `syneca login` to connect to your sandbox tenant.
   - Create a `.env.local` file containing API keys issued for your workspace.
3. **Start services**
   - Execute `docker compose up` from the repository root to launch dependent services.
   - Use `npm run dev` to start the local development server.

> 🛠️ **Troubleshooting:** If containers fail to start, confirm that ports 3000 and 5432 are available and retry.
