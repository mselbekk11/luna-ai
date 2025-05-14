"use client";

import { LogoOnboarding } from "@/components/logo-onboarding";
import OnboardingCard, {
  useOnboardingNavigation,
} from "@/components/OnboardingCard";

export default function OnboardingOne() {
  return (
    <OnboardingCard step={1} totalSteps={7}>
      <div className="flex flex-col items-center gap-8">
        <LogoOnboarding />
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-bold">Welcome to Luna AI</h2>
          <p className="text-gray-400 text-lg">
            Lets get you set up with your first product
          </p>
        </div>
        <ContinueButton />
      </div>
    </OnboardingCard>
  );
}

// Separate component to use the context
function ContinueButton() {
  const { handleNext, isLastStep } = useOnboardingNavigation();

  return (
    <div className="flex justify-center">
      <button
        onClick={handleNext}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        {isLastStep ? "Finish" : "Continue"}
      </button>
    </div>
  );
}
