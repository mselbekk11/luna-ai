"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OnboardingChecklist() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const completedTasks = ["set up account", "create initial product"];

  const pendingTasks = [
    "Set up AI integrations",
    "Invite team members to collaborate",
    "Set up your workspace preferences",
    "Schedule an onboarding call with our team",
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-gray-700"
      >
        <span>Onboarding Progress</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold">
          {pendingTasks.length}
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 rounded-lg bg-zinc-900 shadow-xl transition-all border border-zinc-800">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-white">Onboarding Progress</h3>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
            {pendingTasks.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {isMinimized ? (
            <button
              onClick={() => setIsMinimized(false)}
              className="rounded p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <ChevronUp size={16} />
            </button>
          ) : (
            <button
              onClick={() => setIsMinimized(true)}
              className="rounded p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <ChevronDown size={16} />
            </button>
          )}
          <button
            onClick={() => setIsOpen(false)}
            className="rounded p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="p-4">
          <div className="mb-4">
            <p className="mb-2 text-xs font-medium uppercase text-gray-400">
              Completed
            </p>
            <ul className="space-y-2">
              {completedTasks.map((task, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-300"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                    <Check size={12} />
                  </span>
                  <span className={cn("line-through text-gray-500")}>
                    {task}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase text-gray-400">
              To Complete
            </p>
            <ul className="space-y-2">
              {pendingTasks.map((task, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-white"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-700 text-gray-500">
                    <Check size={12} className="opacity-0" />
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex justify-between">
            <span className="text-xs text-gray-400">
              {completedTasks.length} of{" "}
              {completedTasks.length + pendingTasks.length} completed
            </span>
            <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-700">
              <div
                className="h-full bg-indigo-600"
                style={{
                  width: `${(completedTasks.length / (completedTasks.length + pendingTasks.length)) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
