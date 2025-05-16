"use client";

import { LogoOnboarding } from "@/components/logo-onboarding";
import OnboardingCard from "@/components/OnboardingCard";
import { ContinueButton } from "@/components/continue-button";
import { motion } from "motion/react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

export default function OnboardingOne() {
  const { user: clerkUser } = useUser();
  const user = useQuery(
    api.users.getUser,
    clerkUser?.id ? { tokenIdentifier: clerkUser.id } : "skip",
  );

  return (
    <OnboardingCard step={1} totalSteps={7}>
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeIn",
          }}
        >
          <LogoOnboarding />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeIn",
            delay: 0.3,
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-6 flex items-center justify-center">
            {user?.name && (
              <h3 className="text-sm md:text-lg text-gray-300">
                Hi {user.name}
              </h3>
            )}
          </div>
          <h2 className="text-lg md:text-3xl font-bold">Welcome to Luna AI</h2>
          <p className="text-gray-400 text-sm md:text-lg">
            Lets get you set up with your first product
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeIn",
            delay: 0.6,
          }}
        >
          <ContinueButton />
        </motion.div>
      </div>
    </OnboardingCard>
  );
}
