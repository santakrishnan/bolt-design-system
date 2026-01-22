"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ToastExample() {
  return (
    <Button onClick={() => toast("8bitcn is an awesome project!")}>
      Show Toast
    </Button>
  );
}
