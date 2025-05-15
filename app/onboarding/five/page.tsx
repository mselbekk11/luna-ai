"use client";

import { useState } from "react";
import OnboardingCard from "@/components/OnboardingCard";
import { ContinueButton } from "@/components/continue-button";
import { motion } from "motion/react";

const primaryObjectives = [
  {
    name: "Reduce Levels",
  },
  {
    name: "Regulatory Requirements",
  },
  {
    name: "Lower Costs",
  },
  {
    name: "Improve Shelf Life",
  },
  {
    name: "Remove Allergens",
  },
  {
    name: "Improve Sustainability",
  },
  {
    name: "Replace Ingredients",
  },
  {
    name: "Expansion",
  },
];

const secondaryObjectives = [
  {
    name: "Maintain Quality",
  },
  {
    name: "Improve Taste",
  },
  {
    name: "Clean label",
  },
  {
    name: "Source locally",
  },
  {
    name: "Non GMO",
  },
  {
    name: "Allergen Labeling",
  },
  {
    name: "Carbon footprint",
  },
  {
    name: "Simplify Ingredients",
  },
  {
    name: "Manufacturing",
  },
  {
    name: "Improve Nutrition",
  },
];

export default function OnboardingFive() {
  const [selectedPrimary, setSelectedPrimary] = useState<string | null>(null);
  const [selectedSecondary, setSelectedSecondary] = useState<string[]>([]);

  const handlePrimarySelect = (primaryName: string) => {
    setSelectedPrimary(primaryName);
  };

  const handleSecondarySelect = (secondaryName: string) => {
    setSelectedSecondary((prev) => {
      if (prev.includes(secondaryName)) {
        // Remove if already selected
        return prev.filter((name) => name !== secondaryName);
      } else {
        // Add if not already selected
        return [...prev, secondaryName];
      }
    });
  };

  return (
    <OnboardingCard step={5} totalSteps={7}>
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
          <h2 className="text-3xl font-bold">Define Formulation Objectives</h2>
          <p className="text-gray-400 text-lg">This can be changed later</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeIn",
            delay: 0.6,
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-sm font-semibold">Primary Objective </p>
              <p className="text-gray-600 text-sm">Choose 1 option</p>
            </div>
            <div className="grid grid-cols-4 gap-4 min-w-[750px]">
              {primaryObjectives.map((primary) => {
                const isSelected = selectedPrimary === primary.name;
                return (
                  <button
                    key={primary.name}
                    className={`flex flex-col items-center gap-2 py-2 border rounded-sm transition-all
                  ${
                    isSelected
                      ? "border-[#535FCC] bg-[#20233B]"
                      : "border-[#33353B] hover:border-[#535FCC]"
                  }`}
                    onClick={() => handlePrimarySelect(primary.name)}
                  >
                    <p
                      className={`text-xs font-semibold ${isSelected ? "text-white" : "text-gray-400"}`}
                    >
                      {primary.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
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
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-sm font-semibold">Secondary Objectives</p>
              <p className="text-gray-600 text-sm">Choose multiple</p>
            </div>
            <div className="grid grid-cols-5 gap-4 min-w-[750px]">
              {secondaryObjectives.map((secondary) => {
                const isSelected = selectedSecondary.includes(secondary.name);
                return (
                  <button
                    key={secondary.name}
                    className={`flex flex-col items-center gap-2 py-2 border rounded-sm transition-all
                  ${
                    isSelected
                      ? "border-[#535FCC] bg-[#20233B]"
                      : "border-[#33353B] hover:border-[#535FCC]"
                  }`}
                    onClick={() => handleSecondarySelect(secondary.name)}
                  >
                    <p
                      className={`text-xs font-semibold ${isSelected ? "text-white" : "text-gray-400"}`}
                    >
                      {secondary.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeIn",
            delay: 1.2,
          }}
          className="flex flex-col items-center gap-2"
        >
          <ContinueButton />
        </motion.div>
      </div>
    </OnboardingCard>
  );
}
