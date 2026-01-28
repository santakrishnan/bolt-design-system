"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ToastExample() {
  return (
    <Button onClick={() => toast("Bolt Design is awesome!")}>Show Toast</Button>
  );
}
