"use client";

import { useState } from "react";
import OnboardingCard from "@/components/OnboardingCard";
import { ContinueButton } from "@/components/continue-button";
import { motion } from "motion/react";
import Snacks from "@/components/food-icons/snacks";
import FastFood from "@/components/food-icons/fast-food";
import Beverages from "@/components/food-icons/beverages";
import BakedGoods from "@/components/food-icons/baked-goods";
import BreakfastFoods from "@/components/food-icons/breakfast-foods";
import Dairy from "@/components/food-icons/dairy";
import DogFood from "@/components/food-icons/dog-food";
import Confectionairy from "@/components/food-icons/confectionary";
import { toast } from "sonner";

const categories = [
  {
    name: "Snacks",
    icon: Snacks,
  },
  {
    name: "Fast Food",
    icon: FastFood,
  },
  {
    name: "Beverages",
    icon: Beverages,
  },
  {
    name: "Baked Goods",
    icon: BakedGoods,
  },
  {
    name: "BreakFast Food",
    icon: BreakfastFoods,
  },
  {
    name: "Dairy",
    icon: Dairy,
  },
  {
    name: "Pet Food",
    icon: DogFood,
  },
  {
    name: "Confectionary",
    icon: Confectionairy,
  },
];

export default function OnboardingTwo() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleBeforeNext = () => {
    if (!selectedCategory) {
      toast.error("Please choose a product category");
      return false; // Prevent navigation
    }
    return true; // Allow navigation
  };

  return (
    <OnboardingCard step={2} totalSteps={7} onBeforeNext={handleBeforeNext}>
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
            Choose a product category
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
