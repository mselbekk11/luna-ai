"use client";

import OnboardingCard from "@/components/OnboardingCard";

export default function OnboardingSix() {
  return (
    <OnboardingCard step={6} totalSteps={7}>
      <h2 className="text-2xl font-bold">Privacy Settings</h2>
      <p className="text-gray-600">
        Control your privacy settings and how your information is used.
      </p>
      <div className="mt-4 space-y-4">
        {/* Privacy settings would go here */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="dataSharing"
              className="text-sm font-medium text-gray-700"
            >
              Data Sharing
            </label>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input type="checkbox" id="dataSharing" className="sr-only" />
              <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
              <div className="absolute w-5 h-5 bg-white rounded-full transform -translate-y-1/2 top-1/2 left-1"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Allow us to share anonymized data with trusted partners to improve
            our services.
          </p>
        </div>
      </div>
    </OnboardingCard>
  );
}
