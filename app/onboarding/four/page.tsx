"use client";

import { useState } from "react";
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
import { toast } from "sonner";

export default function OnboardingFour() {
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(
    undefined,
  );

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
  };

  const handleBeforeNext = () => {
    if (!selectedRegion) {
      toast.error("Please choose a region");
      return false; // Prevent navigation
    }
    return true; // Allow navigation
  };

  return (
    <OnboardingCard step={4} totalSteps={7} onBeforeNext={handleBeforeNext}>
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
          <h2 className="text-lg md:text-3xl font-bold">Choose a Region</h2>
          <p className="text-gray-400 text-sm md:text-lg text-center">
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
          <Select onValueChange={handleRegionChange} value={selectedRegion}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Choose a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="North America">North America</SelectItem>
              <SelectItem value="South America">South America</SelectItem>
              <SelectItem value="Europe">Europe</SelectItem>
              <SelectItem value="Africa">Africa</SelectItem>
              <SelectItem value="Antarctica">Antarctica</SelectItem>
              <SelectItem value="Asia">Asia</SelectItem>
              <SelectItem value="Oceania">Oceania</SelectItem>
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
