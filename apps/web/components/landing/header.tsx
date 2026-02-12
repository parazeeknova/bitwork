"use client";

import Image from "next/image";
import Link from "next/link";
import { useOnboarding } from "@/components/onboarding-provider";

export function Header() {
  const { openOnboarding } = useOnboarding();

  return (
    <header className="sticky top-0 z-50 border-border/40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link className="flex items-center gap-2" href="/">
          <Image
            alt="Bitwork"
            className="h-7 w-7"
            height={24}
            priority
            src="/bitwork.svg"
            width={24}
          />
          <span className="font-serif text-lg tracking-tight">Bitwork</span>
        </Link>

        <button
          className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90"
          onClick={openOnboarding}
          type="button"
        >
          Join Now
        </button>
      </div>
    </header>
  );
}
