"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

function LenisPauser({ paused }: { paused: boolean }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      return;
    }
    if (paused) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [lenis, paused]);

  return null;
}

export function SmoothScroll({
  children,
  paused = false,
}: {
  children: React.ReactNode;
  paused?: boolean;
}) {
  return (
    <ReactLenis options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }} root>
      <LenisPauser paused={paused} />
      {children}
    </ReactLenis>
  );
}
