"use client";

import { ContinueButton } from "@/components/continue-button";
import OnboardingCard from "@/components/OnboardingCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "motion/react";

export default function OnboardingFour() {
  return (
    <OnboardingCard step={4} totalSteps={7}>
      <div className="flex flex-col items-center gap-10">
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
          <h2 className="text-3xl font-bold">Choose a Region</h2>
          <p className="text-gray-400 text-lg">
            This will help us identify banned ingredients in your region
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
          <Select>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Choose a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="United States">North America</SelectItem>
              <SelectItem value="United States">South America</SelectItem>
              <SelectItem value="European Union">Europe</SelectItem>
              <SelectItem value="South Africa">Africa</SelectItem>
              <SelectItem value="South Africa">Antarctica</SelectItem>
              <SelectItem value="India">Asia</SelectItem>
              <SelectItem value="China">Oceania</SelectItem>
              <SelectItem value="Global Distribution">
                Global Distribution
              </SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeIn",
            delay: 0.9,
          }}
          className="flex flex-col items-center gap-2"
        >
          <ContinueButton />
        </motion.div>
      </div>
    </OnboardingCard>
  );
}
