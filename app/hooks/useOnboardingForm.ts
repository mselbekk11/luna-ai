"use client";

import { useState } from 'react';
import { useOnboarding } from '../context/OnboardingContext';

export function useOnboardingForm<T extends Record<string, unknown>>(initialData: T) {
  const { onboardingData, updateData } = useOnboarding();
  const [formData, setFormData] = useState<T>(() => {
    // Initialize with any existing data from the context
    return {
      ...initialData,
      ...(onboardingData as Partial<T>)
    };
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    // Handle checkbox inputs
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
      return;
    }
    
    // Handle other input types
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const saveFormData = () => {
    updateData(formData as Record<string, unknown>);
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    saveFormData
  };
} 