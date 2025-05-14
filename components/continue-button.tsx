"use client";

import { useOnboardingNavigation } from "./OnboardingCard";

interface ContinueButtonProps {
  className?: string;
  buttonClassName?: string;
  customText?: string;
}

export function ContinueButton({
  className = "",
  customText,
}: ContinueButtonProps) {
  const { handleNext, isLastStep, currentStep } = useOnboardingNavigation();

  const getButtonText = () => {
    if (customText) return customText;

    if (currentStep === 1) return "Get Started";
    if (isLastStep) return "Open Luna AI";
    return "Continue";
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <button
        onClick={handleNext}
        className="px-6 py-2 bg-[#535FCC] border-1 border-[#818BE6] text-white rounded-sm hover:bg-[#3e4795] transition min-w-[200px] font-medium text-sm"
      >
        {getButtonText()}
      </button>
    </div>
  );
}
