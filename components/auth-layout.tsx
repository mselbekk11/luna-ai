import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
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
      <div className="relative z-10 w-full flex flex-col items-center justify-center ">
        {children}
      </div>
    </div>
  );
}
