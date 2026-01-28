# Agent Guidelines - Bolt Design

This file provides essential information for agentic coding assistants working in this repository.

## Project Overview

Bolt Design is a modern component library built with Next.js 16 (App Router), React 19, TypeScript (strict mode), Tailwind CSS v4, and shadcn/ui + Radix UI components. It's a shadcn/ui registry that provides sleek, modern components.

**Package Manager**: pnpm
**Registry**: https://ui.shadcn.com/registry
**Installation**: `pnpm dlx shadcn@latest add [component-name]`

## Commands

### Development

- `pnpm dev` - Start development server (http://localhost:3000)
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Code Quality

- `pnpm check` - Run Ultracite linting checks (Biome-based)
- `pnpm fix` - Auto-fix linting issues (Ultracite)
- `npx ultracite fix` - Format and fix all issues
- `npx ultracite check` - Check for issues only
- `npx ultracite doctor` - Diagnose Ultracite setup

### Testing

No test framework is currently configured. When adding tests, use Vitest as the preferred testing framework.

## Code Style Guidelines

### Formatting & Linting

This project uses **Ultracite** (Biome-based preset) for automatic formatting and linting. Always run `pnpm fix` before committing. Biome handles most formatting automatically - focus on code quality and logic.

### Component Patterns

**Standard Pattern**: All components use shadcn/ui primitives:

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MyComponent({ className, ...props }) {
  return (
    <Button className={cn("custom-styles", className)} {...props}>
      Click me
    </Button>
  );
}
```

### Imports

- Use `@/*` path alias for internal imports (configured in tsconfig.json)
  ```tsx
  import { Button } from "@/components/ui/button";
  import { cn } from "@/lib/utils";
  ```
- Import order: External libraries (alphabetical) → Internal `@/*` imports
- Prefer named exports over default exports

### TypeScript

- **Strict mode enabled** - All types must be properly defined
- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use `const` assertions (`as const`) for immutable literal values
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers

### React & JSX

- Use function components only - no class components
- Call hooks at top level only, never conditionally
- Specify all dependencies in hook dependency arrays correctly
- Use `key` prop for iterables (prefer unique IDs over array indices)
- Nest children between opening/closing tags, not as props
- **Don't define components inside other components**
- For React 19+: Use `ref` as prop instead of `React.forwardRef`

### Next.js Specific

- Use Next.js `<Image>` component for all images (never `<img>` tags)
- Use App Router metadata API for head elements
- Use Server Components for async data fetching
- `"use cache"` directive for cached async data (see StarsCount component)

### Code Organization

- Keep functions focused with reasonable cognitive complexity
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Avoid barrel files (index files that re-export everything)
- Group related code and separate concerns

### Error Handling

- Throw `Error` objects with descriptive messages, not strings
- Use `try-catch` blocks meaningfully in async code
- Prefer early returns over nested conditionals for error cases
- Remove `console.log`, `debugger`, and `alert` from production code

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports
- Avoid creating objects/arrays inside loops when possible

### Naming Conventions

- Components: PascalCase (e.g., `UserProfile`, `Button`)
- Functions/hooks: camelCase (e.g., `useIsMobile`, `calculateTotal`)
- Constants/Types: PascalCase (e.g., `MOBILE_BREAKPOINT`, `ButtonProps`)
- CSS classes: kebab-case (handled by Tailwind)
- Files: kebab-case for utilities, PascalCase for components

### CSS & Styling

- Use Tailwind CSS v4 for all styling
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Avoid inline styles - use Tailwind classes
- Use semantic HTML elements with proper ARIA attributes
- **Theme tokens**: Use CSS custom properties from globals.css

### Accessibility

- Provide meaningful alt text for images
- Use proper heading hierarchy (h1 → h2 → h3)
- Add labels for form inputs
- Include keyboard handlers alongside mouse events
- Use semantic elements (`<button>`, `<nav>`, `<main>`) instead of divs with roles

### Security

- Add `rel="noopener"` when using `target="_blank"` on links
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Never use `eval()` or direct `document.cookie` assignment
- Validate and sanitize user input

### Commit Convention

Follow conventional commits: `category(scope): message`

Categories:

- `feat` - New features
- `fix` - Bug fixes (reference issue if applicable)
- `refactor` - Code changes that aren't fixes or features
- `docs` - Documentation changes
- `build` - Build/dependency changes
- `test` - Test changes
- `ci` - CI/CD configuration
- `chore` - Other changes

Example: `feat(components): add new prop to avatar component`

## Registry Structure

Components are registered in `registry.json` with specific patterns:

- **Component entries**: Include proper file mappings for components
- **Block entries**: Pre-built layouts like login forms, dashboards
- **Dependencies**: Explicitly declare shadcn/ui dependencies via `registryDependencies`
- **No CSS imports needed**: All global styles are in `app/globals.css`

## File Structure

```
/app              - Next.js App Router pages
/components       - React components
  /ui             - shadcn/ui components
/lib              - Utility functions
/config           - Configuration files
/hooks            - Custom React hooks
/types            - TypeScript type definitions
/public           - Static assets
```

## Documentation

This project uses **Fumadocs** for documentation generation and management:

- **Docs location**: `content/docs/` directory
- **Configuration**: `source.config.ts` defines docs collection
- **Search**: Built-in search functionality via `/app/api/search/route.ts`
- **MDX support**: Components documented in MDX format with custom components
- **URL structure**: Documentation served at `/docs/*` routes

## Important Notes

- Husky is configured for pre-commit hooks with lint-staged
- Lint-staged runs `pnpm check` on all staged files before commit
- Components are registered in `registry.json` - update when adding/modifying components
- Ultracite excludes: `public/`, `components/ui/`, `hooks/use-mobile.ts`, `lib/utils.ts`, `.source/`
- **All styles are global**: Styles are defined in `app/globals.css`
- **Use theme tokens**: Prefer CSS custom properties over hardcoded values
- **Use shadcn/ui components**: All components are from `@/components/ui/`
