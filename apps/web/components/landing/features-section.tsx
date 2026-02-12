"use client";

import { Check, Lock, Mic, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturesSection() {
  const geoItems = [
    { tag: "2 km", filled: true },
    { tag: "5 km", filled: true },
    { tag: "10 km", filled: true },
    { tag: "Plumber", filled: false },
    { tag: "Tutor", filled: false },
    { tag: "Design", filled: false },
  ];

  return (
    <section className="py-16 sm:py-24" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-mono text-muted-foreground text-xs tracking-wider">
              Platform Features
            </span>
            <h2 className="mt-3 max-w-lg font-serif text-3xl leading-tight sm:mt-4 sm:text-4xl md:text-5xl">
              Why communities choose Bitwork
            </h2>
          </div>
          <p className="max-w-xs text-muted-foreground text-sm">
            Fair, transparent, local. Dignity through contribution.
          </p>
        </div>

        <div className="mb-4 grid gap-4 sm:mb-6 sm:gap-6 md:grid-cols-3">
          {/* Trust System Card */}
          <motion.div
            initial="hidden"
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            variants={fadeUp}
            viewport={{ once: true, margin: "-50px" }}
            whileInView="visible"
          >
            <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
              <div className="mb-5 flex items-start justify-between sm:mb-6">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                  Field
                </span>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                  Trust System
                </span>
              </div>
              <div className="mb-5 rounded-xl bg-secondary/50 p-4 transition-colors duration-300 group-hover:bg-secondary/70 sm:mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                    <div className="h-4 w-4 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-110" />
                    <div className="h-4 w-4 rounded-full border-2 border-border" />
                  </div>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                    <div className="h-full w-2/3 rounded-full bg-foreground transition-all duration-500 group-hover:w-4/5" />
                  </div>
                  <span className="font-mono text-muted-foreground text-xs">
                    4.8 ★
                  </span>
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-base sm:text-lg">
                Verified Reputation
              </h3>
              <p className="text-muted-foreground text-sm">
                Build a verifiable work history. Ratings and reviews based on
                real completed tasks.
              </p>
            </div>
          </motion.div>

          {/* Geo Search Card */}
          <motion.div
            initial="hidden"
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            variants={fadeUp}
            viewport={{ once: true, margin: "-50px" }}
            whileInView="visible"
          >
            <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
              <div className="mb-5 flex items-start justify-between sm:mb-6">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                  Field
                </span>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                  Geo Search
                </span>
              </div>
              <div className="mb-5 rounded-xl bg-secondary/50 p-3 transition-colors duration-300 group-hover:bg-secondary/70 sm:mb-6 sm:p-4">
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {geoItems.map((item) => (
                    <div
                      className={`rounded-lg p-2 text-center transition-all duration-300 group-hover:scale-[1.02] ${item.filled ? "border border-border bg-card" : "border border-border border-dashed"}`}
                      key={item.tag}
                    >
                      <div className="mx-auto mb-1 flex h-5 w-5 items-center justify-center rounded bg-secondary sm:h-6 sm:w-6">
                        <Users className="h-2.5 w-2.5 text-muted-foreground sm:h-3 sm:w-3" />
                      </div>
                      <span className="font-mono text-[9px] text-muted-foreground sm:text-[10px]">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-end">
                  <span className="rounded bg-accent px-2 py-0.5 font-mono text-[10px] text-accent-foreground transition-colors duration-300 group-hover:bg-accent/80">
                    + Skills
                  </span>
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-base sm:text-lg">
                Local Discovery
              </h3>
              <p className="text-muted-foreground text-sm">
                Find verified service providers in your neighborhood by skill
                and availability.
              </p>
            </div>
          </motion.div>

          {/* Ethics Card */}
          <motion.div
            initial="hidden"
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            variants={fadeUp}
            viewport={{ once: true, margin: "-50px" }}
            whileInView="visible"
          >
            <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
              <div className="mb-5 flex items-start justify-between sm:mb-6">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                  Field
                </span>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                  Ethics First
                </span>
              </div>
              <div className="mb-5 flex items-center justify-center rounded-xl bg-secondary/50 p-4 transition-colors duration-300 group-hover:bg-secondary/70 sm:mb-6">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-accent transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-accent/20 group-hover:shadow-lg">
                    <Lock className="h-6 w-6 text-foreground transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-base sm:text-lg">
                Fair & Transparent
              </h3>
              <p className="text-muted-foreground text-sm">
                No hidden commissions. No exploitation. Workers keep what they
                earn. Direct communication.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mb-4 grid gap-4 sm:mb-6 sm:gap-6 md:grid-cols-2">
          {/* Inclusion Card */}
          <motion.div
            initial="hidden"
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            variants={fadeUp}
            viewport={{ once: true, margin: "-50px" }}
            whileInView="visible"
          >
            <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="flex shrink-0 items-center justify-center rounded-xl bg-secondary/50 p-4 transition-colors duration-300 group-hover:bg-secondary/70 sm:w-auto">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-accent transition-all duration-500 group-hover:border-primary/50 sm:h-20 sm:w-20">
                    <Zap className="h-6 w-6 text-foreground transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-start justify-between">
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                      Inclusion
                    </span>
                  </div>
                  <h3 className="mb-1 font-semibold text-xl sm:text-2xl">
                    No Registration Needed
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Works for informal workers without a shop or business
                    registration. Start with minimal digital infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact Card */}
          <motion.div
            initial="hidden"
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            variants={fadeUp}
            viewport={{ once: true, margin: "-50px" }}
            whileInView="visible"
          >
            <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
              <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-6">
                <div className="flex-1">
                  <div className="mb-2 flex items-start justify-between">
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                      Impact
                    </span>
                  </div>
                  <h3 className="mb-1 font-semibold text-xl sm:text-2xl">
                    Real-World Experience
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Students and learners participate in actual work aligned
                    with their skill level. Learn, contribute, and earn
                    simultaneously.
                  </p>
                </div>
                <div className="flex shrink-0 items-center justify-center rounded-xl bg-secondary/50 p-4 transition-colors duration-300 group-hover:bg-secondary/70 sm:w-auto">
                  <div className="flex gap-1">
                    {["1", "0", "0", "%"].map((num, i) => (
                      <div
                        className="flex h-10 w-8 items-center justify-center rounded border border-border bg-card transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-sm"
                        // biome-ignore lint/suspicious/noArrayIndexKey: static visualization
                        key={i}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <span className="font-mono text-lg">{num}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Voice Booking Card */}
        <motion.div
          initial="hidden"
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          variants={fadeUp}
          viewport={{ once: true, margin: "-50px" }}
          whileInView="visible"
        >
          <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
            <div className="mb-5 flex items-start justify-between sm:mb-6">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                AI Powered
              </span>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                Voice Interface
              </span>
            </div>

            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold text-xl sm:text-2xl">
                  Voice Booking
                </h3>
                <p className="mb-4 text-muted-foreground text-sm">
                  Just speak to book. Our AI handles speech-to-text and
                  text-to-speech to confirm agent workflows hands-free.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["STT", "TTS", "Multi-Language", "Hands-Free"].map((tag) => (
                    <span
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[10px] transition-colors duration-300 hover:bg-accent/50"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-border bg-secondary/30 p-3 transition-all duration-300 group-hover:bg-secondary/50">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      Speed
                    </span>
                    <p className="mt-1 font-mono text-lg">3x Faster</p>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/30 p-3 transition-all duration-300 group-hover:bg-secondary/50">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      Languages
                    </span>
                    <p className="mt-1 font-mono text-lg">12+</p>
                  </div>
                </div>
                <p className="mt-3 text-muted-foreground text-xs">
                  Perfect for workers on-the-go. No typing required — just speak
                  naturally and let AI handle the rest.
                </p>
              </div>

              <div className="rounded-xl bg-secondary/50 p-4 transition-colors duration-300 group-hover:bg-secondary/70">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent transition-transform duration-300 group-hover:scale-110">
                    <Mic className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="font-mono text-muted-foreground text-xs">
                    Voice Input
                  </span>
                </div>
                <div className="mb-4 space-y-2 rounded-lg border border-border bg-card p-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                    <p className="font-serif text-sm italic">
                      "Book a plumber for tomorrow morning"
                    </p>
                  </div>
                  <div className="flex items-end gap-0.5">
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
                        className="w-0.5 animate-[soundWave_1.5s_ease-in-out_infinite] rounded-full bg-accent"
                        // biome-ignore lint/suspicious/noArrayIndexKey: static visualization
                        key={i}
                        style={{
                          height: `${bar.height}px`,
                          opacity: bar.opacity,
                          animationDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
                  <div>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      Confirmation
                    </span>
                    <p className="font-mono text-xs">
                      Plumber booked for 9:00 AM
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/50 transition-transform duration-300 group-hover:scale-110">
                    <Check className="h-3 w-3 text-accent-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
