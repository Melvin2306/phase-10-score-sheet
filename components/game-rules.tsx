"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

interface GameRulesProps {
  phases: Array<{
    id: number;
    description: string;
    isTotal?: boolean;
  }>;
}

export function GameRules({ phases }: GameRulesProps) {
  const { t, getPhaseDescription, getScoringRules } = useLanguage();

  const phaseDefinitions = [
    {
      titleKey: "sets" as const,
      color: "green",
      descriptionKey: "setsDescription" as const,
      exampleKey: "setsExample" as const,
    },
    {
      titleKey: "runs" as const,
      color: "blue",
      descriptionKey: "runsDescription" as const,
      exampleKey: "runsExample" as const,
    },
    {
      titleKey: "allOneColor" as const,
      color: "purple",
      descriptionKey: "allOneColorDescription" as const,
      exampleKey: "allOneColorExample" as const,
    },
    {
      titleKey: "wildCards" as const,
      color: "yellow",
      descriptionKey: "wildCardsDescription" as const,
      exampleKey: "wildCardsExample" as const,
    },
  ];

  return (
    <Card className="bg-white shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t("gameRules")}
        </h2>

        <div className="space-y-8">
          {/* The Ten Phases */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{t("phases")}</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {phases
                .filter((phase) => !phase.isTotal)
                .map((phase) => (
                  <div
                    key={phase.id}
                    className="bg-blue-50 p-3 rounded-lg flex items-center"
                  >
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      {phase.id}
                    </span>
                    <span className="text-sm">
                      {getPhaseDescription(phase.id)}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Definitions */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{t("definitions")}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {phaseDefinitions.map((def) => (
                <div key={def.titleKey}>
                  <h4 className={`font-semibold text-${def.color}-600 mb-2`}>
                    {t(def.titleKey)}
                  </h4>
                  <p className="text-sm mb-2">{t(def.descriptionKey)}</p>
                  <div className={`bg-${def.color}-50 p-3 rounded-lg text-sm`}>
                    <strong>
                      {def.titleKey === "wildCards" ? t("note") : t("example")}:
                    </strong>{" "}
                    {t(def.exampleKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gameplay */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{t("howToPlay")}</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t("setup")}</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  {(t("setupRules") as string[]).map(
                    (rule: string, index: number) => (
                      <li key={index}>{rule}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t("yourTurn")}</h4>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  {(t("turnRules") as string[]).map(
                    (rule: string, index: number) => (
                      <li key={index}>{rule}</li>
                    )
                  )}
                </ol>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t("makingAPhase")}</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  {(t("phaseRules") as string[]).map(
                    (rule: string, index: number) => (
                      <li key={index}>{rule}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Scoring */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{t("scoring")}</h3>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm mb-3">{t("scoringDescription")}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-bold">{t("cards1to9")}</div>
                  <div className="text-red-600">{t("points5")}</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-bold">{t("cards10to12")}</div>
                  <div className="text-red-600">{t("points10")}</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-bold">{t("skipCard")}</div>
                  <div className="text-red-600">{t("points15")}</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-bold">{t("wildCard")}</div>
                  <div className="text-red-600">{t("points25")}</div>
                </div>
              </div>
              <p className="text-sm mt-3 text-center">
                <strong>{t("goal")}:</strong> {t("scoringGoal")}
              </p>
            </div>
          </div>

          {/* Special Cards */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{t("specialCards")}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-700 mb-2">
                  {t("skipCards")}
                </h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  {(t("skipCardRules") as string[]).map(
                    (rule: string, index: number) => (
                      <li key={index}>{rule}</li>
                    )
                  )}
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">
                  {t("wildCards")}
                </h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  {(t("wildCardRules") as string[]).map(
                    (rule: string, index: number) => (
                      <li key={index}>{rule}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{t("strategyTips")}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <ul className="text-sm space-y-2 list-disc list-inside">
                  {(t("strategyTipsContent") as string[]).map(
                    (tip: string, index: number) => (
                      <li key={index}>{tip}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
