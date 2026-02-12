"use client";

import { CTASection } from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { WorkflowSection } from "@/components/landing/workflow-section";
import {
  OnboardingProvider,
  useOnboarding,
} from "@/components/onboarding-provider";
import { SmoothScroll } from "@/components/smooth-scroll";

function PageContent() {
  const { isOpen } = useOnboarding();

  return (
    <SmoothScroll paused={isOpen}>
      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <WorkflowSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default function Home() {
  return (
    <OnboardingProvider>
      <PageContent />
    </OnboardingProvider>
  );
}
