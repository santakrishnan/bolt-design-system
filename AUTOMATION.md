# Component Documentation Automation

This project now includes automated documentation generation for design-ui components.

## What Was Created

### 1. Documentation Generator Script

**Location**: `scripts/generate-component-docs.ts`

Automatically generates:

- MDX documentation files with proper frontmatter
- Component props tables extracted from TypeScript interfaces
- Installation commands and usage examples
- Registry.json entries with dependencies

### 2. Example Component

**Location**: `components/ui/design-ui/blocks/image-hero-banner.tsx`

A new Image Hero Banner block component demonstrating:

- Full TypeScript prop definitions
- Integration with existing design-ui components (Card, Button, Badge)
- Responsive design with configurable heights and alignment
- Background image with overlay effects

### 3. Generated Documentation

**Location**: `content/docs/blocks/gaming/image-hero-banner.mdx`

Auto-generated documentation including:

- Component preview
- Installation instructions
- Usage examples
- Complete props table

## Quick Start

### Generate docs for a new component:

```bash
pnpm generate:docs <component-name> [options]
```

### Example - Create a new block:

```bash
pnpm generate:docs my-new-block \
  --type block \
  --category gaming \
  --title "My New Block" \
  --description "Description of my block" \
  --path components/ui/design-ui/blocks/my-new-block.tsx \
  --deps card,button
```

### Example - Create a new component:

```bash
pnpm generate:docs my-component \
  --type component \
  --title "My Component" \
  --description "Description of my component" \
  --deps button
```

## Workflow

1. **Create your component** with TypeScript interface
2. **Run the generator** with appropriate flags
3. **Review the generated MDX** and customize if needed
4. **Test locally** with `pnpm dev`
5. **Commit** both component and documentation

## Benefits

- **Consistency**: All docs follow the same structure
- **Speed**: Generate docs in seconds instead of minutes
- **Accuracy**: Props are extracted directly from TypeScript
- **Maintainability**: Easy to regenerate when components change

## See Also

- `scripts/README.md` - Detailed script documentation
- `content/docs/blocks/gaming/image-hero-banner.mdx` - Example output
- `components/ui/design-ui/blocks/image-hero-banner.tsx` - Example component
