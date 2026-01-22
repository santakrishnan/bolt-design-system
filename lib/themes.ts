export const Theme = {
  Default: "default",
  Modern: "modern",
  Professional: "professional",
  Minimal: "minimal",
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

const themes = [
  {
    name: Theme.Default,
    color: `.theme-default {
  :root {
    --radius: 8px;
    --background: oklch(1 0 0);
    --foreground: oklch(0.141 0.005 285.823);
    --primary: oklch(0.21 0.006 285.885);
    --primary-foreground: oklch(0.985 0 0);
    --secondary: oklch(0.967 0.001 286.375);
    --secondary-foreground: oklch(0.21 0.006 285.885);
    --accent: oklch(0.967 0.001 286.375);
    --accent-foreground: oklch(0.21 0.006 285.885);
    --border: oklch(0.92 0.004 286.32);
    --ring: oklch(0.705 0.015 286.067);
  }
  
  &.dark {
    --background: oklch(0.141 0.005 285.823);
    --foreground: oklch(0.985 0 0);
    --primary: oklch(0.92 0.004 286.32);
    --primary-foreground: oklch(0.21 0.006 285.885);
    --secondary: oklch(0.274 0.006 286.033);
    --secondary-foreground: oklch(0.985 0 0);
    --accent: oklch(0.274 0.006 286.033);
    --accent-foreground: oklch(0.985 0 0);
    --border: oklch(1 0 0 / 10%);
    --ring: oklch(0.552 0.016 285.938);
  }
}`,
  },
  {
    name: Theme.Modern,
    color: `.theme-modern {
  :root {
    --radius: 8px;
    --primary: oklch(0.55 0.22 264);
    --primary-foreground: oklch(0.985 0 0);
    --secondary: oklch(0.92 0.02 264);
    --secondary-foreground: oklch(0.21 0.006 285.885);
    --accent: oklch(0.65 0.18 220);
    --accent-foreground: oklch(0.985 0 0);
    --ring: oklch(0.55 0.22 264);
  }
  
  &.dark {
    --primary: oklch(0.65 0.22 264);
    --primary-foreground: oklch(0.141 0.005 285.823);
    --secondary: oklch(0.3 0.02 264);
    --secondary-foreground: oklch(0.985 0 0);
    --accent: oklch(0.55 0.18 220);
    --accent-foreground: oklch(0.985 0 0);
  }
}`,
  },
  {
    name: Theme.Professional,
    color: `.theme-professional {
  :root {
    --radius: 8px;
    --primary: oklch(0.5 0.2 280);
    --primary-foreground: oklch(0.985 0 0);
    --secondary: oklch(0.92 0.02 280);
    --secondary-foreground: oklch(0.21 0.006 285.885);
    --accent: oklch(0.6 0.15 260);
    --accent-foreground: oklch(0.985 0 0);
    --ring: oklch(0.5 0.2 280);
  }
  
  &.dark {
    --primary: oklch(0.6 0.2 280);
    --primary-foreground: oklch(0.141 0.005 285.823);
    --secondary: oklch(0.3 0.02 280);
    --secondary-foreground: oklch(0.985 0 0);
    --accent: oklch(0.5 0.15 260);
    --accent-foreground: oklch(0.985 0 0);
  }
}`,
  },
  {
    name: Theme.Minimal,
    color: `.theme-minimal {
  :root {
    --radius: 8px;
    --primary: oklch(0.45 0.02 260);
    --primary-foreground: oklch(0.985 0 0);
    --secondary: oklch(0.95 0.005 260);
    --secondary-foreground: oklch(0.21 0.006 285.885);
    --accent: oklch(0.92 0.01 260);
    --accent-foreground: oklch(0.21 0.006 285.885);
    --muted: oklch(0.95 0.005 260);
    --muted-foreground: oklch(0.45 0.02 260);
    --ring: oklch(0.45 0.02 260);
  }
  
  &.dark {
    --primary: oklch(0.75 0.02 260);
    --primary-foreground: oklch(0.141 0.005 285.823);
    --secondary: oklch(0.25 0.005 260);
    --secondary-foreground: oklch(0.985 0 0);
    --accent: oklch(0.3 0.01 260);
    --accent-foreground: oklch(0.985 0 0);
    --muted: oklch(0.25 0.005 260);
    --muted-foreground: oklch(0.65 0.02 260);
  }
}`,
  },
];

export function getThemeCode(themeName: Theme): string {
  const theme = themes.find((t) => t.name === themeName);
  return theme?.color || themes[0].color;
}

export default themes;
