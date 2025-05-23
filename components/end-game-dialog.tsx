"use client";

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
  onEndGame: () => void;
}

export function EndGameDialog({
  isOpen,
  onOpenChange,
  children,
  getRankedPlayers,
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
      <DialogContent className="sm:max-w-lg">
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full"
        />
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {t("gameOver")}
          </DialogTitle>
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
                      {t("score")}: {rankedPlayers[0].score} {t("points")}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("phase")}: {Math.min(rankedPlayers[0].phase, 10)}{" "}
                      {t("phaseOf")} 10
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
                              <div>
                                {player.score} {t("points")}
                              </div>
                              <div className="text-gray-500">
                                {t("phase")} {Math.min(player.phase, 10)}
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
                            <div>
                              {player.score} {t("points")}
                            </div>
                            <div className="text-gray-500">
                              {t("phase")} {Math.min(player.phase, 10)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </DialogContent>
    </Dialog>
  );
}
