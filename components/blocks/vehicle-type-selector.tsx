"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export interface VehicleType {
  id: string;
  name: string;
  description: string;
  image: string;
  highlighted?: boolean;
}

export interface VehicleTypeSelectorProps {
  /** Heading text displayed above the grid */
  title?: string;
  /** Array of vehicle objects to display */
  vehicles?: VehicleType[];
  /** Callback function when a vehicle is selected */
  onSelect?: (vehicleId: string) => void;
  /** ID of the currently selected vehicle */
  selectedId?: string;
  /** Additional CSS classes for the container */
  className?: string;
  /** Number of columns on mobile (default: 2) */
  mobileColumns?: 1 | 2 | 3;
  /** Number of columns on desktop (default: 4) */
  desktopColumns?: 2 | 3 | 4 | 5 | 6;
  /** Show title (default: true) */
  showTitle?: boolean;
  /** Enable hover effects (default: true) */
  enableHover?: boolean;
  /** Custom aria-label for accessibility */
  ariaLabel?: string;
}

const defaultVehicles: VehicleType[] = [
  {
    id: "sedan",
    name: "Sedan",
    description: "Fuel-efficient daily driver",
    image: "/vehicles/sedan-6af7f5.png",
  },
  {
    id: "suv",
    name: "SUV",
    description: "Space & versatility",
    image: "/vehicles/suv.png",
  },
  {
    id: "truck",
    name: "TRUCK",
    description: "Power & capability",
    image: "/vehicles/truck.png",
    highlighted: true,
  },
  {
    id: "coupe",
    name: "COUPE",
    description: "Sleek, sporty, two-door",
    image: "/vehicles/coupe.png",
  },
  {
    id: "hatchback",
    name: "HATCHBACK",
    description: "Fuel-efficient daily driver",
    image: "/vehicles/hatchback.png",
  },
  {
    id: "wagon",
    name: "WAGON",
    description: "Space & versatility",
    image: "/vehicles/wagon.png",
  },
  {
    id: "van",
    name: "VAN",
    description: "Power & capability",
    image: "/vehicles/van.png",
    highlighted: true,
  },
  {
    id: "convertible",
    name: "CONVERTIBLE",
    description: "Sleek, sporty, two-door",
    image: "/vehicles/convertible-7e8378.png",
  },
];

export function VehicleTypeSelector({
  title = "What type of vehicle?",
  vehicles = defaultVehicles,
  onSelect,
  selectedId,
  className,
  mobileColumns = 2,
  desktopColumns = 4,
  showTitle = true,
  enableHover = true,
  ariaLabel,
}: VehicleTypeSelectorProps) {
  // Generate grid column classes based on props
  const mobileGridClass = `grid-cols-${mobileColumns}`;
  const desktopGridClass = `lg:grid-cols-${desktopColumns}`;

  return (
    <section
      aria-label={ariaLabel || "Vehicle type selector"}
      className={cn("mx-auto w-full px-6 py-10 lg:px-0", className)}
    >
      {/* Title - Responsive sizing using design tokens */}
      {showTitle && title && (
        <h2 className="mb-10 text-center font-semibold text-[var(--text-heading-md)] text-[var(--text-primary)] leading-[var(--leading-tight)] tracking-[var(--tracking-normal)] lg:mb-6 lg:text-[var(--text-heading)] lg:text-[var(--text-heading-lg)] lg:tracking-[var(--tracking-tight)]">
          {title}
        </h2>
      )}

      {/* Vehicle Grid - Responsive columns based on props */}
      <ul
        className={cn(
          "mx-auto grid max-w-[var(--container-grid-sm)] gap-[var(--gap-grid-sm)] lg:max-w-[var(--container-grid)] lg:gap-[var(--gap-grid)]",
          mobileGridClass,
          desktopGridClass
        )}
      >
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            <button
              aria-current={selectedId === vehicle.id ? "true" : undefined}
              aria-label={`Select ${vehicle.name}: ${vehicle.description}`}
              className={cn(
                "group relative flex h-auto w-full flex-col items-center overflow-hidden rounded-[var(--radius)] transition-all duration-200",
                enableHover && "hover:scale-[1.02] hover:shadow-lg",
                vehicle.highlighted
                  ? "bg-[var(--card-elevated)]"
                  : "bg-[var(--card-subtle)]",
                selectedId === vehicle.id &&
                  "ring-2 ring-[var(--text-primary)] ring-offset-2",
                "lg:h-[var(--card-height)]"
              )}
              onClick={() => onSelect?.(vehicle.id)}
              type="button"
            >
              {/* Vehicle Image - Responsive height */}
              <div className="relative flex h-[var(--card-image-height-sm)] w-full items-center justify-center lg:h-[var(--card-image-height)]">
                <Image
                  alt={`${vehicle.name} vehicle`}
                  className="object-contain p-2 lg:p-4"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  src={vehicle.image}
                />
              </div>

              {/* Text Content - Responsive sizing */}
              <div className="flex flex-1 flex-col items-center gap-[var(--gap-card-sm)] px-2 pb-4 lg:gap-[var(--gap-card)] lg:px-4 lg:pb-6">
                <h3 className="text-center font-semibold text-[var(--text-card-title-sm)] text-[var(--text-primary)] uppercase leading-[var(--leading-extra-loose)] lg:text-[var(--text-card-title)] lg:leading-[var(--leading-loose)]">
                  {vehicle.name}
                </h3>
                <p className="text-center font-normal text-[var(--text-card-description)] text-[var(--text-primary)] leading-[1.29] lg:leading-[var(--leading-relaxed)]">
                  {vehicle.description}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
