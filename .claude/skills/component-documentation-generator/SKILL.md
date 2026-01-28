---
name: component-documentation-generator
description: Generate comprehensive MDX documentation for React components following Bolt Design patterns
version: 1.0.0
---

# Component Documentation Generator

This skill helps generate comprehensive, well-structured MDX documentation for React components in the Bolt Design component library, following shadcn/ui documentation patterns.

## When to Use This Skill

Use this skill when you need to:

- Create documentation for a new component
- Update existing component documentation
- Ensure documentation follows Bolt Design standards
- Generate examples and usage patterns for components

## Documentation Structure

Every component documentation should follow this structure:

### 1. Frontmatter

```yaml
---
title: Component Name
description: Brief description of what the component does
---

```

### 2. Import Statement

Show how to import the component:

```tsx
import { ComponentName } from "@/components/ui/component-name";
```

### 3. Basic Usage Example

Provide a simple, working example:

```tsx
<ComponentName>Example content</ComponentName>
```

### 4. Examples Section

Include multiple examples showing different use cases:

- Default variant
- Different sizes
- Different states (disabled, loading, etc.)
- With different props
- Complex compositions

### 5. Props Table

Document all props in a markdown table:

| Prop       | Type     | Default     | Description        |
| ---------- | -------- | ----------- | ------------------ |
| `propName` | `string` | `undefined` | What the prop does |

### 6. Accessibility Notes

Include accessibility considerations:

- ARIA attributes used
- Keyboard navigation support
- Screen reader compatibility

## Code Block Formatting

Always use proper syntax highlighting with file titles:

```tsx title="components/ui/component-name.tsx"
// Component code here
```

## Installation Commands

Include installation using the InstallationCommands component:

```tsx
import InstallationCommands from "@/components/installation-commands";

<InstallationCommands packageName="component-name" />;
```

## Live Examples

Wrap interactive examples in proper containers:

```tsx
<div className="my-6 rounded-lg border p-4">
  <ComponentName />
</div>
```

## Best Practices

1. **Start Simple**: Begin with the most basic usage
2. **Progressive Complexity**: Show increasingly complex examples
3. **Real-World Use Cases**: Include practical examples
4. **Visual Variety**: Show different variants and states
5. **Code Quality**: Ensure all examples are properly formatted and linted
6. **Accessibility First**: Always mention accessibility features
7. **TypeScript Types**: Include type definitions in examples

## Example Template

````mdx
---
title: Button
description: A customizable button component with multiple variants and sizes
---

import { Button } from "@/components/ui/button";
import InstallationCommands from "@/components/installation-commands";

## Installation

<InstallationCommands packageName="button" />

## Usage

```tsx
import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button>Click me</Button>;
}
```
````

## Examples

### Variants

<div className="flex gap-4">
  <Button variant="default">Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
</div>

```tsx
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Sizes

<div className="flex items-center gap-4">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
</div>

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

## Props

| Prop       | Type                                               | Default     | Description                |
| ---------- | -------------------------------------------------- | ----------- | -------------------------- |
| `variant`  | `"default" \| "secondary" \| "outline" \| "ghost"` | `"default"` | Visual style variant       |
| `size`     | `"sm" \| "default" \| "lg"`                        | `"default"` | Button size                |
| `disabled` | `boolean`                                          | `false`     | Whether button is disabled |
| `asChild`  | `boolean`                                          | `false`     | Render as child element    |

## Accessibility

- Uses semantic `<button>` element
- Supports keyboard navigation (Enter/Space)
- Includes proper ARIA attributes
- Respects disabled state
- Focus visible indicator

```

## Checklist

Before completing documentation, verify:

- [ ] Frontmatter is complete and accurate
- [ ] Import statement is correct
- [ ] Basic usage example works
- [ ] Multiple examples show different use cases
- [ ] Props table is comprehensive
- [ ] Code blocks have proper syntax highlighting
- [ ] Installation command is included
- [ ] Accessibility notes are present
- [ ] All code examples are tested and working
- [ ] Examples follow Bolt Design patterns
- [ ] MDX formatting is correct
- [ ] Links to related components are included

## Related Files

When creating documentation, also consider:
- Component implementation in `components/ui/`
- Registry entry in `registry.json`
- Example usage in `components/examples/`
- Type definitions if complex

## Notes

- Follow the existing documentation style in `content/docs/components/`
- Use the same formatting and structure as other component docs
- Ensure all examples are accessible and follow best practices
- Test all code examples before publishing
- Keep descriptions concise but informative
```
