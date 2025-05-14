"use client";

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center w-full relative">
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
      <div className="relative z-10 w-full flex flex-col items-center justify-center ">
        {children}
      </div>
    </div>
  );
}
