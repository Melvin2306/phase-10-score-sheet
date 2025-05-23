"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

interface PlayerStatsCardProps {
  playerCount: number;
  playerNames: string[];
  currentPhases: number[];
  calculateTotal: (playerIndex: number) => number;
  winningPlayerIndex: number;
}

export function PlayerStatsCard({
  playerCount,
  playerNames,
  currentPhases,
  calculateTotal,
  winningPlayerIndex,
}: PlayerStatsCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="bg-white shadow">
      <CardContent className="p-4">
        <h2 className="text-lg font-bold mb-2">{t("currentPhases")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: playerCount }).map((_, playerIndex) => (
            <div
              key={playerIndex}
              className={`bg-gray-50 p-3 rounded-md ${
                playerIndex === winningPlayerIndex
                  ? "ring-2 ring-yellow-400"
                  : ""
              }`}
            >
              <div className="font-medium flex items-center">
                {playerIndex === winningPlayerIndex && (
                  <span
                    className="text-yellow-400 mr-1"
                    title={t("currentlyWinning") as string}
                  >
                    👑
                  </span>
                )}
                {playerNames[playerIndex] ||
                  `${t("player")} ${playerIndex + 1}`}
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-600">{t("phase")}:</span>
                <span className="ml-2 font-bold">
                  {currentPhases[playerIndex]}
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-600">{t("points")}:</span>
                <span
                  className={`ml-2 font-bold ${
                    calculateTotal(playerIndex) > 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {calculateTotal(playerIndex)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
