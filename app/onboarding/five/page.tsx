"use client";

import { useState } from "react";
import OnboardingCard from "@/components/OnboardingCard";
import { ContinueButton } from "@/components/continue-button";
import { motion } from "motion/react";
import { toast } from "sonner";

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
    // If the primary is already selected, deselect it (set to null)
    // Otherwise, select it
    setSelectedPrimary((prev) => (prev === primaryName ? null : primaryName));
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

  const handleBeforeNext = () => {
    if (!selectedPrimary && selectedSecondary.length === 0) {
      toast.error("Please choose a primary and secondary objective");
      return false;
    }

    if (!selectedPrimary) {
      toast.error("Please choose a primary objective");
      return false;
    }

    if (selectedSecondary.length === 0) {
      toast.error("Please choose a secondary objective");
      return false;
    }

    return true; // Allow navigation
  };

  return (
    <OnboardingCard step={5} totalSteps={7} onBeforeNext={handleBeforeNext}>
      <div className="flex flex-col items-center gap-6 md:gap-10 w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeIn",
            delay: 0.3,
          }}
          className="flex flex-col items-center gap-2 text-center w-full"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Define Formulation Objectives
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            This can be changed later
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
          className="flex flex-col items-center gap-2 w-full"
        >
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <div className="flex justify-between w-full">
              <p className="text-xs md:text-sm font-semibold">
                Primary Objective{" "}
              </p>
              <p className="text-gray-600 text-xs md:text-sm">
                Choose 1 option
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 w-full">
              {primaryObjectives.map((primary) => {
                const isSelected = selectedPrimary === primary.name;
                return (
                  <button
                    key={primary.name}
                    className={`flex flex-col items-center gap-1 md:gap-2 py-2 border rounded-sm transition-all
                  ${
                    isSelected
                      ? "border-[#535FCC] bg-[#20233B]"
                      : "border-[#33353B] hover:border-[#535FCC]"
                  }`}
                    onClick={() => handlePrimarySelect(primary.name)}
                  >
                    <p
                      className={`text-xs font-semibold px-1 ${isSelected ? "text-white" : "text-gray-400"}`}
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
          className="flex flex-col items-center gap-2 w-full"
        >
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <div className="flex justify-between w-full">
              <p className="text-xs md:text-sm font-semibold">
                Secondary Objectives
              </p>
              <p className="text-gray-600 text-xs md:text-sm">
                Choose multiple
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 w-full">
              {secondaryObjectives.map((secondary) => {
                const isSelected = selectedSecondary.includes(secondary.name);
                return (
                  <button
                    key={secondary.name}
                    className={`flex flex-col items-center gap-1 md:gap-2 py-2 border rounded-sm transition-all
                  ${
                    isSelected
                      ? "border-[#535FCC] bg-[#20233B]"
                      : "border-[#33353B] hover:border-[#535FCC]"
                  }`}
                    onClick={() => handleSecondarySelect(secondary.name)}
                  >
                    <p
                      className={`text-xs font-semibold px-1 ${isSelected ? "text-white" : "text-gray-400"}`}
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
