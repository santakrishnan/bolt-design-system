# NPM Publishing Setup

This workflow automatically publishes your package to NPM when you create a version tag.

## Setup Steps

### 1. Create NPM Access Token

1. Go to [npmjs.com](https://www.npmjs.com/) and log in
2. Click your profile icon → "Access Tokens"
3. Click "Generate New Token" → "Classic Token"
4. Select "Automation" type
5. Copy the token

### 2. Add Token to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Paste your NPM token
6. Click "Add secret"

### 3. Publish a New Version

To publish a new version:

```bash
# Update version in package.json (or use npm version)
npm version patch  # or minor, or major

# Push the tag to trigger the workflow
git push origin main --tags
```

The workflow will automatically:

- Run ultracite checks
- Build the project
- Publish to NPM

## Manual Publishing

If you prefer to publish manually:

```bash
pnpm build
pnpm publish --access public
```
