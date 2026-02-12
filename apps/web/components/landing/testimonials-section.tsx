"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function TestimonialsSection() {
  const testimonials = [
    {
      id: "BW-0088",
      quote:
        "I found a local tutor for my son within hours. No middleman, fair price, and we pay directly. Can see her full work history. Very trustworthy.",
      author: "Priya Sharma",
      role: "Parent & Service Seeker",
      initials: "PS",
      color: "from-rose-200 to-amber-200",
    },
    {
      id: "BW-2301",
      quote:
        "Finally, I can work on my own terms. No shop needed. I post my availability, clients find me, and I keep 95% of what I earn. True independence.",
      author: "Rajesh Kumar",
      role: "Electrician & Provider",
      initials: "RK",
      color: "from-emerald-200 to-teal-200",
    },
    {
      id: "BW-7725",
      quote:
        "As a student, I can now take small design jobs that match my current skills. Build my portfolio while earning. Love that everything is based on real work.",
      author: "Anita Desai",
      role: "Student & Learner",
      initials: "AD",
      color: "from-violet-200 to-indigo-200",
    },
    {
      id: "BW-0030",
      quote:
        "The ratings system is so transparent. Every task done builds my reputation locally. I don't need a business license — the network knows who I am.",
      author: "Vikram Singh",
      role: "Mechanic & Provider",
      initials: "VS",
      color: "from-blue-200 to-cyan-200",
    },
    {
      id: "BW-2134",
      quote:
        "No algorithms deciding who I hire. I see real people, real work history, real ratings. Direct connection is the future.",
      author: "Meera Gupta",
      role: "Small Business Owner",
      initials: "MG",
      color: "from-amber-200 to-orange-200",
    },
  ];

  return (
    <section className="py-16 sm:py-24" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-mono text-muted-foreground text-xs tracking-wider">
              Community Stories
            </span>
            <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight sm:mt-4 sm:text-4xl md:text-5xl">
              People building local economies
            </h2>
          </div>
          <p className="max-w-xs text-muted-foreground text-sm">
            Real voices from India's informal workforce.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <motion.div
              initial="hidden"
              key={testimonial.id}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              variants={fadeUp}
              viewport={{ once: true, margin: "-50px" }}
              whileInView="visible"
            >
              <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-muted-foreground text-xs">
                      Ref
                    </span>
                    <span className="font-mono text-primary text-xs">
                      {testimonial.id}
                    </span>
                  </div>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${testimonial.color} transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12`}
                  >
                    <span className="font-medium text-foreground/70 text-xs">
                      {testimonial.initials}
                    </span>
                  </div>
                </div>
                <p className="mb-6 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                    <span className="text-[10px] transition-colors duration-300 group-hover:text-primary-foreground">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-3">
          {testimonials.slice(3, 4).map((testimonial) => (
            <motion.div
              initial="hidden"
              key={testimonial.id}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              variants={fadeUp}
              viewport={{ once: true, margin: "-50px" }}
              whileInView="visible"
            >
              <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-muted-foreground text-xs">
                      Ref
                    </span>
                    <span className="font-mono text-primary text-xs">
                      {testimonial.id}
                    </span>
                  </div>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${testimonial.color} transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12`}
                  >
                    <span className="font-medium text-foreground/70 text-xs">
                      {testimonial.initials}
                    </span>
                  </div>
                </div>
                <p className="mb-6 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                    <span className="text-[10px] transition-colors duration-300 group-hover:text-primary-foreground">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial="hidden"
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            variants={fadeUp}
            viewport={{ once: true, margin: "-50px" }}
            whileInView="visible"
          >
            <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-border border-dashed bg-secondary/50 p-5 text-center transition-all duration-300 hover:border-solid hover:bg-secondary/80 hover:shadow-md sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary sm:h-12 sm:w-12">
                <span className="text-lg transition-all duration-300 group-hover:rotate-90 group-hover:text-primary-foreground">
                  +
                </span>
              </div>
              <span className="font-mono text-muted-foreground text-xs sm:text-sm">
                Your Story Here
              </span>
              <p className="mt-1 text-muted-foreground text-sm">
                Join the archive.
              </p>
            </div>
          </motion.div>

          {testimonials.slice(4).map((testimonial) => (
            <motion.div
              initial="hidden"
              key={testimonial.id}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              variants={fadeUp}
              viewport={{ once: true, margin: "-50px" }}
              whileInView="visible"
            >
              <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-muted-foreground text-xs">
                      Ref
                    </span>
                    <span className="font-mono text-primary text-xs">
                      {testimonial.id}
                    </span>
                  </div>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${testimonial.color} transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12`}
                  >
                    <span className="font-medium text-foreground/70 text-xs">
                      {testimonial.initials}
                    </span>
                  </div>
                </div>
                <p className="mb-6 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider sm:text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                    <span className="text-[10px] transition-colors duration-300 group-hover:text-primary-foreground">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
