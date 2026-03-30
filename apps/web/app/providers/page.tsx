"use client";

import {
  Award,
  BadgeCheck,
  CheckCircle2,
  Filter,
  Flame,
  LayoutGrid,
  List,
  MapPin,
  MessageSquare,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { PROVIDERS } from "@/lib/data/mock-jobs";

const SKILL_CATEGORIES = [
  "All Experts",
  "Electricians",
  "Plumbers",
  "Tutors",
  "Cleaners",
  "Designers",
  "Mechanics",
];

function ProviderCardItem({
  provider,
  viewMode,
}: {
  provider: (typeof PROVIDERS)[0];
  viewMode: "grid" | "list";
}) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-[#2D4A3E]/15 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all focus-within:ring-2 focus-within:ring-[#2D4A3E] focus-within:ring-offset-2 focus-within:ring-offset-[#F1F1EB] hover:-translate-y-0.5 hover:border-[#2D4A3E]/60 hover:shadow-[0_8px_24px_rgba(45,74,62,0.08)] ${
        viewMode === "list" ? "sm:flex-row" : ""
      }`}
    >
      <div
        className={`flex items-start gap-4 border-[#2D4A3E]/10 p-5 ${
          viewMode === "list"
            ? "sm:w-1/3 sm:border-r sm:border-b-0"
            : "border-b bg-[#F1F1EB]/20"
        }`}
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-[#2D4A3E]/10">
          <Image
            alt={provider.name}
            className="object-cover"
            fill
            sizes="56px"
            src={`https://i.pravatar.cc/150?img=${provider.image}`}
          />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-1.5">
            <h2 className="font-medium font-serif text-[#414240] text-lg leading-tight transition-colors group-hover:text-[#2D4A3E]">
              {provider.name}
            </h2>
            {provider.verified && (
              <BadgeCheck className="h-4 w-4 text-[#2D4A3E]" />
            )}
          </div>
          <span className="font-medium font-mono text-[#2D4A3E]/80 text-[10px] uppercase tracking-wider">
            {provider.role}
          </span>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-sm bg-amber-100/80 px-1.5 py-0.5 font-bold font-mono text-[10px] text-amber-700 tracking-wider">
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
              {provider.rating}
            </div>
            <span className="text-[#414240]/40 text-xs">
              ({provider.reviews} reviews)
            </span>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col p-5 ${viewMode === "list" ? "sm:w-2/3" : ""}`}
      >
        <div className="mb-4 flex items-center gap-4 text-[#414240]/60 text-xs">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {provider.distance}
          </span>
          <span className="text-[#414240]/30">•</span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#2D4A3E]/60" />
            {provider.completedTasks} tasks
          </span>
        </div>

        <p className="line-clamp-2 text-[#414240]/80 text-sm leading-relaxed">
          "{provider.bio}"
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {provider.skills.map((skill) => (
            <span
              className="inline-flex rounded-sm border border-[#2D4A3E]/10 bg-white px-2 py-1 font-mono text-[#414240]/70 text-[10px] uppercase tracking-wider shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-[#2D4A3E]/30"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-[#2D4A3E]/10 border-t pt-4">
          <div className="flex flex-col">
            <span className="font-mono text-[#414240]/50 text-[10px] uppercase tracking-widest">
              Starting from
            </span>
            <span className="mt-0.5 font-serif text-[#2D4A3E] text-xl leading-none">
              {provider.hourlyRate}
            </span>
          </div>

          <button
            className="flex items-center gap-2 rounded-md bg-[#2D4A3E] px-4 py-2 font-medium text-white text-xs shadow-[0_2px_10px_rgba(45,74,62,0.2)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            type="button"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProvidersDirectory() {
  const [activeCategory, setActiveCategory] = useState("All Experts");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      {/* Hero Section - Matching Jobs Page Aesthetic */}
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
              <Award className="h-3.5 w-3.5 text-[#c5d4c0]" />
              <span className="font-bold font-mono text-[#c5d4c0] text-[10px] uppercase tracking-widest">
                Trusted Network
              </span>
            </div>

            <h1 className="mb-3 font-medium font-serif text-3xl text-white leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
              Meet the best <br />
              <span className="text-[#c5d4c0]">local experts nearby.</span>
            </h1>

            <p className="mb-8 max-w-xl text-sm text-white/70 leading-relaxed md:text-base">
              From master electricians to talented tutors, discover and connect
              with top-rated professionals in your community. Verified skills,
              honest reviews.
            </p>

            <div className="relative mt-auto flex w-full max-w-lg items-center rounded-xl border border-white/20 bg-black/20 p-2 shadow-inner backdrop-blur-md focus-within:border-[#c5d4c0]/60 focus-within:bg-black/40">
              <Search className="ml-3 h-5 w-5 text-white/50" />
              <input
                className="w-full bg-transparent px-3 py-2 text-white placeholder-white/40 focus:outline-none sm:text-base"
                placeholder="Search for a name or skill..."
                type="text"
              />
              <button
                className="ml-auto rounded-lg bg-[#c5d4c0] px-5 py-2 font-medium text-[#2D4A3E] shadow-sm transition-all hover:scale-[1.02] hover:bg-white focus-visible:outline-none"
                type="button"
              >
                Search
              </button>
            </div>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden border-white/5 border-t bg-[#1f352c]/50 p-6 backdrop-blur-sm sm:p-8 lg:col-span-5 lg:border-t-0 lg:border-l xl:col-span-4">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent to-black/20" />

            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="flex items-center gap-2 font-medium font-mono text-white/60 text-xs uppercase tracking-[0.15em]">
                  <TrendingUp className="h-4 w-4 text-[#c5d4c0]" />
                  Network Stats
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 font-serif text-3xl text-white">
                      <Users className="h-5 w-5 text-[#c5d4c0]/70" />
                      1,248
                    </span>
                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                      Verified Pros
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 font-serif text-3xl text-white">
                      <Star className="h-5 w-5 text-amber-400/80" />
                      4.8
                    </span>
                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                      Avg. Rating
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 border-white/10 border-t pt-6">
                <h3 className="flex items-center gap-2 font-medium font-mono text-white/60 text-xs uppercase tracking-[0.15em]">
                  <Sparkles className="h-4 w-4 text-[#c5d4c0]" />
                  Provider Spotlight
                </h3>
                <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors hover:border-white/20">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#c5d4c0]/30">
                    <Image
                      alt="Ravi E."
                      className="object-cover"
                      fill
                      sizes="48px"
                      src="https://i.pravatar.cc/150?img=11"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1.5 font-medium text-sm text-white">
                      Ravi E.{" "}
                      <BadgeCheck className="h-3.5 w-3.5 text-[#c5d4c0]" />
                    </span>
                    <span className="mt-0.5 text-white/60 text-xs">
                      Master Electrician
                    </span>
                    <span className="mt-1 font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                      342 Tasks Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-15.25 z-40 -mx-4 flex flex-col gap-4 border-[#2D4A3E]/10 border-b bg-[#F1F1EB]/95 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:flex-row sm:items-center sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex items-center gap-2 border-[#2D4A3E]/10 pr-4 sm:border-r">
          <Filter className="h-4 w-4 text-[#2D4A3E]" />
          <span className="font-mono text-[#414240]/60 text-xs uppercase tracking-wider">
            Filter Skills
          </span>
        </div>

        <div className="scrollbar-hide flex flex-1 flex-wrap items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {SKILL_CATEGORIES.map((cat) => (
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
            className="rounded-md border border-[#2D4A3E]/15 bg-white px-3 py-1.5 font-medium text-[#414240] text-xs shadow-sm focus:border-[#2D4A3E]/30 focus:outline-none"
            defaultValue="recommended"
          >
            <option value="recommended">Recommended</option>
            <option value="highest-rated">Highest Rated</option>
            <option value="nearest">Nearest to Me</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Main Provider List */}
        <div className="flex flex-col gap-6 lg:col-span-8">
          <div
            className={`grid gap-5 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {PROVIDERS.map((provider) => (
              <ProviderCardItem
                key={provider.id}
                provider={provider}
                viewMode={viewMode}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center border-[#2D4A3E]/10 border-t pt-8">
            <button
              className="rounded-sm border border-[#2D4A3E]/20 bg-white px-6 py-2.5 font-medium text-[#414240] text-sm shadow-sm transition-colors hover:bg-[#2D4A3E]/5"
              type="button"
            >
              Load More Experts
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
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
                <h3 className="font-serif text-2xl">Are you a pro?</h3>
                <p className="text-sm text-white/80">
                  Join the network and start getting matched with neighbors who
                  need your skills.
                </p>
              </div>
              <button
                className="w-full rounded-sm bg-white px-4 py-3 font-medium text-[#2D4A3E] shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D4A3E]"
                type="button"
              >
                Become a Provider
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-[#2D4A3E]/15 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
                <Flame className="h-4 w-4 text-[#2D4A3E]" />
                Most Requested Skills
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { skill: "AC Repair & Servicing", count: 145 },
                { skill: "Deep Home Cleaning", count: 112 },
                { skill: "Math Tutoring (10th)", count: 98 },
                { skill: "Leaking Pipe Fix", count: 86 },
              ].map((item) => (
                <div
                  className="group flex items-center justify-between border-[#2D4A3E]/5 border-b pb-3 last:border-0 last:pb-0"
                  key={item.skill}
                >
                  <span className="font-medium text-[#414240] text-sm transition-colors group-hover:text-[#2D4A3E]">
                    {item.skill}
                  </span>
                  <span className="rounded-full bg-[#F1F1EB] px-2 py-0.5 font-mono text-[#414240]/60 text-[10px] uppercase tracking-wider group-hover:bg-[#2D4A3E]/10 group-hover:text-[#2D4A3E]">
                    {item.count} pros
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
