#!/usr/bin/env tsx
/**
 * Script to generate MDX documentation for 8-bit components
 * Usage: pnpm tsx scripts/generate-component-docs.ts <component-name> [options]
 */

import fs from "node:fs";
import path from "node:path";

interface ComponentConfig {
  name: string;
  type: "component" | "block";
  category?: "gaming" | "authentication" | "dashboard" | "calendar" | "charts";
  title: string;
  description: string;
  componentPath: string;
  registryDependencies?: string[];
  dependencies?: string[];
}

interface PropInfo {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description?: string;
}

// Regex patterns at top level for performance
const INTERFACE_REGEX = /export interface \w+Props[^{]*{([^}]*)}/s;
const PROP_LINE_REGEX = /^\s*(\w+)(\?)?:\s*([^;]+);?\s*$/;
const COMPONENTS_PATH_REGEX = /^components\//;
const TSX_EXTENSION_REGEX = /\.tsx$/;

/**
 * Extract props from TypeScript interface in component file
 */
function extractPropsFromComponent(componentPath: string): PropInfo[] {
  const fullPath = path.join(process.cwd(), componentPath);

  if (!fs.existsSync(fullPath)) {
    console.warn(`Component file not found: ${fullPath}`);
    return [];
  }

  const content = fs.readFileSync(fullPath, "utf-8");
  const props: PropInfo[] = [];

  const interfaceMatch = content.match(INTERFACE_REGEX);

  if (interfaceMatch) {
    const propsBlock = interfaceMatch[1];
    const propLines = propsBlock.split("\n").filter((line) => line.trim());

    for (const line of propLines) {
      const propMatch = line.match(PROP_LINE_REGEX);
      if (propMatch) {
        const [, name, optional, type] = propMatch;
        props.push({
          name,
          type: type.trim(),
          required: !optional,
        });
      }
    }
  }

  return props;
}

/**
 * Generate example usage code based on props
 */
function generateExampleUsage(
  componentName: string,
  props: PropInfo[]
): string {
  const requiredProps = props.filter(
    (p) => p.required && p.name !== "children"
  );

  if (requiredProps.length === 0) {
    return `<${componentName} />`;
  }

  const propExamples: Record<string, string> = {
    title: '"Example Title"',
    subtitle: '"Example subtitle text"',
    description: '"Example description"',
    backgroundSrc: '"/images/example.png"',
    src: '"/images/example.png"',
    alt: '"Example image"',
    height: '"md"',
    align: '"center"',
    variant: '"default"',
    size: '"md"',
  };

  const exampleProps = requiredProps
    .map((prop) => {
      const example = propExamples[prop.name] || `{/* ${prop.name} */}`;
      return `  ${prop.name}=${example}`;
    })
    .join("\n");

  return `<${componentName}\n${exampleProps}\n/>`;
}

/**
 * Generate MDX documentation content
 */
function generateMDXContent(config: ComponentConfig): string {
  const { name, type, title, description, componentPath } = config;

  const isBlock = type === "block";
  const componentName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const importPath = componentPath
    .replace(COMPONENTS_PATH_REGEX, "@/components/")
    .replace(TSX_EXTENSION_REGEX, "");
  const importStatement = isBlock
    ? `import ${componentName} from "${importPath}";`
    : `import { ${componentName} } from "${importPath}";`;

  const props = extractPropsFromComponent(componentPath);
  const exampleUsage = generateExampleUsage(componentName, props);

  const propsTable =
    props.length > 0
      ? `
## Props

---

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
${props
  .map(
    (prop) =>
      `| \`${prop.name}\` | \`${prop.type}\` | ${prop.required ? "Yes" : "No"} | ${prop.defaultValue || "-"} | ${prop.description || "-"} |`
  )
  .join("\n")}
`
      : "";

  return `---
title: ${title}
description: ${description}
---

${importStatement}
import CopyCommandButton from "@/components/copy-command-button";
import InstallationCommands from "@/components/installation-commands";
import ComponentPreview from "@/components/component-preview";

<div className="flex flex-col md:flex-row items-center justify-end gap-2 mb-2">
  <CopyCommandButton
    copyCommand="pnpm dlx shadcn@latest add design-ui/${name}"
    command="pnpm dlx shadcn@latest add design-ui/${name}"
  />
</div>

<ComponentPreview title="${title}" name="${name}">
  ${exampleUsage}
</ComponentPreview>

## Installation

---

<InstallationCommands packageName="${name}" />

## Usage

---

