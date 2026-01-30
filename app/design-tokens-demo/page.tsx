"use client";

import { useState } from "react";
import type { VehicleType } from "@/components/blocks/vehicle-type-selector";
import { VehicleTypeSelector } from "@/components/blocks/vehicle-type-selector";

export default function DesignTokensDemo() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>();

  // Example: Custom vehicles with dynamic data
  const customVehicles: VehicleType[] = [
    {
      id: "sedan",
      name: "Sedan",
      description: "Reliable & efficient",
      image: "/vehicles/sedan-6af7f5.png",
    },
    {
      id: "suv",
      name: "SUV",
      description: "Adventure ready",
      image: "/vehicles/suv.png",
      highlighted: true,
    },
    {
      id: "truck",
      name: "Truck",
      description: "Built to last",
      image: "/vehicles/truck.png",
    },
    {
      id: "hatchback",
      name: "Hatchback",
      description: "Compact & smart",
      image: "/vehicles/hatchback.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl">
            Automotive Design Tokens Demo
          </h1>
          <p className="text-gray-600 text-lg">
            Testing responsive design tokens and component behavior
          </p>
        </div>

        {/* Demo 1: Default vehicles */}
        <section className="mb-16">
          <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-2 font-semibold text-2xl">
              Demo 1: Default Vehicles
            </h2>
            <p className="text-gray-600">
              Using default stub data with 8 vehicle types
            </p>
          </div>
          <VehicleTypeSelector
            onSelect={(id) => {
              console.log("Selected:", id);
              setSelectedVehicle(id);
            }}
            selectedId={selectedVehicle}
          />
        </section>

        {/* Demo 2: Custom vehicles */}
        <section className="mb-16">
          <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-2 font-semibold text-2xl">
              Demo 2: Custom Dynamic Data
            </h2>
            <p className="text-gray-600">
              Using custom vehicle data (4 vehicle models)
            </p>
          </div>
          <VehicleTypeSelector
            onSelect={(id) => {
              console.log("Custom vehicle selected:", id);
            }}
            title="Choose Your Vehicle"
            vehicles={customVehicles}
          />
        </section>

        {/* Demo 3: Design tokens visualization */}
        <section className="mb-16">
          <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-2 font-semibold text-2xl">
              Demo 3: Design Tokens Visualization
            </h2>
            <p className="text-gray-600">
              Visual representation of automotive design tokens
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Colors */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-lg">Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded border bg-[#F8F8F8]" />
                  <div>
                    <p className="font-medium text-sm">Card Default</p>
                    <p className="font-mono text-gray-500 text-xs">#F8F8F8</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded border bg-white" />
                  <div>
                    <p className="font-medium text-sm">Card Highlighted</p>
                    <p className="font-mono text-gray-500 text-xs">#FFFFFF</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded border bg-[#111111]" />
                  <div>
                    <p className="font-medium text-sm">Text Primary</p>
                    <p className="font-mono text-gray-500 text-xs">#111111</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded border bg-[#2B2B2B]" />
                  <div>
                    <p className="font-medium text-sm">Text Heading</p>
                    <p className="font-mono text-gray-500 text-xs">#2B2B2B</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-lg">Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 font-medium text-gray-600 text-xs">
                    Heading (Desktop)
                  </p>
                  <p className="font-semibold text-[32px] leading-[1.1] tracking-[-0.04em]">
                    32px / -4%
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-gray-600 text-xs">
                    Heading (Mobile)
                  </p>
                  <p className="font-semibold text-[20px] leading-[1.1] tracking-[-0.02em]">
                    20px / -2%
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-gray-600 text-xs">
                    Card Title
                  </p>
                  <p className="font-semibold text-[20px] uppercase leading-[2.6]">
                    20px / 2.6
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-gray-600 text-xs">
                    Description
                  </p>
                  <p className="text-[14px] leading-[1.43]">14px / 1.43</p>
                </div>
              </div>
            </div>

            {/* Spacing */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-lg">Spacing</h3>
              <div className="space-y-3">
                <div>
                  <p className="mb-1 font-medium text-sm">Card (Desktop)</p>
                  <p className="font-mono text-gray-600 text-xs">
                    308px × 240px
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-sm">Card (Mobile)</p>
                  <p className="font-mono text-gray-600 text-xs">
                    165px × auto
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-sm">Grid Gap (Desktop)</p>
                  <p className="font-mono text-gray-600 text-xs">24px</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-sm">Grid Gap (Mobile)</p>
                  <p className="font-mono text-gray-600 text-xs">12px</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-sm">Border Radius</p>
                  <p className="font-mono text-gray-600 text-xs">8px</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo 4: Responsive behavior */}
        <section className="mb-16">
          <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-2 font-semibold text-2xl">
              Demo 4: Responsive Behavior
            </h2>
            <p className="text-gray-600">
              Resize your browser to see responsive changes:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 text-sm">
              <li>Mobile (&lt;1024px): 2 columns, smaller text, 12px gap</li>
              <li>Desktop (≥1024px): 4 columns, larger text, 24px gap</li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-gray-300 border-dashed p-4">
            <VehicleTypeSelector
              title="Resize to test responsiveness"
              vehicles={customVehicles.slice(0, 4)}
            />
          </div>
        </section>

        {/* Selection state demo */}
        {selectedVehicle && (
          <section className="mb-16">
            <div className="rounded-lg bg-blue-50 p-6 text-center">
              <h3 className="mb-2 font-semibold text-xl">
                Selected Vehicle: {selectedVehicle.toUpperCase()}
              </h3>
              <p className="text-gray-600">
                The component properly handles selection state and callbacks
              </p>
              <button
                className="mt-4 rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
                onClick={() => setSelectedVehicle(undefined)}
                type="button"
              >
                Clear Selection
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
