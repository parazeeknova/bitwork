"use client";

import {
  AudioLines,
  Award,
  Bell,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock,
  Filter,
  Flame,
  LayoutGrid,
  List,
  MapPin,
  MessageSquare,
  Mic,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CATEGORIES, JOBS } from "@/lib/data/mock-jobs";

function JobCardItem({
  job,
  viewMode,
}: {
  job: (typeof JOBS)[0];
  viewMode: "grid" | "list";
}) {
  return (
    <Link
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-[#2D4A3E]/15 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#2D4A3E]/60 hover:shadow-[0_8px_24px_rgba(45,74,62,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F1EB] ${
        viewMode === "list" ? "sm:flex-row" : ""
      }`}
      href={`/jobs/${job.id}`}
    >
      <div
        className={`relative w-full shrink-0 overflow-hidden ${
          viewMode === "list" ? "h-48 sm:h-auto sm:w-48" : "h-48"
        }`}
      >
        <Image
          alt={job.title}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={job.image}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#2D4A3E]/80 via-[#2D4A3E]/20 to-transparent opacity-80" />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {job.tags.map((tag) => (
            <span
              className="inline-flex w-fit items-center gap-1 rounded-sm bg-white/90 px-2 py-0.5 font-bold font-mono text-[#2D4A3E] text-[10px] tracking-wider shadow-sm backdrop-blur-md"
              key={tag}
            >
              <Zap className="h-3 w-3 fill-[#2D4A3E]" />
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between">
          <span className="font-medium font-mono text-white/90 text-xs shadow-sm">
            {job.id}
          </span>
          <span
            className={`inline-flex items-center rounded-sm px-2.5 py-0.5 font-medium text-xs tracking-wide shadow-sm backdrop-blur-md ${
              job.status === "Open" ? "bg-[#2D4A3E] text-white" : ""
            } ${
              job.status === "In Progress" ? "bg-amber-500/90 text-white" : ""
            } ${job.status === "Filled" ? "bg-white/90 text-[#414240]" : ""}`}
          >
            {job.status === "Open" && job.pulse && (
              <span className="relative mr-1.5 flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
            )}
            {job.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-6 w-6 overflow-hidden rounded-full border border-[#2D4A3E]/20">
                <Image
                  alt={job.requester.name}
                  className="object-cover"
                  fill
                  sizes="24px"
                  src={`https://i.pravatar.cc/150?u=${job.id}`}
                />
              </div>
              <span className="font-medium text-[#414240] text-xs">
                {job.requester.name}
              </span>
              {job.requester.verified && (
                <CheckCircle2 className="h-3.5 w-3.5 text-[#2D4A3E]" />
              )}
            </div>
            <div className="flex items-center gap-1 font-mono text-[#414240]/60 text-[10px] tracking-wide">
              <MapPin className="h-3 w-3" />
              <span className="max-w-20 truncate">{job.location}</span>
            </div>
          </div>

          <h2 className="line-clamp-2 font-medium font-serif text-[#414240] text-[1.1rem] leading-snug transition-colors group-hover:text-[#2D4A3E]">
            {job.title}
          </h2>

          {viewMode === "list" && (
            <p className="mt-2 line-clamp-2 text-[#414240]/70 text-sm leading-relaxed">
              {job.description}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2 text-[#414240]/70 text-xs">
            <span className="inline-flex rounded-sm border border-[#2D4A3E]/10 bg-[#2D4A3E]/5 px-2 py-0.5 font-medium text-[#2D4A3E]">
              {job.category}
            </span>
            <span className="text-[#414240]/30">•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-[#2D4A3E]/60" />
              {job.duration}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-[#2D4A3E]/10 border-t pt-4">
          <div className="flex flex-col">
            <span className="font-mono text-[#414240]/50 text-[10px] uppercase tracking-widest">
              {job.compensation.type}
            </span>
            <span className="mt-0.5 font-serif text-[#414240] text-lg leading-none">
              {job.compensation.value}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-sm bg-[#F1F1EB] px-2.5 py-1.5 font-medium text-[#414240]/70 text-xs">
            {job.status === "Open" && job.providersNearby > 0
              ? `${job.providersNearby} replies`
              : ""}
            {job.status === "Open" && job.providersNearby === 0
              ? "Be first"
              : ""}
            {job.status === "Open" ? "" : "Closed"}
            <ChevronRight className="h-3.5 w-3.5 text-[#2D4A3E] transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function JobsDashboard() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <div className="relative mb-6 overflow-hidden rounded-xl border border-[#2D4A3E]/20 bg-[#2D4A3E] shadow-[0_8px_30px_rgba(45,74,62,0.12)]">
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
            <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-[#c5d4c0]/20 bg-white/5 px-3 py-1.5 shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#c5d4c0]" />
              <span className="font-bold font-mono text-[#c5d4c0] text-[10px] uppercase tracking-widest">
                Bitwork AI Matchmaker
              </span>
            </div>

            <h1 className="mb-3 font-medium font-serif text-3xl text-white leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
              Don't want to browse? <br />
              <span className="text-[#c5d4c0]">
                Let AI find the right person.
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-sm text-white/70 leading-relaxed md:text-base">
              Describe your task in plain language. Our AI will analyze your
              needs, budget, and location to instantly connect you with the top
              available providers.
            </p>

            <div className="relative mt-auto flex w-full max-w-2xl flex-col rounded-xl border border-white/10 bg-black/20 p-2 shadow-inner backdrop-blur-md transition-all focus-within:border-[#c5d4c0]/40 focus-within:bg-black/40 hover:border-white/20">
              <textarea
                className="w-full resize-none bg-transparent p-3 pb-2 text-white leading-relaxed placeholder-white/40 focus:outline-none sm:text-lg"
                placeholder="E.g., My kitchen sink is leaking and I need someone to fix it this evening..."
                rows={2}
              />
              <div className="mt-1 flex items-center justify-between border-white/10 border-t pt-2 pr-1 pl-3">
                <span className="hidden font-mono text-[10px] text-white/30 uppercase tracking-widest sm:block">
                  Shift + Enter for new line
                </span>
                <button
                  className="ml-auto flex items-center gap-2 rounded-lg bg-[#c5d4c0] px-5 py-2.5 font-medium text-[#2D4A3E] shadow-[0_2px_10px_rgba(197,212,192,0.2)] transition-all hover:scale-[1.02] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5d4c0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D4A3E]"
                  type="button"
                >
                  <MessageSquare className="h-4 w-4" />
                  Find Matches
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden border-white/5 border-t bg-[#1f352c]/50 p-6 backdrop-blur-sm sm:p-8 lg:col-span-5 lg:border-t-0 lg:border-l xl:col-span-4">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent to-black/20" />

            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="flex items-center gap-2 font-medium font-mono text-white/60 text-xs uppercase tracking-[0.15em]">
                  <TrendingUp className="h-4 w-4 text-[#c5d4c0]" />
                  Network Activity
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 font-serif text-3xl text-white">
                      <Briefcase className="h-5 w-5 text-[#c5d4c0]/70" />
                      142
                    </span>
                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                      Open Tasks
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 font-serif text-3xl text-white">
                      <CalendarClock className="h-5 w-5 text-[#c5d4c0]/70" />
                      38
                      <span className="inline-flex items-center rounded-sm bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[10px] text-emerald-300">
                        +12%
                      </span>
                    </span>
                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                      Posted Today
                    </span>
                  </div>
                  <div className="col-span-2 flex flex-col gap-1 border-white/10 border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-serif text-white text-xl">
                        <Users className="h-5 w-5 text-[#c5d4c0]/70" />
                        842
                      </span>
                      <span className="flex items-center gap-1.5 rounded-sm bg-white/10 px-2 py-1 font-mono text-[#c5d4c0] text-[10px] uppercase tracking-wider">
                        <CircleDot className="h-2 w-2" /> Live
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                      Active providers in your radius
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 border-white/10 border-t pt-6">
                <h3 className="flex items-center gap-2 font-medium font-mono text-white/60 text-xs uppercase tracking-[0.15em]">
                  <Award className="h-4 w-4 text-[#c5d4c0]" />
                  Top Neighbors
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      name: "Srinivas K.",
                      tasks: 12,
                      role: "Electrician",
                      img: "11",
                    },
                    { name: "Lakshmi M.", tasks: 9, role: "Tutor", img: "44" },
                    { name: "Rahul D.", tasks: 7, role: "Plumber", img: "33" },
                  ].map((user) => (
                    <div
                      className="group flex cursor-pointer items-center justify-between"
                      key={user.name}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 transition-colors group-hover:border-[#c5d4c0]">
                          <Image
                            alt={user.name}
                            className="object-cover"
                            fill
                            sizes="40px"
                            src={`https://i.pravatar.cc/150?img=${user.img}`}
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-sm text-white/90 transition-colors group-hover:text-white">
                            {user.name}
                          </span>
                          <span className="text-white/50 text-xs">
                            {user.role}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-serif text-[#c5d4c0] text-lg leading-none">
                          {user.tasks}
                        </span>
                        <span className="mt-1 font-mono text-[9px] text-white/40 uppercase tracking-wider">
                          Tasks
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-15.25 z-40 -mx-4 flex flex-col gap-4 border-[#2D4A3E]/10 border-b bg-[#F1F1EB]/95 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:flex-row sm:items-center sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex items-center gap-2 border-[#2D4A3E]/10 pr-4 sm:border-r">
          <Filter className="h-4 w-4 text-[#2D4A3E]" />
          <span className="font-mono text-[#414240]/60 text-xs uppercase tracking-wider">
            Quick Filters
          </span>
        </div>

        <div className="scrollbar-hide flex flex-1 flex-wrap items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {CATEGORIES.map((cat) => (
            <button
              className={`whitespace-nowrap rounded-full px-4 py-1.5 font-medium text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 ${
                activeCategory === cat
                  ? "bg-[#2D4A3E] text-white shadow-sm"
                  : "border border-[#2D4A3E]/15 bg-white text-[#414240] hover:border-[#2D4A3E]/30 hover:bg-[#2D4A3E]/5"
              }`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 border-[#2D4A3E]/10 pl-4 sm:border-l">
          <div className="flex items-center rounded-md border border-[#2D4A3E]/15 bg-white p-0.5 shadow-sm">
            <button
              className={`rounded px-2 py-1 transition-colors ${
                viewMode === "grid"
                  ? "bg-[#2D4A3E]/5 text-[#2D4A3E]"
                  : "text-[#414240]/60 hover:text-[#2D4A3E]"
              }`}
              onClick={() => setViewMode("grid")}
              type="button"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              className={`rounded px-2 py-1 transition-colors ${
                viewMode === "list"
                  ? "bg-[#2D4A3E]/5 text-[#2D4A3E]"
                  : "text-[#414240]/60 hover:text-[#2D4A3E]"
              }`}
              onClick={() => setViewMode("list")}
              type="button"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
          <select
            className="rounded-md border border-[#2D4A3E]/15 bg-white px-3 py-1.5 font-medium text-[#414240] text-xs shadow-sm focus:border-[#2D4A3E]/30 focus:outline-none focus:ring-0"
            defaultValue="latest"
          >
            <option value="latest">Latest First</option>
            <option value="closest">Nearest to Me</option>
            <option value="budget-high">Highest Budget</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-8">
          <div
            className={`grid gap-5 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {JOBS.map((job) => (
              <JobCardItem job={job} key={job.id} viewMode={viewMode} />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center border-[#2D4A3E]/10 border-t pt-8">
            <button
              className="rounded-sm border border-[#2D4A3E]/20 bg-white px-6 py-2.5 font-medium text-[#414240] text-sm shadow-sm transition-colors hover:bg-[#2D4A3E]/5"
              type="button"
            >
              Load More Tasks
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:sticky lg:top-36 lg:col-span-4">
          <div className="relative overflow-hidden rounded-lg bg-[#2D4A3E] p-6 text-white shadow-lg">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-2xl">Need a hand?</h3>
                <p className="text-sm text-white/80">
                  Post your task and connect with skilled neighbors in minutes.
                </p>
              </div>
              <button
                className="w-full rounded-sm bg-white px-4 py-3 font-medium text-[#2D4A3E] shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D4A3E]"
                type="button"
              >
                Post a Task Now
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-[#2D4A3E]/20 border-dashed bg-[#F1F1EB] p-5">
            <div className="mb-3 flex items-center gap-2 text-[#2D4A3E]">
              <Bell className="h-4 w-4" />
              <h3 className="font-bold font-mono text-xs uppercase tracking-wider">
                Community Notice
              </h3>
            </div>
            <p className="font-serif text-[#414240] text-sm leading-relaxed">
              Monsoon preparation tasks are surging in your area. Providers with
              roofing and waterproofing skills are in high demand. Adjust your
              skills in settings to receive targeted alerts.
            </p>
            <div className="mt-4 flex items-center justify-between border-[#2D4A3E]/10 border-t pt-3 font-mono text-[#414240]/50 text-[10px] uppercase tracking-widest">
              <span>Bitwork Admin</span>
              <span>Updated Today</span>
            </div>
          </div>

          <div className="rounded-lg border border-[#2D4A3E]/15 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
                <TrendingUp className="h-4 w-4 text-[#2D4A3E]" />
                Trending Demand
              </h3>
              <span className="flex items-center gap-1 rounded-full bg-orange-100 px-2 py-0.5 font-medium text-[10px] text-orange-700">
                <Flame className="h-3 w-3" />
                Hot
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  name: "Plumbing Repair",
                  percent: 85,
                  trend: "+14%",
                  color: "bg-orange-500",
                },
                {
                  name: "Electrical Fitting",
                  percent: 70,
                  trend: "+8%",
                  color: "bg-[#2D4A3E]",
                },
                {
                  name: "Carpentry",
                  percent: 65,
                  trend: "+5%",
                  color: "bg-[#2D4A3E]/80",
                },
                {
                  name: "Math Tutoring",
                  percent: 45,
                  trend: "-2%",
                  color: "bg-[#2D4A3E]/60",
                },
                {
                  name: "Tailoring",
                  percent: 30,
                  trend: "+1%",
                  color: "bg-[#2D4A3E]/40",
                },
              ].map((skill, index) => (
                <div
                  className="group relative flex flex-col gap-2"
                  key={skill.name}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#F1F1EB] font-mono text-[#414240]/60 text-[10px] transition-colors group-hover:bg-[#2D4A3E]/10 group-hover:text-[#2D4A3E]">
                        {index + 1}
                      </span>
                      <span className="font-medium text-[#414240] text-sm transition-colors group-hover:text-[#2D4A3E]">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-[10px] ${skill.trend.startsWith("+") ? "text-emerald-600" : "text-rose-500"}`}
                      >
                        {skill.trend}
                      </span>
                      <span className="font-medium font-mono text-[#2D4A3E] text-xs">
                        {skill.percent}%
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F1F1EB]">
                    <div
                      className={`h-full rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Voice Assistant (TTS/SST) Card */}
          <div className="relative overflow-hidden rounded-lg border border-[#2D4A3E]/15 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#2D4A3E]/5 blur-2xl" />

            <div className="relative z-10 mb-3 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
                <Mic className="h-4 w-4 text-[#2D4A3E]" />
                Voice AI (TTS/SST)
              </h3>
              <span className="flex animate-pulse items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 font-bold font-mono text-[9px] text-emerald-800 uppercase tracking-wider">
                Beta
              </span>
            </div>

            <div className="relative z-10">
              <p className="mb-4 text-[#414240]/80 text-sm leading-relaxed">
                Skip the typing. Use our new{" "}
                <strong className="font-medium text-[#2D4A3E]">
                  Speech-to-Text
                </strong>{" "}
                to speak your task, or let{" "}
                <strong className="font-medium text-[#2D4A3E]">
                  Text-to-Speech
                </strong>{" "}
                read offers aloud.
              </p>

              <button
                className="group flex w-full items-center justify-center gap-2 rounded-md border border-[#2D4A3E]/20 bg-[#F1F1EB] px-4 py-2.5 font-medium text-[#2D4A3E] text-sm transition-all hover:bg-[#2D4A3E] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2"
                type="button"
              >
                <AudioLines className="h-4 w-4 transition-transform group-hover:scale-110" />
                Activate Voice Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
