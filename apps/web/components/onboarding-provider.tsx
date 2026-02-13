"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { OnboardingModal } from "./onboarding-modal";

export type OnboardingTab = "about" | "signup" | "complete";

interface OnboardingContextType {
  isOpen: boolean;
  initialTab: OnboardingTab;
  openOnboarding: () => void;
  openOnboardingAtTab: (tab: OnboardingTab) => void;
  closeOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | null>(null);

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }
  return context;
}

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialTab, setInitialTab] = useState<OnboardingTab>("about");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const onboarding = params.get("onboarding");
    const auth = params.get("auth");

    if (onboarding === "complete") {
      setInitialTab("complete");
      setIsOpen(true);
      window.history.replaceState({}, "", window.location.pathname);
    } else if (auth === "required") {
      setInitialTab("signup");
      setIsOpen(true);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const openOnboarding = () => {
    setInitialTab("about");
    setIsOpen(true);
  };

  const openOnboardingAtTab = (tab: OnboardingTab) => {
    setInitialTab(tab);
    setIsOpen(true);
  };

  const closeOnboarding = () => setIsOpen(false);

  return (
    <OnboardingContext.Provider
      value={{
        isOpen,
        initialTab,
        openOnboarding,
        openOnboardingAtTab,
        closeOnboarding,
      }}
    >
      {children}
      {isOpen && <OnboardingModal initialTab={initialTab} />}
    </OnboardingContext.Provider>
  );
}
