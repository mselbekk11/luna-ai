"use client";

import OnboardingCard from "@/components/OnboardingCard";

export default function OnboardingSeven() {
  return (
    <OnboardingCard step={7} totalSteps={7}>
      <h2 className="text-2xl font-bold">All Set!</h2>
      <p className="text-gray-600">
        Thank you for completing the onboarding process. You&apos;re all set to
        start using Luna!
      </p>
      <div className="mt-6 flex flex-col items-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-500 text-center max-w-md">
          Your account has been set up according to your preferences. Click
          &quot;Finish&quot; to go to your dashboard.
        </p>
      </div>
    </OnboardingCard>
  );
}
