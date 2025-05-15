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

export default function OnboardingThree() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <OnboardingCard step={3} totalSteps={7}>
      <div className="flex flex-col items-center gap-8">
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
          <h2 className="text-3xl font-bold">Choose a product category</h2>
          <p className="text-gray-400 text-lg">
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
          className="flex flex-col items-center gap-2"
        >
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category) => {
              const isSelected = selectedCategory === category.name;
              return (
                <button
                  key={category.name}
                  className={`flex flex-col items-center gap-2 px-8 py-6 border rounded-sm transition-all
                  ${
                    isSelected
                      ? "border-[#535FCC] bg-[#20233B]"
                      : "border-[#33353B] hover:border-[#535FCC]"
                  }`}
                  onClick={() => handleCategorySelect(category.name)}
                >
                  <category.icon />
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
