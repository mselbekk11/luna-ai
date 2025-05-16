"use client";

import { useState } from "react";
import OnboardingCard from "@/components/OnboardingCard";
import { ContinueButton } from "@/components/continue-button";
import { motion } from "motion/react";
import Liquid from "@/components/food-icons/liquid";
import Powder from "@/components/food-icons/powder";
import Bar from "@/components/food-icons/bar";
import Bottle from "@/components/food-icons/bottle";
import Can from "@/components/food-icons/can";
import Jar from "@/components/food-icons/jar";
import Sachet from "@/components/food-icons/sachet";
import Bag from "@/components/food-icons/bag";
import { toast } from "sonner";

const categories = [
  {
    name: "Liquid",
    icon: Liquid,
  },
  {
    name: "Powder",
    icon: Powder,
  },
  {
    name: "Bar",
    icon: Bar,
  },
  {
    name: "Bottle",
    icon: Bottle,
  },
  {
    name: "Can",
    icon: Can,
  },
  {
    name: "Jar",
    icon: Jar,
  },
  {
    name: "Sachet",
    icon: Sachet,
  },
  {
    name: "Bag",
    icon: Bag,
  },
];

export default function OnboardingThree() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleBeforeNext = () => {
    if (!selectedCategory) {
      toast.error("Please choose a product format");
      return false; // Prevent navigation
    }
    return true; // Allow navigation
  };

  return (
    <OnboardingCard step={3} totalSteps={7} onBeforeNext={handleBeforeNext}>
      <div className="flex flex-col items-center gap-6 md:gap-10 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeIn",
            delay: 0.3,
          }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <h2 className="text-lg md:text-3xl font-bold">
            Choose a product format
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            This will help us personalize your experience
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
          className="flex flex-col items-center w-full"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 w-full max-w-[750px]">
            {categories.map((category) => {
              const isSelected = selectedCategory === category.name;
              return (
                <button
                  key={category.name}
                  className={`flex flex-col items-center gap-2 px-3 py-4 md:px-8 md:py-6 border rounded-sm transition-all
                  ${
                    isSelected
                      ? "border-[#535FCC] bg-[#20233B]"
                      : "border-[#33353B] hover:border-[#535FCC]"
                  }`}
                  onClick={() => handleCategorySelect(category.name)}
                >
                  <div className="hidden md:block">
                    <category.icon />
                  </div>
                  <p
                    className={`text-sm font-semibold ${isSelected ? "text-white" : "text-gray-400"}`}
                  >
                    {category.name}
                  </p>
                </button>
              );
            })}
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
          <ContinueButton />
        </motion.div>
      </div>
    </OnboardingCard>
  );
}
