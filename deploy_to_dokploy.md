# Deploying to Dokploy via GitHub

Since you want to deploy to `dokploy.staging.mondria.dev` via GitHub, follow these steps.

## 1. Create a GitHub Repository (CRITICAL STEP)
**You must do this first on the GitHub website:**
1. Go to [https://github.com/new](https://github.com/new).
2. **Repository name**: `vossen-design`
3. **Visibility**: Private (recommended) or Public.
4. **Initialize this repository with**: Leave all unchecked (No README, No .gitignore, No License).
5. Click **Create repository**.

## 2. Push Your Code
Once you have created the empty repository on GitHub, run these commands in your terminal:

```bash
git remote add origin https://github.com/aronb77/vossen-design.git
git branch -M main
git push -u origin main
```

> **Note**: If `git remote add` says it already exists, run `git remote set-url origin https://github.com/aronb77/vossen-design.git` instead.

## 3. Configure Dokploy
1. Log in to your Dokploy instance at `dokploy.staging.mondria.dev`.
2. Go to your **Project** or create a new one.
3. Click **Create Service** -> **Application**.
4. Select **GitHub** as the source.
5. Select the `vossen-design` repository you just created.
6. Select the `main` branch.
7. **Build Type**: Select `Nixpacks` (easiest) or `Docker` if you prefer using a Dockerfile (we don't have one yet, so Nixpacks is best for Next.js).
8. **Environment Variables**:
   - You shouldn't need any for a static build unless you have API keys.
9. Click **Create**.

## 4. Verify Deployment
Dokploy will start building your application. You can view the logs in the deployment tab. Once finished, it will be available at the domain you configure in Dokploy (e.g., `vossen-design.dokploy.staging.mondria.dev` or a custom domain).

## 5. Custom Domain (v2.vossendesign.nl)
To link your custom domain `v2.vossendesign.nl`:

1. **In Dokploy**:
   - Go to your Application -> **Domains**.
   - Click **Add Domain**.
   - Enter `v2.vossendesign.nl`.
   - Ensure **HTTPS** is enabled (Let's Encrypt).
   - Click **Create**.

2. **In your DNS Provider (where you bought the domain)**:
   - Create an **A Record**.
   - **Name/Host**: `v2`
   - **Value/Target**: The IP address of `dokploy.staging.mondria.dev` (You can find this in Dokploy settings or by pinging the staging domain).
   - **TTL**: Automatic or 3600.

Once the DNS propagates (usually within minutes to an hour), your site will be live at `https://v2.vossendesign.nl`.
