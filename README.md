# Vossen Design Web

This is a [Next.js](https://nextjs.org) project.

## Deployment & Branches

This project uses a Docker-based deployment workflow.

### Branches
- **`main`**: Production branch. Stable code ready for public release.
- **`staging`**: Staging/Testing branch. Used for testing new features before merging to main.

### Deployment
The project is built using a custom `Dockerfile` which uses Node.js 20-alpine.
- **Port**: The application runs on port `80`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
