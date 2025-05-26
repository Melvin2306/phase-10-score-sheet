"use client";

import { GameStatistics } from "@/components/game-statistics";
import type { ConfettiRef } from "@/components/ui/confetti";
import { Confetti } from "@/components/ui/confetti";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/language-context";
import confetti from "canvas-confetti";
import { useRef } from "react";

interface EndGameDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  getRankedPlayers: () => Array<{
    index: number;
    name: string;
    phase: number;
    score: number;
  }>;
  getGameStatistics: () => {
    playerStats: Array<{
      name: string;
      index: number;
      totalScore: number;
      currentPhase: number;
      phasesCompleted: number;
      highestSingleScore: number;
      lowestNonZeroScore: number;
      averageScore: number;
      roundsWithPoints: number;
      perfectRounds: number;
      scoringPattern: number[];
    }>;
    gameStats: {
      totalRoundsPlayed: number;
      highestSingleScore: number;
      lowestNonZeroScore: number;
      averageScorePerRound: number;
      totalPointsScored: number;
      mostCompetitivePhase: number;
    };
    rankedPlayers: Array<{
      index: number;
      name: string;
      phase: number;
      score: number;
    }>;
  };
  onEndGame: () => void;
}

export function EndGameDialog({
  isOpen,
  onOpenChange,
  children,
  getRankedPlayers,
  getGameStatistics,
  onEndGame,
}: EndGameDialogProps) {
  const { t, getOrdinalPosition } = useLanguage();
  const confettiRef = useRef<ConfettiRef>(null);

  const handleEndGame = () => {
    onEndGame();
    // Trigger fireworks confetti
    setTimeout(() => {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <div onClick={handleEndGame}>{children}</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-hidden">
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full pointer-events-none"
        />
        <div className="relative z-10 overflow-y-auto max-h-[85vh]">
          <DialogHeader className="sticky top-0 bg-white z-20 pb-4">
            <DialogTitle className="text-2xl font-bold text-center">
              {t("gameOver")}
            </DialogTitle>
            <div className="text-center text-sm text-gray-500 mt-2">
              📊 {t("scrollForStatistics") || "Scroll down for detailed statistics"}
            </div>
          </DialogHeader>
        <div className="mt-4">
          {(() => {
            const rankedPlayers = getRankedPlayers();
            const topThree = rankedPlayers.slice(0, 3);
            const remaining = rankedPlayers.slice(3);

            return (
              <div className="space-y-6">
                {/* Winner Announcement */}
                {rankedPlayers.length > 0 && (
                  <div className="space-y-2 text-center">
                    <div className="text-lg font-semibold">
                      {t("winner")}: {rankedPlayers[0].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("phase")}: {Math.min(rankedPlayers[0].phase, 10)}{" "}
                      {t("phaseOf")} 10
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("score")}: {rankedPlayers[0].score} {t("points")}
                    </div>
                  </div>
                )}

                {/* Podium - Top 3 */}
                {topThree.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-md font-semibold text-center">
                      {t("finalRankings")}
                    </h3>
                    <div className="space-y-2">
                      {topThree.map((player, index) => {
                        const medals = ["🥇", "🥈", "🥉"];
                        const positions = [t("first"), t("second"), t("third")];
                        return (
                          <div
                            key={player.index}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                          >
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{medals[index]}</span>
                              <span className="font-medium">
                                {positions[index]}
                              </span>
                              <span>{player.name}</span>
                            </div>
                            <div className="text-right text-sm">
                              <div className="text-gray-500">
                                {t("phase")} {Math.min(player.phase, 10)}
                              </div>
                              <div>
                                {player.score} {t("points")}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Remaining Players */}
                {remaining.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-600 text-center">
                      {t("otherPlayers")}
                    </h4>
                    <div className="space-y-1">
                      {remaining.map((player, index) => (
                        <div
                          key={player.index}
                          className="flex items-center justify-between p-2 bg-gray-100 rounded-md text-sm"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-400 w-6">
                              {getOrdinalPosition(index + 4)}
                            </span>
                            <span>{player.name}</span>
                          </div>
                          <div className="text-right text-xs">
                            <div className="text-gray-500">
                              {t("phase")} {Math.min(player.phase, 10)}
                            </div>
                            <div>
                              {player.score} {t("points")}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Statistics Section */}
                {(() => {
                  const { playerStats, gameStats } = getGameStatistics();
                  
                  // Find interesting records with fallbacks
                  const highestScorerInRound = playerStats.length > 0 ? playerStats.reduce((prev, current) =>
                    prev.highestSingleScore > current.highestSingleScore ? prev : current
                  ) : { name: "N/A", highestSingleScore: 0 };
                  
                  const mostConsistentPlayer = playerStats.length > 0 ? playerStats.reduce((prev, current) =>
                    prev.averageScore < current.averageScore ? prev : current
                  ) : { name: "N/A", averageScore: 0 };
                  
                  const mostPerfectRounds = playerStats.length > 0 ? playerStats.reduce((prev, current) =>
                    prev.perfectRounds > current.perfectRounds ? prev : current
                  ) : { name: "N/A", perfectRounds: 0 };
                  
                  const fastestProgression = playerStats.length > 0 ? playerStats.reduce((prev, current) =>
                    prev.phasesCompleted > current.phasesCompleted ? prev : current
                  ) : { name: "N/A", phasesCompleted: 0 };

                  return (
                    <div className="border-t pt-6 mt-8">
                      <h2 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                        📊 {t("gameStatistics") || "Game Statistics"}
                      </h2>
                      
                      <div className="space-y-6">
                        {/* Game Overview */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-4 text-center">
                            🏆 {t("gameOverview") || "Game Overview"}
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold">{gameStats.totalRoundsPlayed}</div>
                              <div className="text-sm text-gray-600">{t("roundsPlayed") || "Rounds Played"}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{gameStats.totalPointsScored}</div>
                              <div className="text-sm text-gray-600">{t("totalPoints") || "Total Points"}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{gameStats.averageScorePerRound}</div>
                              <div className="text-sm text-gray-600">{t("avgPerRound") || "Avg Per Round"}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{gameStats.highestSingleScore}</div>
                              <div className="text-sm text-gray-600">{t("highestScore") || "Highest Score"}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{gameStats.lowestNonZeroScore || "N/A"}</div>
                              <div className="text-sm text-gray-600">{t("lowestScore") || "Lowest Score"}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{t("phase")} {gameStats.mostCompetitivePhase}</div>
                              <div className="text-sm text-gray-600">{t("mostCompetitive") || "Most Competitive"}</div>
                            </div>
                          </div>
                        </div>

                        {/* Notable Achievements */}
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-4 text-center">
                            🎯 {t("notableAchievements") || "Notable Achievements"}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-md p-3 text-center">
                              <div className="text-sm text-gray-600 mb-1">🎯 {t("highestSingleScore") || "Highest Single Score"}</div>
                              <div className="font-semibold">{highestScorerInRound.name}</div>
                              <div className="text-lg">{highestScorerInRound.highestSingleScore} {t("points")}</div>
                            </div>
                            <div className="bg-white rounded-md p-3 text-center">
                              <div className="text-sm text-gray-600 mb-1">⚡ {t("fastestProgression") || "Fastest Progression"}</div>
                              <div className="font-semibold">{fastestProgression.name}</div>
                              <div className="text-lg">{fastestProgression.phasesCompleted} {t("phases")}</div>
                            </div>
                            <div className="bg-white rounded-md p-3 text-center">
                              <div className="text-sm text-gray-600 mb-1">🎖️ {t("mostPerfectRounds") || "Most Perfect Rounds"}</div>
                              <div className="font-semibold">{mostPerfectRounds.name}</div>
                              <div className="text-lg">{mostPerfectRounds.perfectRounds} {t("rounds")}</div>
                            </div>
                            <div className="bg-white rounded-md p-3 text-center">
                              <div className="text-sm text-gray-600 mb-1">📊 {t("mostConsistent") || "Most Consistent"}</div>
                              <div className="font-semibold">{mostConsistentPlayer.name}</div>
                              <div className="text-lg">{mostConsistentPlayer.averageScore} {t("avgPoints")}</div>
                            </div>
                          </div>
                        </div>

                        {/* Player Statistics */}
                        <div className="bg-green-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-4 text-center">
                            📈 {t("playerStatistics") || "Player Statistics"}
                          </h3>
                          <div className="space-y-3">
                            {playerStats.map((player, index) => (
                              <div key={player.index} className="bg-white rounded-md p-3">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <div className="font-semibold">{player.name}</div>
                                    <span className="text-xs bg-gray-200 px-2 py-1 rounded">#{index + 1}</span>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-sm text-gray-600">{t("currentPhase")}: {Math.min(player.currentPhase, 10)}</div>
                                    <div className="font-semibold">{player.totalScore} {t("points")}</div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                                  <div className="text-center">
                                    <div className="font-medium">{player.phasesCompleted}</div>
                                    <div className="text-gray-600">{t("phasesCompleted") || "Phases"}</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="font-medium">{player.highestSingleScore}</div>
                                    <div className="text-gray-600">{t("highestRound") || "Highest"}</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="font-medium">{player.averageScore}</div>
                                    <div className="text-gray-600">{t("average") || "Average"}</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="font-medium">{player.perfectRounds}</div>
                                    <div className="text-gray-600">{t("perfectRounds") || "Perfect"}</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            );
          })()}
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
