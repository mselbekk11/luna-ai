"use client";

// import { SignUpButton } from "@clerk/nextjs";
// import { SignInButton } from "@clerk/nextjs";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <>
      {/* <header className="sticky top-0 z-10 bg-background p-4 border-b-2 border-slate-200 dark:border-slate-800 flex flex-row justify-between items-center">
        Convex + Next.js + Clerk
        <div className="flex flex-row gap-2">
          <SignInButton>
            <button>Sign in</button>
          </SignInButton>

          <SignUpButton>
            <button className="">Sign Up</button>
          </SignUpButton>
        </div>
      </header> */}
      <main className="p-8 flex flex-col gap-8">
        {/* <Authenticated>
          <Content />
        </Authenticated> */}
        <HeroSection />
        {/* <Unauthenticated>
        </Unauthenticated> */}
      </main>
    </>
  );
}
