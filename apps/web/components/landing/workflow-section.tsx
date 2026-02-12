"use client";

import { Mic } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function WorkflowSection() {
  const steps = [
    {
      number: "01",
      title: "Post a Task",
      description:
        "Describe what you need — plumbing, tutoring, design, etc. Or just speak.",
      visual: "note",
      hasAI: true,
    },
    {
      number: "02",
      title: "Browse Providers",
      description: "See verified workers nearby with ratings and work history.",
      visual: "scan",
    },
    {
      number: "03",
      title: "Connect & Agree",
      description: "Chat directly. Fix price, duration, and skills needed.",
      visual: "draft",
    },
    {
      number: "04",
      title: "Work & Verify",
      description: "Task completed. Leave a rating. Build trusted reputation.",
      visual: "send",
    },
  ];

  return (
    <section className="bg-secondary/30 py-16 sm:py-24" id="workflow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-mono text-muted-foreground text-xs tracking-wider">
              Task Workflow · AI Enhanced
            </span>
            <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight sm:mt-4 sm:text-4xl md:text-5xl">
              From task to done in four steps.
            </h2>
          </div>
          <p className="max-w-xs text-muted-foreground text-sm">
            Simple, transparent, local. No middlemen, just skill exchange.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              className="relative"
              initial="hidden"
              key={step.number}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              variants={fadeUp}
              viewport={{ once: true, margin: "-50px" }}
              whileInView="visible"
            >
              <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
                <div className="relative mb-5 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-secondary/50 transition-colors duration-300 group-hover:bg-secondary/80 sm:mb-6">
                  {step.visual === "note" && (
                    <div className="relative">
                      <div className="-rotate-2 rounded-lg border border-amber-200/60 bg-[#fffef0] p-3 shadow-sm transition-transform duration-300 group-hover:rotate-0 sm:p-4">
                        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                          Task Post
                        </p>
                        <p className="mt-1 font-serif text-sm italic">
                          "Fix leaking tap — 30 mins"
                        </p>
                      </div>
                      {step.hasAI && (
                        <div className="absolute -right-2 -bottom-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-accent shadow-sm transition-transform duration-300 group-hover:scale-110">
                          <Mic className="h-4 w-4 text-accent-foreground" />
                        </div>
                      )}
                    </div>
                  )}
                  {step.visual === "scan" && (
                    <div className="w-full space-y-2 px-4">
                      <div className="h-2 w-3/4 rounded bg-border transition-all duration-500 group-hover:w-full" />
                      <div className="h-2 w-full rounded bg-border" />
                      <div className="h-2 w-2/3 rounded bg-border transition-all duration-500 group-hover:w-4/5" />
                      <div className="mt-4 flex gap-1">
                        <div className="h-3 w-3 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
                        <div className="h-3 flex-1 rounded bg-border" />
                      </div>
                    </div>
                  )}
                  {step.visual === "draft" && (
                    <div className="w-4/5 rounded-lg border border-border bg-card p-3 shadow-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-[10px] text-muted-foreground">
                          Chat
                        </span>
                        <span className="font-mono text-[10px] text-green-600">
                          Agreed
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-full rounded bg-border transition-all duration-300 group-hover:bg-accent/50" />
                        <div className="h-1.5 w-4/5 rounded bg-border transition-all duration-300 group-hover:bg-accent/40" />
                        <div className="h-1.5 w-3/4 rounded bg-border transition-all duration-300 group-hover:bg-accent/30" />
                      </div>
                    </div>
                  )}
                  {step.visual === "send" && (
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 rounded-full bg-accent/50 px-4 py-2 transition-all duration-300 group-hover:bg-accent/80 group-hover:shadow-md">
                        <span className="font-mono text-xs">Completed ✓</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-2 flex items-start justify-between">
                  <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-muted-foreground text-xs">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 font-medium text-base sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden w-6 border-border border-t border-dashed md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
