# Component Documentation Generator

Automated script to generate MDX documentation and registry entries for 8-bit components.

## Quick Start

```bash
# Generate docs for a new component
pnpm generate:docs <component-name> [options]
```

## Examples

### Generate docs for a block component

```bash
pnpm generate:docs image-hero-banner \
  --type block \
  --category gaming \
  --title "Image Hero Banner" \
  --description "A hero banner with background image and call-to-action" \
  --path components/ui/design-ui/blocks/image-hero-banner.tsx \
  --deps card,badge,button
```

### Generate docs for a regular component

```bash
pnpm generate:docs tooltip \
  --type component \
  --title "Tooltip" \
  --description "A simple 8-bit tooltip component" \
  --path components/ui/design-ui/tooltip.tsx \
  --deps tooltip
```

### Generate docs with NPM dependencies

```bash
pnpm generate:docs date-picker \
  --type component \
  --title "Date Picker" \
  --description "A date picker with calendar" \
  --path components/ui/design-ui/date-picker.tsx \
  --deps button,calendar,popover \
  --npm-deps date-fns
```

## Options

| Option            | Description                                                   | Default                  |
| ----------------- | ------------------------------------------------------------- | ------------------------ |
| `--type`          | Component type: `component` or `block`                        | `component`              |
| `--category`      | Block category: `gaming`, `authentication`, `dashboard`, etc. | -                        |
| `--title`         | Display title for the component                               | Auto-generated from name |
| `--description`   | Component description                                         | Auto-generated           |
| `--path`          | Path to component file                                        | Auto-generated           |
| `--deps`          | Registry dependencies (comma-separated)                       | -                        |
| `--npm-deps`      | NPM dependencies (comma-separated)                            | -                        |
| `--skip-registry` | Skip updating registry.json                                   | false                    |
| `--skip-docs`     | Skip generating MDX docs                                      | false                    |

## What It Does

1. **Extracts Props**: Parses the component TypeScript interface to extract prop definitions
2. **Generates MDX**: Creates a complete MDX documentation file with:
   - Frontmatter (title, description)
   - Component imports
   - Installation commands
   - Usage examples
   - Props table
3. **Updates Registry**: Adds or updates the component entry in `registry.json`
4. **Organizes Files**: Places docs in the correct directory based on type and category

## File Structure

### Components

- Component file: `components/ui/design-ui/{name}.tsx`
- Documentation: `content/docs/components/{name}.mdx`

### Blocks

- Component file: `components/ui/design-ui/blocks/{name}.tsx`
- Documentation: `content/docs/blocks/{category}/{name}.mdx`

## Workflow

1. **Create your component** in `components/ui/design-ui/` or `components/ui/design-ui/blocks/`
2. **Define props interface** with clear TypeScript types
3. **Run the generator** with appropriate options
4. **Review and customize** the generated MDX file
5. **Test the documentation** by running `pnpm dev`

## Tips

- Always define a clear TypeScript interface for your component props
- Use descriptive prop names - they'll appear in the generated docs
- The script extracts basic prop info, but you can enhance the MDX manually
- Run `pnpm fix` after generation to ensure code style compliance

## Example Component Structure

```tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/design-ui/button";

export interface MyComponentProps extends React.ComponentProps<"div"> {
  title: string;
  description?: string;
  variant?: "default" | "retro";
  onAction?: () => void;
}

export default function MyComponent({
  className,
  title,
  description,
  variant = "default",
  onAction,
  ...props
}: MyComponentProps) {
  return (
    <div className={cn("my-component", className)} {...props}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <Button onClick={onAction}>Action</Button>
    </div>
  );
}
```

## Troubleshooting

**Props not extracted correctly?**

- Ensure your interface is exported and named `{ComponentName}Props`
- Use simple TypeScript types (the parser is basic)

**Wrong file paths?**

- Use the `--path` option to specify the exact component path

**Need to regenerate?**

- Just run the command again - it will update existing entries

**Want to skip certain steps?**

- Use `--skip-registry` or `--skip-docs` flags
