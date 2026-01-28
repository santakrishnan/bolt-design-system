# Automated Release Workflow

This workflow automatically publishes your package to GitHub Packages using semantic-release when you push to the main branch.

## How It Works

1. **Commit with conventional format** to main branch
2. **GitHub Actions runs automatically** on every push
3. **semantic-release analyzes commits** and determines version bump
4. **Package is published** to GitHub Packages
5. **GitHub Release is created** with auto-generated changelog

## Semantic Versioning

Your commit messages determine the version bump:

- `fix:` → Patch release (0.1.0 → 0.1.1)
- `feat:` → Minor release (0.1.0 → 0.2.0)
- `feat!:` or `BREAKING CHANGE:` → Major release (0.1.0 → 1.0.0)

## Commit Message Format

```bash
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Examples

```bash
# Patch release
fix(button): resolve hover state issue

# Minor release
feat(avatar): add new size variant

# Major release
feat(button)!: redesign button API

BREAKING CHANGE: The variant prop has been renamed to appearance
```

## Installation for Users

Users can install your package from GitHub Packages:

### 1. Create `.npmrc` in their project

```
@santakrishnan:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

### 2. Set GitHub token

```bash
export NODE_AUTH_TOKEN=your_github_personal_access_token
```

### 3. Install the package

```bash
pnpm add @santakrishnan/bolt-design
```

## No Manual Steps Required

Unlike traditional workflows, you don't need to:

- ❌ Manually update version in package.json
- ❌ Create git tags
- ❌ Run `npm publish`
- ❌ Write changelogs

Everything is automated based on your commit messages!
