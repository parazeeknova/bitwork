"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@bitwork/ui/components/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@bitwork/ui/components/dropdown-menu";
import {
  Bell,
  Bookmark,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { Footer } from "@/components/landing/footer";

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F1EB] text-[#414240] selection:bg-[#2D4A3E]/20">
      <header className="sticky top-0 z-50 border-[#2D4A3E]/15 border-b bg-[#F1F1EB]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link
              className="flex items-center gap-2 rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F1EB]"
              href="/"
            >
              <Image
                alt="Bitwork Logo"
                className="h-7 w-7"
                height={28}
                priority
                src="/bitwork.svg"
                width={28}
              />
              <span className="font-medium font-serif text-[#2D4A3E] text-lg tracking-tight">
                Bitwork
              </span>
            </Link>

            <nav className="hidden items-center gap-6 border-[#2D4A3E]/15 border-l pl-4 md:flex">
              <Link
                className={`font-mono text-xs uppercase tracking-wider transition-colors hover:text-[#2D4A3E] ${pathname.startsWith("/jobs") ? "font-medium text-[#2D4A3E]" : "text-[#414240]/60"}`}
                href="/jobs"
              >
                Task Board
              </Link>
              <Link
                className={`font-mono text-xs uppercase tracking-wider transition-colors hover:text-[#2D4A3E] ${pathname.startsWith("/providers") ? "font-medium text-[#2D4A3E]" : "text-[#414240]/60"}`}
                href="/providers"
              >
                Providers
              </Link>
              <Link
                className={`font-mono text-xs uppercase tracking-wider transition-colors hover:text-[#2D4A3E] ${pathname.startsWith("/activity") ? "font-medium text-[#2D4A3E]" : "text-[#414240]/60"}`}
                href="/activity"
              >
                Activity
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="group relative mr-2 hidden w-full max-w-60 lg:block">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#414240]/50 transition-colors group-focus-within:text-[#2D4A3E]" />
              <input
                className="w-full rounded-full border border-[#2D4A3E]/15 bg-white/50 py-1.5 pr-4 pl-9 text-sm shadow-[0_1px_3px_rgba(0,0,0,0.02)] outline-none transition-all placeholder:text-[#414240]/40 hover:border-[#2D4A3E]/30 focus:border-[#2D4A3E]/40 focus:bg-white focus:ring-1 focus:ring-[#2D4A3E]/40"
                placeholder="Search tasks..."
                type="text"
              />
            </div>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#414240]/60 transition-colors hover:bg-[#2D4A3E]/5 hover:text-[#2D4A3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F1EB] lg:hidden"
              type="button"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#414240]/60 transition-colors hover:bg-[#2D4A3E]/5 hover:text-[#2D4A3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F1EB]"
              type="button"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full border border-[#F1F1EB] bg-[#2D4A3E]" />
            </button>

            <div className="hidden h-6 w-px bg-[#2D4A3E]/15 sm:block" />

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-full outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F1EB]">
                <Avatar className="h-8 w-8 border border-[#2D4A3E]/20">
                  <AvatarImage
                    alt="Current User"
                    src="https://i.pravatar.cc/150?u=current"
                  />
                  <AvatarFallback className="bg-[#2D4A3E]/10 font-medium text-[#2D4A3E] text-xs">
                    RP
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 rounded-lg border-[#2D4A3E]/15 bg-white p-1 shadow-lg"
              >
                <DropdownMenuLabel className="flex flex-col gap-1 p-2">
                  <span className="font-medium text-[#414240]">Ramesh P.</span>
                  <span className="font-mono text-[#414240]/60 text-[10px] uppercase tracking-wider">
                    Trust Score: 92/100
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#2D4A3E]/10" />
                <DropdownMenuItem className="cursor-pointer gap-2 rounded-md p-2 text-[#414240]/80 focus:bg-[#2D4A3E]/5 focus:text-[#2D4A3E]">
                  <LayoutDashboard className="h-4 w-4" />
                  My Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer gap-2 rounded-md p-2 text-[#414240]/80 focus:bg-[#2D4A3E]/5 focus:text-[#2D4A3E]">
                  <Bookmark className="h-4 w-4" />
                  Saved Tasks
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer gap-2 rounded-md p-2 text-[#414240]/80 focus:bg-[#2D4A3E]/5 focus:text-[#2D4A3E]">
                  <Settings className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#2D4A3E]/10" />
                <DropdownMenuItem className="cursor-pointer gap-2 rounded-md p-2 text-[#414240]/80 focus:bg-red-50 focus:text-red-600">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg text-[#414240]/60 transition-colors hover:bg-[#2D4A3E]/5 hover:text-[#2D4A3E] md:hidden"
              type="button"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <div className="border-[#2D4A3E]/10 border-t bg-[#F1F1EB]" />

      <div className="bg-[#F1F1EB]">
        <Footer />
      </div>
    </div>
  );
}
