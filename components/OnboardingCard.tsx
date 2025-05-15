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
      <div className="bg-[#0D0D0E] rounded-lg shadow-md p-6 w-full max-w-4xl relative border border-[#383A42] min-h-[650px] flex flex-col">
        {/* Back button in the top left */}
        {step > 1 && (
          <button
            onClick={handlePrev}
            className="absolute top-4 left-4 text-sm text-gray-600 hover:text-gray-800 transition"
          >
            ← Back
          </button>
        )}

        <div className="space-y-4 flex-grow flex flex-col justify-center">
          {children}
        </div>

        {/* Step indicators as circles in a row - fixed at bottom */}
        <div className="flex justify-center space-x-3 absolute bottom-8 left-0 right-0">
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
