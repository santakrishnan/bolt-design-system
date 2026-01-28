# Publishing Bolt Design System to GitHub

This guide will help you publish your design system to the GitHub repository following the same pattern as the design tokens package.

## Repository Information

**Design Tokens Repo:** https://github.com/santakrishnan/bolt-design-token  
**Design System Repo:** https://github.com/santakrishnan/bolt-design-system

---

## Prerequisites

Before you start, ensure you have:

- [x] Git installed
- [x] GitHub account with access to the repository
- [x] All changes committed locally
- [x] Design tokens package published and working

---

## Step 1: Verify Current Repository Status

Check your current git status:

```bash
git status
```

Check current remote:

```bash
git remote -v
```

If you see a different remote (like the old 8bitcn repo), you'll need to update it.

---

## Step 2: Update Git Remote (if needed)

If the remote is pointing to the wrong repository:

```bash
# Remove old remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/santakrishnan/bolt-design-system.git

# Verify
git remote -v
```

---

## Step 3: Prepare for Initial Push

### Option A: Fresh Repository (Recommended)

If the GitHub repository is empty or you want a clean start:

```bash
# Ensure you're on main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### Option B: Existing Repository with History

If the repository already has commits:

```bash
# Fetch existing commits
git fetch origin

# Merge or rebase (choose one)
git merge origin/main --allow-unrelated-histories
# OR
git rebase origin/main

# Push
git push -u origin main
```

---

## Step 4: Set Up GitHub Actions for Automated Publishing

The design tokens repo uses semantic-release for automated versioning. Let's set up something similar for the design system.

### Create GitHub Actions Workflow

Create `.github/workflows/publish.yml`:

```yaml
name: Publish Design System

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "pnpm"

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 9

      - name: Install dependencies
        run: pnpm install

      - name: Run linting
        run: pnpm check

      - name: Build project
        run: pnpm build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    permissions:
      contents: write
      pages: write
      id-token: write

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "pnpm"

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 9

      - name: Install dependencies
        run: pnpm install
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Build project
        run: pnpm build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Save

---

## Step 6: Update package.json for Deployment

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "check": "ultracite check",
    "fix": "ultracite fix",
    "prepare": "husky",
    "generate:docs": "tsx scripts/generate-component-docs.ts",
    "export": "next build && next export"
  }
}
```

---

## Step 7: Configure Next.js for Static Export

Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bolt-design-system' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bolt-design-system/' : '',
};

export default withMDX(nextConfig);
```

---

## Step 8: Create .gitignore (if not exists)

Ensure your `.gitignore` includes:

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/
build/
dist/

# Production
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Environment
.env
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Misc
.cache/
```

---

## Step 9: Initial Commit and Push

```bash
# Stage all changes
git add .

# Commit with conventional commit message
git commit -m "feat: initial design system setup with modern components"

# Push to GitHub
git push -u origin main
```

---

## Step 10: Verify Deployment

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Watch the workflow run
4. Once complete, visit: `https://santakrishnan.github.io/bolt-design-system`

---

## Future Workflow

### Making Changes

```bash
# 1. Create a new branch
git checkout -b feature/new-component

# 2. Make your changes
# ... edit files ...

# 3. Run linting
pnpm fix

# 4. Commit changes
git add .
git commit -m "feat(components): add new button variant"

# 5. Push branch
git push origin feature/new-component

# 6. Create Pull Request on GitHub
# 7. Merge to main
# 8. GitHub Actions will automatically deploy
```

### Commit Message Convention

Follow conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:

```bash
git commit -m "feat(components): add tooltip component"
git commit -m "fix(button): correct hover state styling"
git commit -m "docs: update installation guide"
```

---

## Troubleshooting

### Issue: Push rejected

**Solution:** Pull latest changes first

```bash
git pull origin main --rebase
git push origin main
```

### Issue: Build fails in GitHub Actions

**Solution:** Check the Actions tab for error logs

```bash
# Test build locally first
pnpm build
```

### Issue: GitHub Pages not updating

**Solution:**

1. Check Actions tab for deployment status
2. Verify GitHub Pages is enabled in Settings
3. Clear browser cache

### Issue: Authentication error with design tokens

**Solution:** Ensure `NODE_AUTH_TOKEN` is set in GitHub Secrets:

1. Go to Settings → Secrets and variables → Actions
2. Add `NODE_AUTH_TOKEN` with your GitHub Personal Access Token

---

## Quick Reference Commands

```bash
# Check status
git status

# Stage all changes
git add .

# Commit
git commit -m "feat: your message"

# Push
git push origin main

# Pull latest
git pull origin main

# Create branch
git checkout -b feature/branch-name

# Switch branch
git checkout main

# View remotes
git remote -v

# View commit history
git log --oneline
```

---

## Repository Structure

After pushing, your repository should have:

```
bolt-design-system/
├── .github/
│   └── workflows/
│       └── publish.yml
├── app/
├── components/
├── content/
├── public/
├── .gitignore
├── package.json
├── next.config.ts
├── README.md
└── ... other files
```

---

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Set up GitHub Actions
3. ✅ Configure GitHub Pages
4. ✅ Verify deployment
5. ✅ Update README with live demo link
6. ✅ Share with team

---

## Live URLs

After deployment:

- **Repository:** https://github.com/santakrishnan/bolt-design-system
- **Live Site:** https://santakrishnan.github.io/bolt-design-system
- **Design Tokens:** https://github.com/santakrishnan/bolt-design-token

---

**Ready to publish?** Start with Step 1!
