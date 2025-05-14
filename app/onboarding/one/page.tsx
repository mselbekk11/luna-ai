"use client";

import { LogoOnboarding } from "@/components/logo-onboarding";
import OnboardingCard from "@/components/OnboardingCard";
import { ContinueButton } from "@/components/continue-button";
import { motion } from "motion/react";

export default function OnboardingOne() {
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
          <h2 className="text-3xl font-bold">Welcome to Luna AI</h2>
          <p className="text-gray-400 text-lg">
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
