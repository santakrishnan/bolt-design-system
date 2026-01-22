"use client";

import {
  Maximize2,
  Minimize2,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type ViewportSize = "desktop" | "tablet" | "mobile" | "fullscreen";
type Theme = "default" | "modern" | "professional" | "minimal";
type ColorMode = "light" | "dark";

interface BlockPreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function BlockPreview({ children, className }: BlockPreviewProps) {
  const [viewport, setViewport] = useState<ViewportSize>("desktop");
  const [theme, setTheme] = useState<Theme>("default");
  const [colorMode, setColorMode] = useState<ColorMode>("light");

  const viewportStyles = {
    desktop: "w-full",
    tablet: "max-w-[768px] mx-auto",
    mobile: "max-w-[375px] mx-auto",
    fullscreen: "w-full h-full",
  };

  const isFullscreen = viewport === "fullscreen";

  return (
    <>
      {/* Normal View */}
      {!isFullscreen && (
        <div className="relative">
          {/* Viewport Controls */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-lg border bg-background p-1 shadow-sm">
            <Button
              className="h-8 w-8"
              onClick={() => setViewport("desktop")}
              size="icon"
              title="Desktop view"
              variant={viewport === "desktop" ? "secondary" : "ghost"}
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              className="h-8 w-8"
              onClick={() => setViewport("tablet")}
              size="icon"
              title="Tablet view"
              variant={viewport === "tablet" ? "secondary" : "ghost"}
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              className="h-8 w-8"
              onClick={() => setViewport("mobile")}
              size="icon"
              title="Mobile view"
              variant={viewport === "mobile" ? "secondary" : "ghost"}
            >
              <Smartphone className="h-4 w-4" />
            </Button>
            <div className="mx-1 h-4 w-px bg-border" />
            <Button
              className="h-8 w-8"
              onClick={() => setViewport("fullscreen")}
              size="icon"
              title="Fullscreen view"
              variant="ghost"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <div className="mx-1 h-4 w-px bg-border" />
            <Select
              onValueChange={(value) => setTheme(value as Theme)}
              value={theme}
            >
              <SelectTrigger className="h-8 w-[130px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="h-8 w-8"
              onClick={() =>
                setColorMode(colorMode === "light" ? "dark" : "light")
              }
              size="icon"
              title="Toggle light/dark mode"
              variant="ghost"
            >
              {colorMode === "light" ? "🌙" : "☀️"}
            </Button>
          </div>

          {/* Preview Container */}
          <div
            className={cn(
              "transition-all duration-300",
              `theme-${theme}`,
              colorMode === "dark" && "dark",
              viewportStyles[viewport],
              className
            )}
          >
            {children}
          </div>
        </div>
      )}

      {/* Fullscreen View */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-background">
          {/* Fullscreen Controls */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-lg border bg-background p-1 shadow-sm">
            <Button
              className="h-8 w-8"
              onClick={() => setViewport("desktop")}
              size="icon"
              title="Desktop view"
              variant="ghost"
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              className="h-8 w-8"
              onClick={() => setViewport("tablet")}
              size="icon"
              title="Tablet view"
              variant="ghost"
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              className="h-8 w-8"
              onClick={() => setViewport("mobile")}
              size="icon"
              title="Mobile view"
              variant="ghost"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
            <div className="mx-1 h-4 w-px bg-border" />
            <Button
              className="h-8 w-8"
              onClick={() => setViewport("desktop")}
              size="icon"
              title="Exit fullscreen"
              variant="secondary"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <div className="mx-1 h-4 w-px bg-border" />
            <Select
              onValueChange={(value) => setTheme(value as Theme)}
              value={theme}
            >
              <SelectTrigger className="h-8 w-[130px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="h-8 w-8"
              onClick={() =>
                setColorMode(colorMode === "light" ? "dark" : "light")
              }
              size="icon"
              title="Toggle light/dark mode"
              variant="ghost"
            >
              {colorMode === "light" ? "🌙" : "☀️"}
            </Button>
          </div>

          {/* Fullscreen Preview Container */}
          <div
            className={cn(
              "h-full w-full overflow-auto",
              `theme-${theme}`,
              colorMode === "dark" && "dark"
            )}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
