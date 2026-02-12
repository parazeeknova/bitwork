"use client";

import { ArrowRight } from "lucide-react";
import { useOnboarding } from "@/components/onboarding-provider";

export function HeroSection() {
  const { openOnboarding } = useOnboarding();

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-muted-foreground text-xs">
              <span>SKILL EXCHANGE NETWORK</span>
            </div>

            <h1 className="text-balance font-serif text-5xl leading-[1.1] md:text-6xl lg:text-7xl">
              Skills meet
              <br />
              work. Locally.
            </h1>

            <p className="max-w-md text-lg text-muted-foreground">
              Connect with nearby service providers and workers. Exchange
              skills, build trust, get work done.
            </p>

            <button
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90"
              onClick={openOnboarding}
              type="button"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-border/50 bg-secondary/50 p-8">
              <div className="mb-4 flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>NO.01 — BITWORK_MARKETPLACE</span>
                <span>VERIFIED_SKILLS_ACTIVE</span>
              </div>

              <div className="absolute top-20 -left-4 w-36 -rotate-3 rounded border border-amber-100 bg-[#fffef0] p-3 shadow-sm">
                <p className="font-mono text-foreground/80 text-xs">
                  POSTED_TASK
                </p>
                <p className="mt-1 font-serif text-sm italic">
                  "Need plumbing help - 2 hrs"
                </p>
              </div>

              <div className="mx-auto my-6 max-w-sm rounded-2xl bg-[#4a5d52] p-6">
                <div className="mb-2 flex justify-between px-2 font-mono text-[8px] text-white/70">
                  <span>AVAILABLE_PROVIDERS</span>
                  <span>RADIUS: 2KM</span>
                </div>
                <div className="mb-4 px-2 font-mono text-[10px] text-white/80">
                  <p>Electrician • Plumber • Tutor</p>
                  <p>Mechanic • Designer • Helper</p>
                </div>
                <div className="rounded-xl bg-[#3a4a42] p-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] text-white/80">
                        Rajesh K. - Plumbing
                      </span>
                      <span className="text-[8px] text-green-400">★★★★★</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-[#2a3a32]">
                      <div className="h-full w-4/5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] text-white/80">
                        Priya S. - Design
                      </span>
                      <span className="text-[8px] text-green-400">★★★★★</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-[#2a3a32]">
                      <div className="h-full w-3/5 rounded-full bg-green-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-32 -right-2 space-y-2">
                <div className="max-w-45 rounded-xl border border-border bg-card p-3 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-secondary" />
                    <span className="font-medium text-xs">Ramesh P.</span>
                    <span className="text-[10px] text-muted-foreground">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    I can fix your tap!
                  </p>
                </div>

                <div className="max-w-50 rounded-xl border border-border bg-card p-3 shadow-sm">
                  <p className="text-muted-foreground text-xs">
                    30 mins, ₹300. Rating: 4.9/5 from 27 jobs...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
