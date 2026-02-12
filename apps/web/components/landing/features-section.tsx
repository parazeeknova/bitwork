import { Check, Lock, Mic, Users, Zap } from "lucide-react";

export function FeaturesSection() {
  const geoItems = [
    { tag: "2KM", filled: true },
    { tag: "5KM", filled: true },
    { tag: "10KM", filled: true },
    { tag: "Plumber", filled: false },
    { tag: "Tutor", filled: false },
    { tag: "Design", filled: false },
  ];

  return (
    <section className="py-24" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex items-start justify-between">
          <div>
            <span className="font-mono text-muted-foreground text-xs tracking-wider">
              PLATFORM FEATURES
            </span>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight md:text-5xl">
              Why communities choose Bitwork
            </h2>
          </div>
          <p className="hidden max-w-xs text-muted-foreground text-sm md:block">
            Fair, transparent, local. Dignity through contribution.
          </p>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-6 flex items-start justify-between">
              <span className="font-mono text-muted-foreground text-xs">
                FIELD
              </span>
              <span className="font-mono text-muted-foreground text-xs">
                TRUST_SYSTEM
              </span>
            </div>
            <div className="mb-6 rounded-xl bg-secondary/50 p-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                  <div className="h-4 w-4 rounded-full bg-foreground" />
                  <div className="h-4 w-4 rounded-full border-2 border-border" />
                </div>
                <div className="h-1 flex-1 rounded-full bg-border">
                  <div className="h-full w-2/3 rounded-full bg-foreground" />
                </div>
                <span className="font-mono text-muted-foreground text-xs">
                  4.8★
                </span>
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-lg">Verified Reputation</h3>
            <p className="text-muted-foreground text-sm">
              Build a verifiable work history. Ratings and reviews based on real
              completed tasks.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-6 flex items-start justify-between">
              <span className="font-mono text-muted-foreground text-xs">
                FIELD
              </span>
              <span className="font-mono text-muted-foreground text-xs">
                GEO_SEARCH
              </span>
            </div>
            <div className="mb-6 rounded-xl bg-secondary/50 p-4">
              <div className="grid grid-cols-3 gap-2">
                {geoItems.map((item) => (
                  <div
                    className={`rounded-lg p-2 text-center ${item.filled ? "border border-border bg-card" : "border border-border border-dashed"}`}
                    key={item.tag}
                  >
                    <div className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded bg-secondary">
                      <Users className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-end">
                <span className="rounded bg-accent px-2 py-0.5 font-mono text-[10px] text-accent-foreground">
                  + SKILLS
                </span>
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-lg">Local Discovery</h3>
            <p className="text-muted-foreground text-sm">
              Find verified service providers in your neighborhood by skill and
              availability.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-6 flex items-start justify-between">
              <span className="font-mono text-muted-foreground text-xs">
                FIELD
              </span>
              <span className="font-mono text-muted-foreground text-xs">
                ETHICS_FIRST
              </span>
            </div>
            <div className="mb-6 flex items-center justify-center rounded-xl bg-secondary/50 p-4">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-accent">
                  <Lock className="h-6 w-6 text-foreground" />
                </div>
                <div className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-lg">Fair & Transparent</h3>
            <p className="text-muted-foreground text-sm">
              No hidden commissions. No exploitation. Workers keep what they
              earn. Direct communication.
            </p>
          </div>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex gap-6">
              <div className="shrink-0 rounded-xl bg-secondary/50 p-4">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-accent">
                  <Zap className="h-8 w-8 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-start justify-between">
                  <span className="font-mono text-muted-foreground text-xs">
                    INCLUSION
                  </span>
                </div>
                <h3 className="mb-1 font-semibold text-2xl">
                  No Registration Needed
                </h3>
                <p className="text-muted-foreground text-sm">
                  Works for informal workers without a shop or business
                  registration. Start with minimal digital infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="mb-2 flex items-start justify-between">
                  <span className="font-mono text-muted-foreground text-xs">
                    IMPACT
                  </span>
                </div>
                <h3 className="mb-1 font-semibold text-2xl">
                  Real-World Experience
                </h3>
                <p className="text-muted-foreground text-sm">
                  Students and learners participate in actual work aligned with
                  their skill level. Learn, contribute, and earn simultaneously.
                </p>
              </div>
              <div className="shrink-0 rounded-xl bg-secondary/50 p-4">
                <div className="flex gap-1">
                  {["1", "0", "0", "%"].map((num, i) => (
                    <div
                      className="flex h-10 w-8 items-center justify-center rounded border border-border bg-card"
                      // biome-ignore lint/suspicious/noArrayIndexKey: TODO
                      key={i}
                    >
                      <span className="font-mono text-lg">{num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-6 flex items-start justify-between">
            <span className="font-mono text-muted-foreground text-xs">
              AI_POWERED
            </span>
            <span className="font-mono text-muted-foreground text-xs">
              VOICE_INTERFACE
            </span>
          </div>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-2xl">Voice Booking</h3>
              <p className="mb-4 text-muted-foreground text-sm">
                Just speak to book. Our AI handles speech-to-text and
                text-to-speech to confirm agent workflows hands-free.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[10px]">
                  STT
                </span>
                <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[10px]">
                  TTS
                </span>
                <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[10px]">
                  MULTI_LANG
                </span>
                <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[10px]">
                  HANDS_FREE
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border bg-secondary/30 p-3">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    SPEED
                  </span>
                  <p className="mt-1 font-mono text-lg">3x Faster</p>
                </div>
                <div className="rounded-lg border border-border bg-secondary/30 p-3">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    LANGUAGES
                  </span>
                  <p className="mt-1 font-mono text-lg">12+</p>
                </div>
              </div>
              <p className="mt-3 text-muted-foreground text-xs">
                Perfect for workers on-the-go. No typing required — just speak
                naturally and let AI handle the rest.
              </p>
            </div>

            <div className="rounded-xl bg-secondary/50 p-4">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                  <Mic className="h-4 w-4 text-accent-foreground" />
                </div>
                <span className="font-mono text-muted-foreground text-xs">
                  VOICE_INPUT
                </span>
              </div>
              <div className="mb-4 space-y-2 rounded-lg border border-border bg-card p-3">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <p className="font-serif text-sm italic">
                    "Book a plumber for tomorrow morning"
                  </p>
                </div>
                <div className="flex gap-1">
                  {[
                    { height: 18, opacity: 0.7 },
                    { height: 14, opacity: 0.5 },
                    { height: 22, opacity: 0.9 },
                    { height: 12, opacity: 0.4 },
                    { height: 20, opacity: 0.8 },
                    { height: 16, opacity: 0.6 },
                    { height: 10, opacity: 0.35 },
                    { height: 24, opacity: 0.95 },
                    { height: 15, opacity: 0.55 },
                    { height: 19, opacity: 0.75 },
                    { height: 11, opacity: 0.45 },
                    { height: 21, opacity: 0.85 },
                  ].map((bar, i) => (
                    <div
                      className="w-0.5 rounded-full bg-accent"
                      // biome-ignore lint/suspicious/noArrayIndexKey: static visualization
                      key={i}
                      style={{
                        height: `${bar.height}px`,
                        opacity: bar.opacity,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    CONFIRMATION
                  </span>
                  <p className="font-mono text-xs">
                    Plumber booked for 9:00 AM
                  </p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/50">
                  <Check className="h-3 w-3 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
