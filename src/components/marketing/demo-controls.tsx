"use client";

import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function DemoControls() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Button>
        <Play className="mr-2 h-4 w-4" />
        Start Demo
      </Button>

      <Button variant="secondary">
        <Pause className="mr-2 h-4 w-4" />
        Pause
      </Button>

      <Button variant="outline">
        <RotateCcw className="mr-2 h-4 w-4" />
        Restart
      </Button>
    </div>
  );
}