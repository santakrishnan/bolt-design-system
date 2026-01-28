# Component Library Build Configuration

## What Was Done

Successfully configured the Bolt Design package for component library distribution with TypeScript compilation.

### Changes Made

1. **TypeScript Build Configuration** (`tsconfig.build.json`)

   - Configured to compile components, lib, hooks, and types to `dist/` folder
   - Generates declaration files (.d.ts) and source maps
   - Excludes app, content, tests, and Next.js specific files

2. **Package Entry Points** (`index.ts` and `components/index.ts`)

   - Created root `index.ts` that exports components, utilities, and hooks
   - Created `components/index.ts` that exports blocks and UI components
   - These compile to `dist/index.js` and `dist/components/index.js`

3. **Package.json Updates**

   - Added `main: "./dist/index.js"` - main entry point
   - Added `types: "./dist/index.d.ts"` - TypeScript definitions
   - Added `exports` field with subpath exports for blocks, ui, lib, and hooks
   - Added `files: ["dist", "README.md"]` - only publish compiled code
   - Updated build script to run `build:lib` before Next.js build

4. **CI/CD Workflow** (`.github/workflows/release.yml`)

   - Updated to run `pnpm run build:lib` before `pnpm run build`
   - This ensures compiled library files are included in the package

5. **Other Updates**
   - Added `dist/` to `.gitignore`
   - Fixed TypeScript error in `menubar.tsx` with explicit type annotations
   - Excluded barrel files (`index.ts`, `components/index.ts`) from linting

## Package Structure

When published, the package will include:

```
@santakrishnan/bolt-design/
├── dist/
│   ├── index.js              # Main entry point
│   ├── index.d.ts            # TypeScript definitions
│   ├── components/           # All components (compiled)
│   ├── lib/                  # Utilities (compiled)
│   ├── hooks/                # React hooks (compiled)
│   └── ...
└── README.md
```

## Usage in Other Projects

### Installation

```bash
npm install @santakrishnan/bolt-design
# or
pnpm add @santakrishnan/bolt-design
```

### Importing Components

```tsx
// Main exports
import {
  HeroBanner,
  LoginForm,
  Button,
  Card,
} from "@santakrishnan/bolt-design";

// Subpath exports
import { HeroBanner } from "@santakrishnan/bolt-design/blocks/hero-banner";
import { Button } from "@santakrishnan/bolt-design/ui/button";
import { cn } from "@santakrishnan/bolt-design/lib/utils";
import { useMobile } from "@santakrishnan/bolt-design/hooks/use-mobile";
```

## Next Steps

1. **Wait for GitHub Actions to complete** - Check the Actions tab to ensure the build and publish succeed

2. **Verify the published package**:

   ```bash
   npm view @santakrishnan/bolt-design
   ```

3. **Test in bolt-demo project**:

   - Install the new version: `pnpm add @santakrishnan/bolt-design@latest`
   - Try importing and using components
   - Verify TypeScript types work correctly

4. **Consider adding CSS/styles**:

   - The current setup only exports JavaScript/TypeScript
   - You may need to export CSS files or document that users need Tailwind CSS v4
   - Consider adding `app/globals.css` to the exports if needed

5. **Update documentation**:
   - Add installation and usage instructions to README.md
   - Document which peer dependencies are required (React 19, Tailwind CSS v4, etc.)
   - Add examples of importing and using components

## Important Notes

- This is a **dual-purpose repository**: documentation site + npm package
- The documentation site (Next.js) is separate from the published package
- Only the `dist/` folder contents are published to npm
- Styles are NOT included - users need to set up Tailwind CSS v4 themselves
- This follows the shadcn/ui model where components are distributed as source code

## Potential Issues to Watch For

1. **Missing dependencies**: Components may import from packages not listed in dependencies
2. **Path aliases**: The `@/*` imports are resolved during build, but verify they work correctly
3. **CSS/Styles**: Components rely on Tailwind classes - users need proper Tailwind setup
4. **Peer dependencies**: React 19, Radix UI components, etc. should be peer dependencies

## Alternative Approach: Registry-Based Distribution

Consider if the shadcn/ui registry approach (via `registry.json`) is better than npm package distribution:

**Pros of registry approach**:

- Users get source code they can modify
- No build/compilation needed
- Better for customization
- Already set up in this project

**Pros of npm package**:

- Easier installation (just `npm install`)
- Versioning and updates are simpler
- Smaller bundle sizes (tree-shaking)
- Standard npm workflow

You may want to support **both approaches**: registry for customization, npm for quick installation.
