import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroBannerProps {
  title: string;
  description?: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  className?: string;
}

export function HeroBanner({
  title,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  className,
}: HeroBannerProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-lg",
        className
      )}
    >
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-4 font-bold text-4xl text-white tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mb-8 text-lg text-white/90 md:text-xl">{description}</p>
        )}
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            {primaryAction && (
              <Button
                asChild={!!primaryAction.href}
                onClick={primaryAction.onClick}
                size="lg"
              >
                {primaryAction.href ? (
                  <a href={primaryAction.href}>{primaryAction.label}</a>
                ) : (
                  primaryAction.label
                )}
              </Button>
            )}
            {secondaryAction && (
              <Button
                asChild={!!secondaryAction.href}
                className="bg-white/10 text-white hover:bg-white/20"
                onClick={secondaryAction.onClick}
                size="lg"
                variant="outline"
              >
                {secondaryAction.href ? (
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                ) : (
                  secondaryAction.label
                )}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
