# Bolt Design

A modern component library built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. Sleek, accessible, and ready to use.

[![GitHub](https://img.shields.io/github/stars/santakrishnan/bolt-design-system?style=social)](https://github.com/santakrishnan/bolt-design-system)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

![Bolt Design UI Components](./public/assets/bolt-design-readme-showcase.png)

## 🚀 Quick Start

Visit the live demo: [https://santakrishnan.github.io/bolt-design-system](https://santakrishnan.github.io/bolt-design-system)

## 📦 Installation

Add components to your project using the shadcn CLI:

```bash
pnpm dlx shadcn@latest add design-ui/button
```

## 🎨 Features

- **Modern Stack** - Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4
- **Accessible** - All components follow accessibility best practices with proper ARIA attributes
- **Customizable** - Theme system with multiple variants, dark mode support, and design tokens
- **Type-Safe** - Full TypeScript support with strict mode enabled
- **Open Source** - Free to use and modify under MIT license

## 🛠️ Development

### Prerequisites

- Node.js 20+
- pnpm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/santakrishnan/bolt-design-system.git
cd bolt-design-system

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see the components in action.

### Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm check        # Run linting checks
pnpm fix          # Auto-fix linting issues
```

## 📚 Documentation

Full documentation is available at [/docs](https://santakrishnan.github.io/bolt-design-system/docs)

### Usage Example

```typescript
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  );
}
```

## 🎨 Design Tokens

This project uses a separate design tokens package for consistent styling:

- **Package:** [@santakrishnan/bolt-design-tokens](https://github.com/santakrishnan/bolt-design-token)
- **Version:** 1.1.0
- **Registry:** GitHub Packages

## 🤝 Contributing

Contributions are welcome! Please read the [contributing guide](./contributing.md) for details.

### Commit Convention

We follow conventional commits:

```bash
feat: add new component
fix: correct button styling
docs: update installation guide
```

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 🔗 Links

- **Repository:** [github.com/santakrishnan/bolt-design-system](https://github.com/santakrishnan/bolt-design-system)
- **Live Demo:** [santakrishnan.github.io/bolt-design-system](https://santakrishnan.github.io/bolt-design-system)
- **Design Tokens:** [github.com/santakrishnan/bolt-design-token](https://github.com/santakrishnan/bolt-design-token)

## 👤 Author

**Santakrishnan**

- GitHub: [@santakrishnan](https://github.com/santakrishnan)

---

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS
