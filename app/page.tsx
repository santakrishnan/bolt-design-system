import Link from "next/link";
import ComponentShowcase from "@/components/examples/component-showcase";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-4 pt-10">
      {/* Hero Section */}
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-4xl md:text-5xl">Bolt Design</h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          A modern component library built with Next.js 16, React 19,
          TypeScript, Tailwind CSS v4, and shadcn/ui. Sleek, accessible, and
          ready to use.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/docs">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/docs/components">
            <Button size="lg" variant="outline">
              Browse Components
            </Button>
          </Link>
        </div>
      </div>

      {/* Component Showcase */}
      <ComponentShowcase />

      {/* Features Section */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-2 rounded-lg border bg-card p-6">
          <h3 className="font-semibold text-lg">Modern Stack</h3>
          <p className="text-muted-foreground text-sm">
            Built with the latest technologies: Next.js 16, React 19,
            TypeScript, and Tailwind CSS v4.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border bg-card p-6">
          <h3 className="font-semibold text-lg">Accessible</h3>
          <p className="text-muted-foreground text-sm">
            All components follow accessibility best practices with proper ARIA
            attributes and keyboard navigation.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border bg-card p-6">
          <h3 className="font-semibold text-lg">Customizable</h3>
          <p className="text-muted-foreground text-sm">
            Theme system with multiple variants, dark mode support, and design
            tokens for easy customization.
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-10 flex flex-col items-center gap-4 rounded-lg border bg-muted/50 p-8 text-center">
        <h2 className="font-bold text-2xl">
          Ready to build something amazing?
        </h2>
        <p className="max-w-xl text-muted-foreground">
          Start using Bolt Design components in your project today. Open source
          and free to use.
        </p>
        <Link href="/docs">
          <Button size="lg">View Documentation</Button>
        </Link>
      </div>
    </div>
  );
}
