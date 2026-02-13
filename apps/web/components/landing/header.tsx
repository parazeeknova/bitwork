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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@bitwork/ui/components/dropdown-menu";
import { Briefcase, LogOut, Menu, Settings, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useOnboarding } from "@/components/onboarding-provider";
import { useAuth } from "@/lib/auth/auth-provider";

export function Header() {
  const { openOnboarding } = useOnboarding();
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getUserInitials = () => {
    if (!user) {
      return "?";
    }
    const fullName = user.user_metadata?.full_name as string | undefined;
    if (fullName) {
      return fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    const email = user.email;
    if (email) {
      const firstChar = email.charAt(0);
      if (firstChar) {
        return firstChar.toUpperCase();
      }
    }
    return "?";
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="sticky top-0 z-50 animate-[fadeInDown_0.5s_ease-out_both] border-border/40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          href="/"
        >
          <Image
            alt="Bitwork"
            className="h-7 w-7"
            height={24}
            priority
            src="/bitwork.svg"
            width={24}
          />
          <span className="font-serif text-lg tracking-tight">Bitwork</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            className="font-mono text-muted-foreground text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="font-mono text-muted-foreground text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            href="#workflow"
          >
            How It Works
          </Link>
          <Link
            className="font-mono text-muted-foreground text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            href="#testimonials"
          >
            Stories
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-full outline-none focus:ring-2 focus:ring-primary/20">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    alt={user.user_metadata?.full_name ?? "User"}
                    src={user.user_metadata?.avatar_url}
                  />
                  <AvatarFallback className="bg-primary font-medium text-primary-foreground text-xs">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => router.push("/home")}>
                  <Briefcase className="mr-2 h-4 w-4" />
                  My Jobs
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <button
              className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:translate-y-0"
              onClick={openOnboarding}
              type="button"
            >
              Join Now
            </button>
          )}

          {/* Mobile menu toggle */}
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "max-h-48 border-border/40 border-t" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          <Link
            className="rounded-lg px-3 py-2 font-mono text-muted-foreground text-xs uppercase tracking-wider transition-colors hover:bg-secondary hover:text-foreground"
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            className="rounded-lg px-3 py-2 font-mono text-muted-foreground text-xs uppercase tracking-wider transition-colors hover:bg-secondary hover:text-foreground"
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            className="rounded-lg px-3 py-2 font-mono text-muted-foreground text-xs uppercase tracking-wider transition-colors hover:bg-secondary hover:text-foreground"
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
          >
            Stories
          </Link>
        </nav>
      </div>
    </header>
  );
}
