"use client";

import { ContinueButton } from "@/components/continue-button";
import { LogoOnboarding } from "@/components/logo-onboarding";
import OnboardingCard from "@/components/OnboardingCard";
import { motion } from "motion/react";

export default function OnboardingSeven() {
  return (
    <OnboardingCard step={7} totalSteps={7}>
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
          <h2 className="text-3xl font-bold">You are all set!</h2>
          <p className="text-gray-400 text-lg">
            Go ahead and explore the Luna AI app
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
