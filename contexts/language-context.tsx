"use client";

import {
  getOrdinalPosition,
  Language,
  TranslationKey,
  translations,
} from "@/lib/i18n";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string | string[];
  getPhaseDescription: (phase: number) => string;
  getScoringRules: () => string[];
  getOrdinalPosition: (position: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("phase10-language") as Language;
    if (
      savedLanguage &&
      (savedLanguage === "en" ||
        savedLanguage === "de" ||
        savedLanguage === "it" ||
        savedLanguage === "fr" ||
        savedLanguage === "es")
    ) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("phase10-language", newLanguage);
  };

  const t = (key: TranslationKey): string | string[] => {
    const value = translations[language][key];
    if (Array.isArray(value)) {
      return value;
    }
    return typeof value === "string" ? value : "";
  };

  const getPhaseDescription = (phase: number): string => {
    if (phase >= 1 && phase <= 10) {
      return translations[language].phaseList[
        phase as keyof typeof translations.en.phaseList
      ];
    }
    return "";
  };

  const getScoringRules = (): string[] => {
    return [...translations[language].scoringList];
  };

  const value = {
    language,
    setLanguage,
    t,
    getPhaseDescription,
    getScoringRules,
    getOrdinalPosition: (position: number) =>
      getOrdinalPosition(position, language),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
