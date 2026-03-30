import {
  Activity,
  AlertCircle,
  ArrowRight,
  Banknote,
  BookmarkPlus,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Eye,
  MapPin,
  MessageSquare,
  Share2,
  ShieldCheck,
  Smartphone,
  Wallet,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { JOB_DETAILS } from "@/lib/data/mock-jobs";

export default async function JobDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Try to find the specific job, or fallback to the first one if ID isn't mocked
  const jobData =
    JOB_DETAILS[id as keyof typeof JOB_DETAILS] ||
    Object.values(JOB_DETAILS)[0];
  const currentJob = { ...jobData, id };

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <nav className="flex items-center gap-2 text-sm">
        <Link
          className="group flex items-center gap-1 rounded-sm font-medium text-[#414240]/60 transition-colors hover:text-[#2D4A3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F1EB]"
          href="/jobs"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Jobs</span>
        </Link>
        <span className="text-[#414240]/30">/</span>
        <span className="font-medium font-mono text-[#2D4A3E]">
          {currentJob.id}
        </span>
      </nav>

      <div className="relative overflow-hidden rounded-xl border border-[#2D4A3E]/20 bg-[#2D4A3E] shadow-[0_8px_30px_rgba(45,74,62,0.12)]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\\"0 0 200 200\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cfilter id=\\"noiseFilter\\"%3E%3CfeTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.65\\" numOctaves=\\"3\\" stitchTiles=\\"stitch\\"/%3E%3C/filter%3E%3Crect width=\\"100%25\\" height=\\"100%25\\" filter=\\"url(%23noiseFilter)\\"/%3E%3C/svg%3E")',
          }}
        />

        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#c5d4c0]/15 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 translate-y-1/2 rounded-full bg-emerald-500/10 blur-[60px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
          <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:col-span-7 xl:col-span-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#c5d4c0]/20 bg-white/5 px-3 py-1.5 shadow-sm backdrop-blur-md">
                <span className="font-bold font-mono text-[#c5d4c0] text-[10px] uppercase tracking-widest">
                  Job ID: {currentJob.id}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#c5d4c0]/50" />
                <span className="font-bold font-mono text-[10px] text-white uppercase tracking-widest">
                  {currentJob.status}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#c5d4c0]/20 px-3 py-1.5 font-medium font-mono text-[#c5d4c0] text-[10px] uppercase tracking-widest backdrop-blur-md">
                <Zap className="h-3 w-3 fill-[#c5d4c0]" />
                {currentJob.category}
              </span>
            </div>

            <h1 className="mb-6 font-medium font-serif text-3xl text-white leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
              {currentJob.title}
            </h1>

            <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
              <span className="flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 font-mono text-[#c5d4c0] text-xs uppercase tracking-wider backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5" /> {currentJob.location}
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#c5d4c0]/70" />
                {currentJob.postedAt}
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5 text-[#c5d4c0]/70" />
                42 views
              </span>
            </div>

            <div className="mt-auto flex flex-wrap items-stretch justify-between gap-6 border-white/10 border-t pt-6">
              <div className="flex flex-1 flex-wrap items-center gap-6">
                <div className="flex flex-col">
                  <span className="mb-1 font-mono text-[#c5d4c0]/70 text-[10px] uppercase tracking-widest">
                    {currentJob.compensation.type}
                  </span>
                  <span className="font-serif text-4xl text-white leading-none">
                    {currentJob.compensation.value}
                  </span>
                </div>

                <div className="hidden h-10 w-px bg-white/10 sm:block" />

                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[#c5d4c0]/70 text-[10px] uppercase tracking-widest">
                    Accepted Methods
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div
                        className="relative z-30 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#2D4A3E] bg-[#c5d4c0]/20 shadow-sm backdrop-blur-md"
                        title="Bitwork Credits"
                      >
                        <Wallet className="h-3 w-3 text-[#c5d4c0]" />
                      </div>
                      <div
                        className="relative z-20 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#2D4A3E] bg-blue-400/20 shadow-sm backdrop-blur-md"
                        title="UPI"
                      >
                        <Smartphone className="h-3 w-3 text-blue-300" />
                      </div>
                      <div
                        className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#2D4A3E] bg-emerald-400/20 shadow-sm backdrop-blur-md"
                        title="Cash In Hand"
                      >
                        <Banknote className="h-3 w-3 text-emerald-400" />
                      </div>
                    </div>
                    <span className="font-medium text-white/90 text-xs">
                      3 options supported
                    </span>
                  </div>
                </div>

                <div className="hidden h-10 w-px bg-white/10 lg:block" />

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="font-medium text-white/90 text-xs">
                      Payment Protected
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <span>Funds held securely</span>
                  </div>
                </div>
              </div>

              <div className="hidden items-center gap-3 xl:flex">
                <button
                  className="group flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 font-medium text-sm text-white transition-all hover:border-white/40 hover:bg-white/10"
                  type="button"
                >
                  <Share2 className="h-4 w-4 text-white/70 transition-transform group-hover:scale-110" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-62.5 overflow-hidden lg:col-span-5 lg:border-white/10 lg:border-l xl:col-span-4">
            <Image
              alt={currentJob.title}
              className="object-cover transition-transform duration-700 hover:scale-105"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              src={currentJob.image}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#2D4A3E] via-[#2D4A3E]/40 to-transparent lg:bg-linear-to-r lg:from-[#2D4A3E] lg:via-[#2D4A3E]/60 lg:to-transparent" />

            {/* Overlay badge on image */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
              <div className="group flex cursor-pointer items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2 pr-4 pl-2 shadow-2xl backdrop-blur-xl transition-all hover:bg-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                  <Activity className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold font-mono text-[9px] text-emerald-400 uppercase tracking-widest">
                    Status
                  </span>
                  <span className="font-medium text-white text-xs leading-none">
                    Actively Hiring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-8">
          {/* Main Content Area */}
          <div className="relative flex flex-col gap-10 overflow-hidden rounded-xl border border-[#2D4A3E]/15 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] sm:p-8">
            <section className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h2 className="font-medium font-mono text-[#2D4A3E] text-sm uppercase tracking-[0.2em]">
                  Task Overview
                </h2>
                <div className="h-px flex-1 bg-linear-to-r from-[#2D4A3E]/20 to-transparent" />
              </div>
              <div className="flex flex-col gap-5 text-[#414240]/90 text-base leading-relaxed">
                {currentJob.description.map((paragraph, i) => (
                  <p key={`${paragraph.slice(0, 20)}-${i}`}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h2 className="font-medium font-mono text-[#2D4A3E] text-sm uppercase tracking-[0.2em]">
                  Requirements
                </h2>
                <div className="h-px flex-1 bg-linear-to-r from-[#2D4A3E]/20 to-transparent" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {currentJob.requirements.map((req) => (
                  <div
                    className="flex items-start gap-3 rounded-lg border border-[#2D4A3E]/10 bg-[#F1F1EB]/50 p-4 transition-colors hover:border-[#2D4A3E]/30 hover:bg-[#F1F1EB]"
                    key={req}
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D4A3E]/10 text-[#2D4A3E]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-[#414240]/90 text-sm leading-snug">
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h2 className="font-medium font-mono text-[#2D4A3E] text-sm uppercase tracking-[0.2em]">
                  Location & Timing
                </h2>
                <div className="h-px flex-1 bg-linear-to-r from-[#2D4A3E]/20 to-transparent" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group overflow-hidden rounded-lg border border-[#2D4A3E]/15 bg-white shadow-sm transition-all hover:border-[#2D4A3E]/30 hover:shadow-md">
                  <div className="relative flex h-32 w-full items-center justify-center overflow-hidden bg-[#E8EFEA]">
                    {/* Abstract map representation */}
                    <div className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-105">
                      <svg
                        className="h-full w-full"
                        preserveAspectRatio="none"
                        viewBox="0 0 400 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0,50 Q100,80 200,40 T400,60 L400,200 L0,200 Z"
                          fill="#D4E3D9"
                        />
                        <path
                          d="M-50,120 Q150,160 250,90 T450,130 L450,200 L-50,200 Z"
                          fill="#C5D4C0"
                        />
                        {/* Fake roads */}
                        <path
                          d="M50,0 L80,200 M250,0 L200,200 M0,100 L400,120 M0,150 L400,140"
                          fill="none"
                          opacity="0.6"
                          stroke="#ffffff"
                          strokeWidth="3"
                        />
                        <path
                          d="M120,-20 Q150,100 350,220"
                          fill="none"
                          opacity="0.8"
                          stroke="#ffffff"
                          strokeWidth="6"
                        />
                      </svg>
                    </div>

                    <div className="absolute inset-0 bg-linear-to-t from-white/80 via-transparent to-transparent" />

                    {/* Pulse animation behind pin */}
                    <div className="absolute flex h-16 w-16 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2D4A3E]/20 opacity-75" />
                      <span className="relative inline-flex h-8 w-8 rounded-full bg-[#2D4A3E]/30" />
                    </div>

                    <div className="relative z-10 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full border border-white bg-[#2D4A3E] text-white shadow-[0_8px_16px_rgba(45,74,62,0.4)] transition-transform group-hover:-translate-y-3">
                      <MapPin className="h-4 w-4" />
                      <div className="absolute -bottom-1.5 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-white border-r border-b bg-[#2D4A3E]" />
                    </div>
                  </div>
                  <div className="flex flex-col border-[#2D4A3E]/10 border-t bg-white p-4">
                    <span className="mb-1 font-medium text-[#414240]">
                      {currentJob.mapArea}
                    </span>
                    <div className="flex items-center justify-between text-[#414240]/70 text-xs">
                      <span>{currentJob.location}</span>
                      <span className="font-medium font-mono text-[#2D4A3E]">
                        {currentJob.distance}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center rounded-lg border border-[#2D4A3E]/15 bg-[#F1F1EB] p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#2D4A3E]/10 text-[#2D4A3E]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="mb-1 font-mono text-[#414240]/50 text-[10px] uppercase tracking-widest">
                    Expected Duration
                  </span>
                  <span className="font-medium font-serif text-[#414240] text-xl">
                    {currentJob.duration}
                  </span>
                  <p className="mt-2 text-[#414240]/70 text-xs leading-relaxed">
                    This is an estimate. Actual time may vary based on task
                    complexity.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <h2 className="font-medium font-mono text-[#2D4A3E] text-sm uppercase tracking-[0.2em]">
                Activity Ledger
              </h2>
              <div className="h-px flex-1 bg-linear-to-r from-[#2D4A3E]/20 to-transparent" />
            </div>
            <div className="flex flex-col overflow-hidden rounded-xl border border-[#2D4A3E]/15 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              {currentJob.activity.map((act, idx) => (
                <div
                  className={`flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5 ${
                    idx === currentJob.activity.length - 1
                      ? ""
                      : "border-[#2D4A3E]/10 border-b"
                  } ${idx === 0 ? "bg-[#2D4A3E]/3" : ""}`}
                  key={act.label}
                >
                  <span className="shrink-0 font-mono text-[#414240]/50 text-[11px] uppercase tracking-widest sm:w-32">
                    {act.time}
                  </span>
                  <div className="flex items-center gap-3">
                    {idx === 0 ? (
                      <div className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#2D4A3E]/20">
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2D4A3E]" />
                      </div>
                    ) : (
                      <div className="h-1.5 w-1.5 rounded-full bg-[#2D4A3E]/20" />
                    )}
                    <span
                      className={`font-medium text-sm ${
                        idx === 0 ? "text-[#2D4A3E]" : "text-[#414240]/80"
                      }`}
                    >
                      {act.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-6 lg:sticky lg:top-8 lg:col-span-4">
          <div className="relative overflow-hidden rounded-xl bg-[#2D4A3E] p-6 text-white shadow-[0_8px_24px_rgba(45,74,62,0.15)]">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#c5d4c0]/20 blur-2xl" />

            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-1.5 font-mono text-[#c5d4c0] text-[10px] uppercase tracking-widest">
                  <AlertCircle className="h-3 w-3" /> Action Required
                </span>
                <h3 className="font-serif text-2xl leading-tight">
                  Ready to help?
                </h3>
                <p className="mt-1 text-sm text-white/80 leading-relaxed">
                  Express interest to notify the poster. They will review your
                  profile and reach out.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#c5d4c0] px-4 py-3.5 font-medium text-[#2D4A3E] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D4A3E]"
                  type="button"
                >
                  <MessageSquare className="h-4 w-4" />
                  Express Interest
                </button>
                <button
                  className="group flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-black/10 px-4 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D4A3E]"
                  type="button"
                >
                  <BookmarkPlus className="h-4 w-4 text-white/60 transition-colors group-hover:text-white" />
                  Save for Later
                </button>
              </div>

              <div className="mt-2 flex items-center justify-center gap-1.5 border-white/10 border-t pt-4 text-center text-white/50 text-xs">
                <ShieldCheck className="h-3.5 w-3.5" />
                Direct connection. No platform fees.
              </div>
            </div>
          </div>

          {/* Poster Profile Card */}
          <div className="relative flex flex-col gap-5 overflow-hidden rounded-xl border border-[#2D4A3E]/15 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="absolute top-0 right-0 h-24 w-24 translate-x-12 -translate-y-12 rounded-full bg-[#2D4A3E]/5 blur-xl" />

            <h3 className="font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
              About the Poster
            </h3>

            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#2D4A3E]/10 bg-linear-to-br from-[#2D4A3E]/20 to-[#2D4A3E]/5 font-serif text-[#2D4A3E] text-xl shadow-sm">
                  {currentJob.seeker.name.charAt(0)}
                </div>
                {currentJob.seeker.verified && (
                  <div className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#2D4A3E]/10 bg-white shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#2D4A3E]" />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-[#414240] text-lg leading-tight">
                  {currentJob.seeker.name}
                </span>
                <span className="mt-0.5 flex items-center gap-1 text-[#414240]/60 text-sm">
                  <MapPin className="h-3 w-3" />
                  {currentJob.seeker.neighborhood}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-[#2D4A3E]/5 bg-[#F1F1EB]/50 p-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-[#414240]">
                    Trust Score
                  </span>
                  <span className="font-bold font-mono text-[#2D4A3E]">
                    {currentJob.seeker.trustScore}
                    <span className="text-[#414240]/40 text-[10px]">/100</span>
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#2D4A3E]/10">
                  <div
                    className="relative h-full rounded-full bg-[#2D4A3E]"
                    style={{ width: `${currentJob.seeker.trustScore}%` }}
                  >
                    <div
                      className="absolute inset-0 bg-white/20"
                      style={{
                        backgroundImage:
                          "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
                        backgroundSize: "1rem 1rem",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-[#2D4A3E]/10 border-t pt-4">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl text-[#2D4A3E] leading-none">
                    {currentJob.seeker.completedTasks}
                  </span>
                  <span className="mt-1 font-mono text-[#414240]/50 text-[9px] uppercase tracking-widest">
                    Tasks Done
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="mt-1.5 font-medium text-[#414240] text-sm leading-none">
                    {currentJob.seeker.memberSince}
                  </span>
                  <span className="mt-1.5 font-mono text-[#414240]/50 text-[9px] uppercase tracking-widest">
                    Member Since
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl border border-[#2D4A3E]/15 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="border-[#2D4A3E]/10 border-b bg-[#F1F1EB]/50 p-5">
              <h3 className="font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
                Similar Tasks
              </h3>
            </div>
            <div className="flex flex-col divide-y divide-[#2D4A3E]/10">
              {currentJob.similarTasks.map((task) => (
                <Link
                  className="group relative flex flex-col gap-2 p-5 transition-colors hover:bg-[#2D4A3E]/2 focus-visible:bg-[#2D4A3E]/2 focus-visible:outline-none"
                  href={`/jobs/${task.id}`}
                  key={task.id}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-medium text-[#414240] text-sm leading-tight transition-colors group-hover:text-[#2D4A3E]">
                      {task.title}
                    </h4>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#414240]/30 transition-all group-hover:-rotate-45 group-hover:text-[#2D4A3E]" />
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="rounded-sm bg-[#2D4A3E]/10 px-1.5 py-0.5 font-medium font-mono text-[#2D4A3E] uppercase tracking-widest">
                      {task.compValue}
                    </span>
                    <span className="text-[#414240]/40">•</span>
                    <span className="text-[#414240]/60">{task.category}</span>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              className="flex items-center justify-center border-[#2D4A3E]/10 border-t bg-[#F1F1EB]/30 p-4 font-medium font-mono text-[#2D4A3E] text-xs uppercase tracking-widest transition-colors hover:bg-[#2D4A3E]/5 focus-visible:outline-none"
              href="/jobs"
            >
              View Directory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
