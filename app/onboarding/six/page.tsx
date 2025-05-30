"use client";

import { ContinueButton } from "@/components/continue-button";
import OnboardingCard from "@/components/OnboardingCard";
import { motion } from "motion/react";

import { toast } from "sonner";
import { useState, useRef, type KeyboardEvent, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Upload, Plus } from "lucide-react";

export default function OnboardingSix() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addIngredient = (ingredient: string) => {
    const trimmedIngredient = ingredient.trim();

    if (!trimmedIngredient) return;

    if (ingredients.includes(trimmedIngredient)) {
      toast(`"${trimmedIngredient}" is already in your list.`);
      return;
    }

    setIngredients([...ingredients, trimmedIngredient]);
    setInputValue("");

    toast(`"${trimmedIngredient}" has been added to your list.`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient(inputValue);
    }
  };

  const handleAddClick = () => {
    addIngredient(inputValue);
  };

  const removeIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    const removed = newIngredients.splice(index, 1);
    setIngredients(newIngredients);

    toast(`"${removed[0]}" has been removed from your list.`);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const csvContent = event.target?.result as string;
      if (!csvContent) return;

      const lines = csvContent.split(/\r\n|\n/);
      const newIngredients = new Set(ingredients);
      const duplicates: string[] = [];
      let addedCount = 0;

      lines.forEach((line) => {
        // Split by comma and process each item on the line
        const items = line.split(",");
        items.forEach((item) => {
          const trimmedItem = item.trim();
          if (trimmedItem) {
            if (!newIngredients.has(trimmedItem)) {
              newIngredients.add(trimmedItem);
              addedCount++;
            } else {
              duplicates.push(trimmedItem);
            }
          }
        });
      });

      setIngredients(Array.from(newIngredients));

      if (addedCount > 0) {
        toast(`Added ${addedCount} new ingredients from your CSV file.`);
      }

      if (duplicates.length > 0) {
        toast(`${duplicates.length} ingredients were already in your list.`);
      }
    };

    reader.readAsText(file);

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleBeforeNext = () => {
    if (ingredients.length === 0) {
      toast.error("Please add at least one ingredient");
      return false; // Prevent navigation
    }
    return true; // Allow navigation
  };

  return (
    <OnboardingCard step={6} totalSteps={7} onBeforeNext={handleBeforeNext}>
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
            Enter Key Ingredients
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            This will help our AI make decisions
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
          className="w-full"
        >
          <div className="flex flex-col gap-6 md:gap-6 w-full">
            <div className="flex items-center w-full gap-2">
              <Input
                placeholder="Type an ingredient and press Enter"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="flex-1 text-sm md:text-base"
              />
              <Button onClick={handleAddClick} size="icon">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add ingredient</span>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <div className="text-xs sm:text-sm text-muted-foreground">
                {ingredients.length}{" "}
                {ingredients.length === 1 ? "ingredient" : "ingredients"} added
              </div>
              <div className="flex items-center">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  ref={fileInputRef}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  onClick={triggerFileUpload}
                  className="text-xs sm:text-sm w-full sm:w-auto"
                >
                  <Upload className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  Upload CSV
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-2 md:p-4 w-full max-w-full md:max-w-[750px]">
              <div className="text-xs md:text-sm font-medium mb-2">
                Your ingredients:
              </div>
              <div className="max-h-[80px] min-h-[80px] overflow-y-auto pr-2">
                {ingredients.length > 0 && (
                  <div className="flex flex-wrap gap-1 md:gap-2 content-start">
                    {ingredients.map((ingredient, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 whitespace-nowrap h-6 md:h-8 text-xs"
                      >
                        {ingredient}
                        <button
                          onClick={() => removeIngredient(index)}
                          className="ml-1 rounded-full hover:bg-muted p-0.5"
                          aria-label={`Remove ${ingredient}`}
                        >
                          <X className="h-2 w-2 md:h-3 md:w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
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
          className="mt-2 md:mt-0"
        >
          <ContinueButton />
        </motion.div>
      </div>
    </OnboardingCard>
  );
}
