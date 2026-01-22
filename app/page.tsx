import Link from "next/link";
import ComponentShowcase from "@/components/examples/component-showcase";
import Sponsors from "@/components/sponsors";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-4 pt-10">
      <h1 className="font-bold md:text-2xl">
        Build your modern component library
      </h1>
      <p className="max-w-2xl text-sm md:text-base">
        A set of beautifully designed components and a code distribution
        platform. Works with your favorite frameworks. Open Source. Open Code.
      </p>
      <Link className="w-fit" href="/docs">
        <Button className="w-fit" size="sm">
          Get Started
        </Button>
      </Link>

      <ComponentShowcase />

      <Sponsors />
    </div>
  );
}
