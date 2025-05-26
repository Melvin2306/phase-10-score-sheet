"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/language-context";
import { BarChart3, Target, TrendingUp, Trophy } from "lucide-react";
import { useState } from "react";

interface GameStatisticsProps {
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
}

export function GameStatistics({ getGameStatistics }: GameStatisticsProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenStatistics = () => {
    try {
      setIsOpen(true);
    } catch (error) {
      console.error("Error opening statistics:", error);
    }
  };

  let statisticsData;
  try {
    statisticsData = getGameStatistics();
  } catch (error) {
    console.error("Error calculating statistics:", error);
    // Fallback data
    statisticsData = {
      playerStats: [],
      gameStats: {
        totalRoundsPlayed: 0,
        highestSingleScore: 0,
        lowestNonZeroScore: 0,
        averageScorePerRound: 0,
        totalPointsScored: 0,
        mostCompetitivePhase: 1,
      },
      rankedPlayers: [],
    };
  }

  const { playerStats, gameStats, rankedPlayers } = statisticsData;

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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2"
          onClick={handleOpenStatistics}
        >
          <BarChart3 className="h-4 w-4" />
          {t("detailedStatistics") || "Detailed Statistics"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            {t("gameStatistics") || "Game Statistics"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Game Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                {t("gameOverview") || "Game Overview"}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {gameStats.totalRoundsPlayed}
                </div>
                <div className="text-sm text-gray-600">
                  {t("roundsPlayed") || "Rounds Played"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {gameStats.totalPointsScored}
                </div>
                <div className="text-sm text-gray-600">
                  {t("totalPoints") || "Total Points"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {gameStats.averageScorePerRound}
                </div>
                <div className="text-sm text-gray-600">
                  {t("avgPerRound") || "Avg Per Round"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {gameStats.highestSingleScore}
                </div>
                <div className="text-sm text-gray-600">
                  {t("highestScore") || "Highest Score"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {gameStats.lowestNonZeroScore || "N/A"}
                </div>
                <div className="text-sm text-gray-600">
                  {t("lowestScore") || "Lowest Score"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {t("phase")} {gameStats.mostCompetitivePhase}
                </div>
                <div className="text-sm text-gray-600">
                  {t("mostCompetitive") || "Most Competitive"}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notable Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                {t("notableAchievements") || "Notable Achievements"}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Badge variant="secondary" className="w-full justify-center">
                  🎯 {t("highestSingleScore") || "Highest Single Score"}
                </Badge>
                <div className="text-center">
                  <div className="font-semibold">
                    {highestScorerInRound.name}
                  </div>
                  <div className="text-lg">
                    {highestScorerInRound.highestSingleScore} {t("points")}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Badge variant="secondary" className="w-full justify-center">
                  ⚡ {t("fastestProgression") || "Fastest Progression"}
                </Badge>
                <div className="text-center">
                  <div className="font-semibold">{fastestProgression.name}</div>
                  <div className="text-lg">
                    {fastestProgression.phasesCompleted} {t("phases")}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Badge variant="secondary" className="w-full justify-center">
                  🎖️ {t("mostPerfectRounds") || "Most Perfect Rounds"}
                </Badge>
                <div className="text-center">
                  <div className="font-semibold">{mostPerfectRounds.name}</div>
                  <div className="text-lg">
                    {mostPerfectRounds.perfectRounds} {t("rounds")}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Badge variant="secondary" className="w-full justify-center">
                  📊 {t("mostConsistent") || "Most Consistent"}
                </Badge>
                <div className="text-center">
                  <div className="font-semibold">
                    {mostConsistentPlayer.name}
                  </div>
                  <div className="text-lg">
                    {mostConsistentPlayer.averageScore} {t("avgPoints")}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Player Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                {t("playerStatistics") || "Player Statistics"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {playerStats.map((player, index) => (
                  <div key={player.index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-lg">
                          {player.name}
                        </div>
                        <Badge variant={index < 3 ? "default" : "secondary"}>
                          #{index + 1}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          {t("currentPhase")}:{" "}
                          {Math.min(player.currentPhase, 10)}
                        </div>
                        <div className="font-semibold">
                          {player.totalScore} {t("points")}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div className="text-center">
                        <div className="font-medium">
                          {player.phasesCompleted}
                        </div>
                        <div className="text-gray-600">
                          {t("phasesCompleted") || "Phases"}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">
                          {player.highestSingleScore}
                        </div>
                        <div className="text-gray-600">
                          {t("highestRound") || "Highest"}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{player.averageScore}</div>
                        <div className="text-gray-600">
                          {t("average") || "Average"}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">
                          {player.perfectRounds}
                        </div>
                        <div className="text-gray-600">
                          {t("perfectRounds") || "Perfect"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
