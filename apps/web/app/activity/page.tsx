"use client";

import {
  Activity,
  AlertCircle,
  Award,
  CheckCircle2,
  Clock,
  Filter,
  Flame,
  MapPin,
  RefreshCcw,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { ACTIVITY_FEED } from "@/lib/data/mock-jobs";

const TYPE_FILTERS = ["All Activity", "Matches", "Completions", "New Requests"];

function getActivityIcon(iconType: string) {
  switch (iconType) {
    case "zap":
      return <Zap className="h-4 w-4" />;
    case "check":
      return <CheckCircle2 className="h-4 w-4" />;
    case "plus":
      return <AlertCircle className="h-4 w-4" />;
    case "award":
      return <Award className="h-4 w-4" />;
    case "refresh":
      return <RefreshCcw className="h-4 w-4" />;
    default:
      return <Activity className="h-4 w-4" />;
  }
}

function getActivityColor(type: string) {
  switch (type) {
    case "match":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "completion":
      return "bg-[#D4E3D9] text-[#2D4A3E] border-[#2D4A3E]/20";
    case "new":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "milestone":
      return "bg-blue-100 text-blue-700 border-blue-200";
    default:
      return "bg-gray-100 text-[#414240]/70 border-gray-200";
  }
}

export default function ActivityLedger() {
  const [activeFilter, setActiveFilter] = useState("All Activity");

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      {/* Hero Section */}
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
          <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:col-span-8">
            <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-[#c5d4c0]/20 bg-white/5 px-3 py-1.5 shadow-sm backdrop-blur-md">
              <Activity className="h-3.5 w-3.5 text-[#c5d4c0]" />
              <span className="font-bold font-mono text-[#c5d4c0] text-[10px] uppercase tracking-widest">
                Live Ledger
              </span>
            </div>

            <h1 className="mb-3 font-medium font-serif text-3xl text-white leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
              Real-time community <br />
              <span className="text-[#c5d4c0]">activity feed.</span>
            </h1>

            <p className="max-w-xl text-sm text-white/70 leading-relaxed md:text-base">
              Watch as neighbors connect, exchange skills, and complete tasks in
              real time across the Bitwork network.
            </p>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden border-white/5 border-t bg-[#1f352c]/50 p-6 backdrop-blur-sm sm:p-8 lg:col-span-4 lg:border-t-0 lg:border-l">
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="flex items-center gap-2 font-medium font-mono text-white/60 text-xs uppercase tracking-[0.15em]">
                  <TrendingUp className="h-4 w-4 text-[#c5d4c0]" />
                  Today's Volume
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-white">412</span>
                  <span className="font-medium text-emerald-400 text-sm">
                    +24%
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                  Total transactions settled
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-15.25 z-40 -mx-4 flex flex-col gap-4 border-[#2D4A3E]/10 border-b bg-[#F1F1EB]/95 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:flex-row sm:items-center sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex items-center gap-2 border-[#2D4A3E]/10 pr-4 sm:border-r">
          <Filter className="h-4 w-4 text-[#2D4A3E]" />
          <span className="font-mono text-[#414240]/60 text-xs uppercase tracking-wider">
            Filter Ledger
          </span>
        </div>

        <div className="scrollbar-hide flex flex-1 flex-wrap items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {TYPE_FILTERS.map((filter) => (
            <button
              className={`whitespace-nowrap rounded-full px-4 py-1.5 font-medium text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 ${
                activeFilter === filter
                  ? "bg-[#2D4A3E] text-white shadow-sm"
                  : "border border-[#2D4A3E]/15 bg-white text-[#414240] hover:border-[#2D4A3E]/30 hover:bg-[#2D4A3E]/5"
              }`}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-8">
          <div className="relative before:absolute before:top-4 before:bottom-4 before:left-4.75 before:w-px before:bg-linear-to-b before:from-[#2D4A3E]/20 before:via-[#2D4A3E]/10 before:to-transparent">
            {ACTIVITY_FEED.map((activity) => (
              <div
                className="group relative mb-8 flex flex-col pl-14 last:mb-0"
                key={activity.id}
              >
                {/* Center Dot */}
                <div
                  className={`absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full border border-white shadow-sm ring-4 ring-[#F1F1EB] ${getActivityColor(activity.type)} transition-transform group-hover:scale-110`}
                >
                  {getActivityIcon(activity.icon)}
                </div>

                {/* Right side (Card content) */}
                <div className="flex w-full flex-col rounded-xl border border-[#2D4A3E]/10 bg-white p-5 shadow-sm transition-all hover:border-[#2D4A3E]/30 hover:shadow-md">
                  {/* Mobile time & location */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-mono text-[#414240]/50 text-[10px] uppercase tracking-widest">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </span>
                    <span className="flex items-center gap-1 text-[#414240]/50 text-[10px]">
                      <MapPin className="h-3 w-3" />
                      {activity.location}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium font-serif text-[#414240] text-lg leading-tight transition-colors group-hover:text-[#2D4A3E]">
                      {activity.title}
                    </h4>
                    {activity.amount && (
                      <span className="shrink-0 rounded-sm bg-[#F1F1EB] px-2 py-0.5 font-mono text-[#2D4A3E] text-[10px] uppercase tracking-wider">
                        {activity.amount}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-[#414240]/80 text-sm leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    {activity.tags.map((tag) => (
                      <span
                        className="inline-flex rounded-sm border border-[#2D4A3E]/5 bg-[#2D4A3E]/5 px-1.5 py-0.5 font-medium font-mono text-[#2D4A3E]/70 text-[9px] uppercase tracking-widest"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto font-mono text-[#414240]/40 text-[9px] uppercase tracking-widest">
                      {activity.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center">
            <button
              className="flex items-center gap-2 rounded-full border border-[#2D4A3E]/20 bg-white px-6 py-2.5 font-medium text-[#414240] text-sm shadow-sm transition-colors hover:bg-[#2D4A3E]/5 focus-visible:outline-none"
              type="button"
            >
              <RefreshCcw className="h-4 w-4" />
              Load Older History
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
                <h3 className="font-serif text-2xl">Want to contribute?</h3>
                <p className="text-sm text-white/80">
                  Join the network and start getting matched with neighbors who
                  need your skills.
                </p>
              </div>
              <button
                className="w-full rounded-sm bg-white px-4 py-3 font-medium text-[#2D4A3E] shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D4A3E]"
                type="button"
              >
                Find Tasks
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-[#2D4A3E]/15 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-medium font-mono text-[#414240]/60 text-xs uppercase tracking-[0.15em]">
                <Flame className="h-4 w-4 text-[#2D4A3E]" />
                Trending Locations
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { loc: "Koramangala", count: 86, trend: "+12%" },
                { loc: "Indiranagar", count: 64, trend: "+8%" },
                { loc: "Whitefield", count: 52, trend: "+15%" },
                { loc: "Jayanagar", count: 48, trend: "-2%" },
              ].map((item) => (
                <div
                  className="group flex items-center justify-between border-[#2D4A3E]/5 border-b pb-3 last:border-0 last:pb-0"
                  key={item.loc}
                >
                  <span className="font-medium text-[#414240] text-sm transition-colors group-hover:text-[#2D4A3E]">
                    {item.loc}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[10px] ${item.trend.startsWith("+") ? "text-emerald-600" : "text-rose-500"}`}
                    >
                      {item.trend}
                    </span>
                    <span className="rounded-full bg-[#F1F1EB] px-2 py-0.5 font-mono text-[#414240]/60 text-[10px] uppercase tracking-wider group-hover:bg-[#2D4A3E]/10 group-hover:text-[#2D4A3E]">
                      {item.count} tasks
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
