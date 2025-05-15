"use client";

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

export default function OnboardingTwo() {
  return (
    <OnboardingCard step={2} totalSteps={7}>
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
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center gap-2 px-8 py-6 border border-[#33353B] rounded-sm"
            >
              <category.icon />
              <p className="text-gray-400 text-sm font-semibold">{category.name}</p>
            </div>
          ))}
        </div>

        <ContinueButton />
      </div>
    </OnboardingCard>
  );
}
