"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const getButtonText = () => {
    if (customText) return customText;

    if (currentStep === 1) return "Get Started";
    if (isLastStep) return "Open Luna AI";
    return "Continue";
  };

  const handleClick = () => {
    if (isLastStep) {
      setIsLoading(true);
      setTimeout(() => {
        router.push("/home");
      }, 3000);
    } else {
      handleNext();
    }
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="px-6 py-2 bg-[#535FCC] border-1 border-[#818BE6] text-white rounded-sm hover:bg-[#3e4795] transition min-w-[200px] font-medium text-sm flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          </>
        ) : (
          getButtonText()
        )}
      </button>
    </div>
  );
}
