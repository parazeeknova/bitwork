import {
  ArrowRight,
  BookmarkPlus,
  CheckCircle2,
  ChevronLeft,
  Clock,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { JOB_DETAIL as JOB } from "@/lib/data/mock-jobs";

export default async function JobDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  // Overwrite the hardcoded ID with the actual URL param just for realism
  const currentJob = { ...JOB, id };

  return (
    <div className="flex flex-col gap-6">
      <nav className="flex items-center gap-2 text-sm">
        <Link
          className="group flex items-center gap-1 rounded-sm text-[#414240]/60 transition-colors hover:text-[#2D4A3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F1EB]"
          href="/jobs"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Jobs</span>
        </Link>
        <span className="text-[#414240]/30">/</span>
        <span className="font-mono text-[#2D4A3E]">{currentJob.id}</span>
      </nav>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-8">
          <div className="relative h-64 w-full overflow-hidden rounded-lg border border-[#2D4A3E]/15 sm:h-80 lg:h-96">
            <Image
              alt={currentJob.title}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              src={currentJob.image}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#2D4A3E]/30 to-transparent" />
          </div>

          <div className="flex flex-col gap-4 border-[#2D4A3E]/10 border-b pb-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[#414240]/50 text-sm">
                {currentJob.id}
              </span>
              <span className="inline-flex rounded-sm bg-[#2D4A3E]/10 px-2.5 py-0.5 font-medium text-[#2D4A3E] text-xs tracking-wide">
                {currentJob.status}
              </span>
            </div>

            <h1 className="font-medium font-serif text-3xl text-[#414240] leading-tight sm:text-4xl">
              {currentJob.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-[#414240]/70 text-sm">
              <span>
                Posted by{" "}
                <span className="font-medium text-[#414240]">
                  {currentJob.postedBy}
                </span>
              </span>
              <span>•</span>
              <span>{currentJob.postedAt}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {currentJob.location}
              </span>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-sm border border-[#2D4A3E]/10 bg-[#2D4A3E]/5 px-3 py-1 font-medium text-[#2D4A3E] text-sm">
                {currentJob.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-[#2D4A3E]/10 bg-white px-3 py-1 text-[#414240]/80 text-sm">
                <Clock className="h-3.5 w-3.5 text-[#2D4A3E]" />
                {currentJob.duration}
              </span>
              <span className="inline-flex items-center rounded-sm border border-[#2D4A3E]/10 bg-white px-3 py-1 font-mono text-[#414240]/80 text-sm tracking-wide">
                {currentJob.compensation.type}
              </span>
            </div>
          </div>

          <section className="flex flex-col gap-3">
            <h2 className="font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
              Task Description
            </h2>
            <div className="flex flex-col gap-4 text-[#414240]/90 leading-relaxed">
              {currentJob.description.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
              Requirements
            </h2>
            <ul className="flex flex-col gap-2.5">
              {currentJob.requirements.map((req) => (
                <li
                  className="flex items-start gap-2.5 text-[#414240]/90 leading-relaxed"
                  key={req}
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#2D4A3E]/70" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
              Compensation
            </h2>
            <div className="flex flex-col gap-4 rounded-lg border border-[#2D4A3E]/15 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] sm:flex-row sm:items-center">
              <div className="flex flex-col border-[#2D4A3E]/10 border-b pb-4 sm:border-r sm:border-b-0 sm:pr-6 sm:pb-0">
                <span className="mb-1 font-mono text-[#414240]/50 text-xs uppercase tracking-widest">
                  {currentJob.compensation.type}
                </span>
                <span className="font-serif text-2xl text-[#2D4A3E]">
                  {currentJob.compensation.value}
                </span>
              </div>
              <div className="text-[#414240]/80 text-sm sm:pl-2">
                {currentJob.compensation.notes}
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
              Location
            </h2>
            <div className="overflow-hidden rounded-lg border border-[#2D4A3E]/15 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="relative flex h-32 w-full items-center justify-center bg-[#2D4A3E]/5">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#2D4A3E 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2D4A3E]/10 bg-white text-[#2D4A3E] shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-[#414240]">
                    {currentJob.mapArea}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between border-[#2D4A3E]/10 border-t bg-white p-4 text-sm">
                <span className="text-[#414240]/70">{currentJob.location}</span>
                <span className="font-medium text-[#2D4A3E]">
                  {currentJob.distance}
                </span>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-3 pb-8">
            <h2 className="font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
              Activity
            </h2>
            <div className="ml-2 space-y-6 border-[#2D4A3E]/10 border-l-2 pt-2 pl-6">
              {currentJob.activity.map((act) => (
                <div className="relative" key={act.label}>
                  <span className="absolute top-1.5 -left-7.25 h-2 w-2 rounded-full bg-[#2D4A3E]" />
                  <div className="flex flex-col">
                    <span className="font-medium text-[#414240]">
                      {act.label}
                    </span>
                    <span className="text-[#414240]/60 text-xs">
                      {act.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-6 lg:sticky lg:top-22 lg:col-span-4">
          <div className="flex flex-col gap-3 rounded-lg border border-[#2D4A3E]/15 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <button
              className="w-full rounded-sm bg-[#2D4A3E] px-4 py-3.5 font-medium text-white shadow-sm transition-all hover:bg-[#2D4A3E]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              type="button"
            >
              Express Interest
            </button>
            <button
              className="group flex w-full items-center justify-center gap-2 rounded-sm border border-[#2D4A3E]/20 bg-transparent px-4 py-3 font-medium text-[#414240] transition-colors hover:bg-[#2D4A3E]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              type="button"
            >
              <BookmarkPlus className="h-4 w-4 text-[#414240]/60 group-hover:text-[#414240]" />
              Save Task
            </button>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[#414240]/60 text-xs">
              <ShieldCheck className="h-3.5 w-3.5" />
              Direct connection. No platform fees.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border border-[#2D4A3E]/15 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <h3 className="font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
              Posted By
            </h3>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2D4A3E]/10 font-serif text-[#2D4A3E] text-lg">
                {currentJob.seeker.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#414240] text-base">
                    {currentJob.seeker.name}
                  </span>
                  {currentJob.seeker.verified && (
                    <span className="inline-flex items-center justify-center rounded-sm bg-[#2D4A3E]/10 px-1.5 py-0.5 font-medium text-[#2D4A3E] text-[10px] uppercase tracking-wider">
                      Verified
                    </span>
                  )}
                </div>
                <span className="text-[#414240]/70 text-sm">
                  {currentJob.seeker.neighborhood}
                </span>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#414240]/70">Trust Score</span>
                  <span className="font-medium text-[#2D4A3E]">
                    {currentJob.seeker.trustScore}/100
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#2D4A3E]/10">
                  <div
                    className="h-full rounded-full bg-[#2D4A3E]"
                    style={{ width: `${currentJob.seeker.trustScore}%` }}
                  />
                </div>
              </div>

              <div className="mt-1 grid grid-cols-2 gap-4 border-[#2D4A3E]/10 border-t pt-4">
                <div className="flex flex-col">
                  <span className="font-serif text-[#414240] text-xl">
                    {currentJob.seeker.completedTasks}
                  </span>
                  <span className="font-mono text-[#414240]/60 text-xs uppercase tracking-wide">
                    Tasks Completed
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="mt-1 font-medium text-[#414240] text-sm">
                    {currentJob.seeker.memberSince}
                  </span>
                  <span className="mt-0.5 font-mono text-[#414240]/60 text-xs uppercase tracking-wide">
                    Member Since
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border border-[#2D4A3E]/10 bg-[#F1F1EB] p-6">
            <h3 className="mb-1 font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
              Similar Tasks
            </h3>

            <div className="flex flex-col gap-3">
              {currentJob.similarTasks.map((task) => (
                <Link
                  className="group flex flex-col gap-2 rounded-md border border-[#2D4A3E]/10 bg-white p-3.5 transition-colors hover:border-[#2D4A3E]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F1EB]"
                  href={`/jobs/${task.id}`}
                  key={task.id}
                >
                  <h4 className="line-clamp-1 font-medium text-[#414240] text-sm transition-colors group-hover:text-[#2D4A3E]">
                    {task.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#414240]/60">{task.category}</span>
                    <div className="flex items-center gap-1.5 font-medium text-[#414240]">
                      <span className="font-mono text-[#414240]/50 uppercase tracking-wide">
                        {task.compType}
                      </span>
                      <span>{task.compValue}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              className="mt-2 flex w-fit items-center gap-1 rounded-sm font-medium text-[#2D4A3E] text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F1EB]"
              href="/jobs"
            >
              View all tasks <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
