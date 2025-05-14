"use client";

import OnboardingCard from "@/components/OnboardingCard";
import { ContinueButton } from "@/components/continue-button";

export default function OnboardingThree() {
  return (
    <OnboardingCard step={3} totalSteps={7}>
      <h2 className="text-2xl font-bold">Preferences</h2>
      <p className="text-gray-600">
        Choose your preferences to customize your experience.
      </p>
      <div className="mt-4 space-y-4">
        {/* Preferences options would go here */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Theme
          </label>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
              Light
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition">
              Dark
            </button>
          </div>
        </div>
      </div>

      {/* Fixed at the bottom */}
      <div className="absolute bottom-20 left-0 right-0">
        <ContinueButton buttonClassName="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition shadow-md" />
      </div>
    </OnboardingCard>
  );
}
