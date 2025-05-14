"use client";

import OnboardingCard, {
  useOnboardingNavigation,
} from "@/components/OnboardingCard";

export default function OnboardingOne() {
  return (
    <OnboardingCard step={1} totalSteps={7}>
      <h2 className="text-2xl font-bold">Welcome to Luna</h2>
      <p className="text-gray-600">
        Let&apos;s get you set up with everything you need to get started. This
        is step one of our onboarding process.
      </p>
      <div className="mt-4">
        {/* Step-specific content here */}
        <p className="text-sm text-gray-500">
          This first step introduces you to our platform.
        </p>
      </div>

      {/* Custom positioned Continue button */}
      <ContinueButton />
    </OnboardingCard>
  );
}

// Separate component to use the context
function ContinueButton() {
  const { handleNext, isLastStep } = useOnboardingNavigation();

  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={handleNext}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        {isLastStep ? "Finish" : "Continue"}
      </button>
    </div>
  );
}
