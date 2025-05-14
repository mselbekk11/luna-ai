"use client";

import { OnboardingProvider } from "@/app/context/OnboardingContext";

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <OnboardingProvider>
      <div className="min-h-svh flex flex-col items-center justify-center w-full relative bg-black">
        {/* <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/stars.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "500px",
            opacity: 1,
            backgroundColor: "#000000"
          }}
        ></div> */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center p-4">
          {children}
        </div>
      </div>
    </OnboardingProvider>
  );
}
