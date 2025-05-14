"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

interface OnboardingContextType {
  currentStep: number;
  onboardingData: Record<string, any>;
  updateData: (data: Record<string, any>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined,
);

const TOTAL_STEPS = 7;

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState<Record<string, any>>({});
  const router = useRouter();

  const updateData = (data: Record<string, any>) => {
    setOnboardingData((prev) => ({ ...prev, ...data }));
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= TOTAL_STEPS) {
      setCurrentStep(step);
      router.push(`/onboarding/${getStepPath(step)}`);
    }
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      const nextStepNumber = currentStep + 1;
      setCurrentStep(nextStepNumber);
      router.push(`/onboarding/${getStepPath(nextStepNumber)}`);
    } else {
      // Complete onboarding
      router.push("/dashboard");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      const prevStepNumber = currentStep - 1;
      setCurrentStep(prevStepNumber);
      router.push(`/onboarding/${getStepPath(prevStepNumber)}`);
    }
  };

  // Helper function to convert step number to path
  const getStepPath = (step: number): string => {
    const paths = ["one", "two", "three", "four", "five", "six", "seven"];
    return paths[step - 1];
  };

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        onboardingData,
        updateData,
        nextStep,
        prevStep,
        goToStep,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
