"use client";

import { LogoOnboarding } from "@/components/logo-onboarding";
import OnboardingCard from "@/components/OnboardingCard";
import { ContinueButton } from "@/components/continue-button";

export default function OnboardingOne() {
  return (
    <OnboardingCard step={1} totalSteps={7}>
      <div className="flex flex-col items-center gap-8">
        <LogoOnboarding />
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold">Welcome to Luna AI</h2>
          <p className="text-gray-400 text-lg">
            Lets get you set up with your first product
          </p>
        </div>
        <ContinueButton />
      </div>
    </OnboardingCard>
  );
}