\`\`\`tsx
${importStatement}
\`\`\`

\`\`\`tsx
${exampleUsage}
\`\`\`
${propsTable}
`;
}

/**
 * Generate registry.json entry
 */
function generateRegistryEntry(config: ComponentConfig): object {
  const {
    name,
    type,
    title,
    description,
    componentPath,
    registryDependencies = [],
    dependencies = [],
  } = config;

  const files = [
    {
      path: componentPath,
      type: `registry:${type}`,
      target: componentPath,
    },
  ];

  const entry: Record<string, unknown> = {
    name,
    type: `registry:${type}`,
    title,
    description,
    registryDependencies,
    files,
  };

  if (type === "block") {
    entry.categories = [config.category || "gaming"];
  }

  if (dependencies.length > 0) {
    entry.dependencies = dependencies;
  }

  return entry;
}

/**
 * Update registry.json with new component
 */
function updateRegistry(config: ComponentConfig): void {
  const registryPath = path.join(process.cwd(), "registry.json");
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"));

  const newEntry = generateRegistryEntry(config);

  // Check if entry already exists
  const existingIndex = registry.items.findIndex(
    (item: { name: string }) => item.name === config.name
  );

  if (existingIndex >= 0) {
    console.log(`Updating existing registry entry for: ${config.name}`);
    registry.items[existingIndex] = newEntry;
  } else {
    console.log(`Adding new registry entry for: ${config.name}`);
    registry.items.push(newEntry);
  }

  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
  console.log("✓ Registry updated");
}

/**
 * Write MDX documentation file
 */
function writeMDXFile(config: ComponentConfig, content: string): void {
  const { name, type, category } = config;

  let docsPath: string;
  if (type === "block" && category) {
    docsPath = path.join(
      process.cwd(),
      "content",
      "docs",
      "blocks",
      category,
      `${name}.mdx`
    );
  } else if (type === "block") {
    docsPath = path.join(
      process.cwd(),
      "content",
      "docs",
      "blocks",
      `${name}.mdx`
    );
  } else {
    docsPath = path.join(
      process.cwd(),
      "content",
      "docs",
      "components",
      `${name}.mdx`
    );
  }

  // Ensure directory exists
  const dir = path.dirname(docsPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(docsPath, content);
  console.log(`✓ Documentation created: ${docsPath}`);
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help")) {
    console.log(`
Usage: pnpm tsx scripts/generate-component-docs.ts <component-name> [options]

Options:
  --type <component|block>       Component type (default: component)
  --category <category>          Block category (gaming, authentication, etc.)
  --title <title>                Component title
  --description <description>    Component description
  --path <path>                  Component file path
  --deps <dep1,dep2>            Registry dependencies (comma-separated)
  --npm-deps <dep1,dep2>        NPM dependencies (comma-separated)
  --skip-registry               Skip updating registry.json
  --skip-docs                   Skip generating MDX docs

Example:
  pnpm tsx scripts/generate-component-docs.ts image-hero-banner \\
    --type block \\
    --category gaming \\
    --title "Image Hero Banner" \\
    --description "A hero banner with background image" \\
    --path components/ui/design-ui/blocks/image-hero-banner.tsx \\
    --deps card,button
    `);
    process.exit(0);
  }

  const name = args[0];
  const getArg = (flag: string) => {
    const index = args.indexOf(flag);
    return index >= 0 ? args[index + 1] : undefined;
  };

  const componentType =
    (getArg("--type") as "component" | "block") || "component";

  const config: ComponentConfig = {
    name,
    type: componentType,
    category: getArg("--category") as ComponentConfig["category"],
    title:
      getArg("--title") ||
      name
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
    description:
      getArg("--description") ||
      `An 8-bit ${name.replace(/-/g, " ")} component`,
    componentPath:
      getArg("--path") ||
      `components/ui/design-ui/${componentType === "block" ? "blocks/" : ""}${name}.tsx`,
    registryDependencies: getArg("--deps")?.split(",").filter(Boolean),
    dependencies: getArg("--npm-deps")?.split(",").filter(Boolean),
  };

  console.log("\nGenerating documentation for:", config.name);
  console.log("Configuration:", JSON.stringify(config, null, 2));

  const mdxContent = generateMDXContent(config);

  if (!args.includes("--skip-docs")) {
    writeMDXFile(config, mdxContent);
  }

  if (!args.includes("--skip-registry")) {
    updateRegistry(config);
  }

  console.log("\n✓ Documentation generation complete!\n");
}

main();
