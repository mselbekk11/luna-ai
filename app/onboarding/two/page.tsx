"use client";

import OnboardingCard, {
  useOnboardingNavigation,
} from "@/components/OnboardingCard";
import { useOnboardingForm } from "@/app/hooks/useOnboardingForm";

interface PersonalInfoForm {
  fullName: string;
  email: string;
}

export default function OnboardingTwo() {
  const { formData, handleInputChange, saveFormData } =
    useOnboardingForm<PersonalInfoForm>({
      fullName: "",
      email: "",
    });

  return (
    <OnboardingCard step={2} totalSteps={7} onBeforeNext={saveFormData}>
      <h2 className="text-2xl font-bold">Personal Information</h2>
      <p className="text-gray-600">
        Tell us a bit about yourself so we can personalize your experience.
      </p>
      <div className="mt-4 space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email address"
          />
        </div>
      </div>

      {/* Positioned at the end of the form */}
      <div className="flex justify-end mt-10">
        <ContinueButton />
      </div>
    </OnboardingCard>
  );
}

// Separate component to use the context
function ContinueButton() {
  const { handleNext, isLastStep } = useOnboardingNavigation();

  return (
    <button
      onClick={handleNext}
      className="px-8 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      {isLastStep ? "Finish" : "Continue"}
    </button>
  );
}
