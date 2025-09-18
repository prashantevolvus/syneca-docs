# Syneca Documentation

This repository contains the master Syneca documentation portal powered by [Docusaurus](https://docusaurus.io/). The site aggregates multiple documentation spaces—Functional Documentation, Developer, and Channel Partner—under a single, easy-to-navigate experience.


## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start local development server**
   ```bash
   npm start
   ```
3. **Build for production**
   ```bash
   npm run build
   ```

### Documentation Collections

The portal is organized into independent documentation folders managed by separate Docusaurus content plugins:

- `functional-docs` — Business process documentation and persona-driven guidance.
- `developer-docs` — Technical references, architecture, and setup guides.
- `channel-partner-docs` — Partner program enablement and sales resources.

Each collection has its own sidebar configuration (`sidebarsFunctional.js`, `sidebarsDeveloper.js`, `sidebarsChannelPartner.js`).

## Project Structure

```
.
├── channel-partner-docs
├── developer-docs
├── functional-docs
├── src
│   ├── css
│   └── pages
└── static
```

Feel free to extend the structure with additional documentation collections or custom pages as the Syneca knowledge base grows.
