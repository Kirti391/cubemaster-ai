"use client";

import { useState } from "react";

import {
  DetectedSticker,
} from "../types/color";

export function useColorRecognition() {
  const [stickers, setStickers] =
    useState<DetectedSticker[]>([]);

  return {
    stickers,
    setStickers,
  };
}