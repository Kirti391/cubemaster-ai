"use client";

import { Button } from "@/src/components/ui/button";
import { Camera } from "lucide-react";

type Props = {
  onCapture: () => void;
};

export default function CaptureButton({
  onCapture,
}: Props) {
  return (
    <Button
      className="w-full h-12 px-8 text-base"
   
      onClick={onCapture}
    >
      <Camera className="mr-2 h-5 w-5" />
      Capture Face
    </Button>
  );
}