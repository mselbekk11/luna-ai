"use client";

import { Authenticated, Unauthenticated } from "convex/react";
// import { api } from "../convex/_generated/api";
// import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-background p-4 border-b-2 border-slate-200 dark:border-slate-800 flex flex-row justify-between items-center">
        Convex + Next.js + Clerk
        <div className="flex flex-row gap-2">
          <SignInButton>
            <button>Sign in</button>
          </SignInButton>

          <SignUpButton>
            <button className="">Sign Up</button>
          </SignUpButton>
          <UserButton />
        </div>
      </header>
      <main className="p-8 flex flex-col gap-8">
        <Authenticated>
          <Content />
        </Authenticated>
        <Unauthenticated>
          <h1>You are not signed in</h1>
        </Unauthenticated>
      </main>
    </>
  );
}

// function SignInForm() {
//   return (
//     <div className="flex flex-col gap-8 w-96 mx-auto">
//       <p>Log in to see the numbers</p>
//       <SignInButton>
//         <button className="bg-foreground text-background px-4 py-2 rounded-md">
//           Sign in
//         </button>
//       </SignInButton>
//       <SignUpButton>
//         <button className="bg-foreground text-background px-4 py-2 rounded-md">
//           Sign up
//         </button>
//       </SignUpButton>
//     </div>
//   );
// }

function Content() {
  return (
    <div className="flex flex-col gap-8 max-w-lg mx-auto">
      <h1>You are signed in</h1>
    </div>
  );
}
