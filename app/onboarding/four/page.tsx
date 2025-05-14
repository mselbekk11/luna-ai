"use client";

import OnboardingCard from "@/components/OnboardingCard";

export default function OnboardingFour() {
  return (
    <OnboardingCard step={4} totalSteps={7}>
      <h2 className="text-2xl font-bold">Interests</h2>
      <p className="text-gray-600">
        Select topics you&apos;re interested in to help us tailor your content.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {/* Interest tags would go here */}
        {["Technology", "Science", "Art", "Music", "Travel", "Food"].map(
          (interest) => (
            <div
              key={interest}
              className="px-3 py-2 bg-blue-100 text-blue-800 rounded-md cursor-pointer hover:bg-blue-200 transition"
            >
              {interest}
            </div>
          ),
        )}
      </div>
    </OnboardingCard>
  );
}
