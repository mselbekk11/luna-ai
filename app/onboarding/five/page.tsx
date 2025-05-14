"use client";

import OnboardingCard from "@/components/OnboardingCard";

export default function OnboardingFive() {
  return (
    <OnboardingCard step={5} totalSteps={7}>
      <h2 className="text-2xl font-bold">Notifications</h2>
      <p className="text-gray-600">
        Choose how you&apos;d like to be notified about updates and activities.
      </p>
      <div className="mt-4 space-y-3">
        {/* Notification settings would go here */}
        {[
          { id: "email", label: "Email Notifications" },
          { id: "push", label: "Push Notifications" },
          { id: "sms", label: "SMS Notifications" },
        ].map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={option.id}
              className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={option.id} className="text-sm text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </OnboardingCard>
  );
}
