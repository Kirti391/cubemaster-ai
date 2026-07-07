"use client";

import { useEffect, useState } from "react";
import { loadOpenCV } from "../opencv";

export function useOpenCV() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    loadOpenCV().then(() => {
      if (mounted) {
        setReady(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return {
    ready,
  };
}