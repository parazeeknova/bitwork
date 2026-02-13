"use client";

import type { ReactNode } from "react";
import { OnboardingProvider } from "@/components/onboarding-provider";
import { AuthProvider } from "@/lib/auth/auth-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <OnboardingProvider>{children}</OnboardingProvider>
    </AuthProvider>
  );
}
