"use client";

import React, { createContext, useContext } from "react";
import { useOnboarding } from "../app/context/OnboardingContext";

interface OnboardingCardProps {
  children: React.ReactNode;
  step: number;
  totalSteps: number;
  onBeforeNext?: () => boolean | void;
  onBeforePrev?: () => boolean | void;
}

// Export a context for the navigation functions
export const OnboardingNavigationContext = createContext<{
  handleNext: () => void;
  handlePrev: () => void;
  isLastStep: boolean;
  currentStep: number;
  totalSteps: number;
} | null>(null);

export default function OnboardingCard({
  children,
  step,
  totalSteps,
  onBeforeNext,
  onBeforePrev,
}: OnboardingCardProps) {
  const { nextStep: contextNextStep, prevStep: contextPrevStep } =
    useOnboarding();

  const handleNext = () => {
    if (onBeforeNext) {
      const shouldProceed = onBeforeNext();
      // Only proceed if the function returns true or undefined (not explicitly false)
      if (shouldProceed === false) {
        return;
      }
    }
    contextNextStep();
  };

  const handlePrev = () => {
    if (onBeforePrev) {
      const shouldProceed = onBeforePrev();
      if (shouldProceed === false) {
        return;
      }
    }
    contextPrevStep();
  };

  const isLastStep = step === totalSteps;

  return (
    <OnboardingNavigationContext.Provider
      value={{
        handleNext,
        handlePrev,
        isLastStep,
        currentStep: step,
        totalSteps,
      }}
    >
      <div className="rounded-lg shadow-md p-4 md:p-6 w-full max-w-4xl relative border border-[#383A42] h-[calc(100vh-2rem)] md:h-auto md:min-h-[650px] flex flex-col overflow-hidden bg-[#0D0D0E] backdrop-blur-sm">
        <div
          aria-hidden
          className="absolute inset-0 isolate opacity-45 contain-strict z-0"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        {/* Back button in the top left */}
        {step > 1 && (
          <button
            onClick={handlePrev}
            className="absolute top-4 left-4 text-sm text-gray-300 hover:text-white transition z-10"
          >
            ← Back
          </button>
        )}

        <div className="space-y-4 flex-grow flex flex-col justify-center z-1 relative w-full max-w-3xl mx-auto px-2 md:px-4">
          {children}
        </div>

        {/* Step indicators as circles in a row - fixed at bottom */}
        <div className="flex justify-center space-x-3 pb-4 mt-auto z-1">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full ${
                i + 1 === step ? "bg-[#D9D9D9]" : "bg-[#373737]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </OnboardingNavigationContext.Provider>
  );
}

// Hook to use in pages
export function useOnboardingNavigation() {
  const context = useContext(OnboardingNavigationContext);
  if (!context) {
    throw new Error(
      "useOnboardingNavigation must be used within an OnboardingCard",
    );
  }
  return context;
}
