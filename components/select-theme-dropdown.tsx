"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";
import { Theme } from "@/lib/themes";

const themes = [
  { name: Theme.Default, color: "#000" },
  { name: Theme.Modern, color: "#3b82f6" },
  { name: Theme.Professional, color: "#6366f1" },
  { name: Theme.Minimal, color: "#64748b" },
];

export function SelectThemeDropdown({
  activeTheme,
  setActiveTheme,
}: {
  activeTheme: Theme;
  setActiveTheme: (theme: Theme) => void;
}) {
  return (
    <Select
      onValueChange={(val) => setActiveTheme(val as Theme)}
      value={activeTheme}
    >
      <SelectTrigger className="w-full">
        <SelectValue font="retro" placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        {themes.map((theme) => (
          <SelectItem key={theme.name} value={theme.name}>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-3 w-3 rounded-sm border border-foreground"
                style={{ backgroundColor: theme.color }}
              />
              <span className="capitalize">{theme.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
