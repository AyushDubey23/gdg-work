"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const onReady = () => setTimeout(() => setDone(true), 600);
    if (document.readyState === "complete") onReady();
    else window.addEventListener("load", onReady, { once: true });
    return () => window.removeEventListener("load", onReady as any);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-(--color-background) transition-opacity duration-500">
      <div className="grid place-items-center gap-4">
        <div className="relative size-20 g-gradient-border bg-[canvas] grid place-items-center animate-pulse">
          <Image
            src="/GDG.png"
            alt="GDG Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-sm opacity-80">Loading experience...</div>
      </div>
    </div>
  );
}
