"use client";

import { LanguageSelector } from "@/components/language-selector";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/language-context";
import { Minus, Plus, Trash2, Trophy } from "lucide-react";

interface GameHeaderProps {
  playerCount: number;
  onAddPlayer: () => void;
  onRemovePlayer: () => void;
  onResetGame: () => void;
  onEndGame: () => void;
  winningPlayerIndex: number;
  playerNames: string[];
  hasGameWinner: boolean;
}

export function GameHeader({
  playerCount,
  onAddPlayer,
  onRemovePlayer,
  onResetGame,
  onEndGame,
  winningPlayerIndex,
  playerNames,
  hasGameWinner,
}: GameHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      {/* Title Section with Language Selector */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-4xl font-black tracking-wider text-red-600 drop-shadow-lg">
              PHASE
            </h1>
            <h1 className="text-4xl font-black tracking-wider text-green-600 drop-shadow-lg">
              10
            </h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{t("scoreSheet")}</h2>
          <div className="hidden lg:flex items-center space-x-1 ml-4">
            {[
              { num: 4, color: "bg-red-500", rotation: "-rotate-12" },
              { num: 8, color: "bg-blue-500", rotation: "rotate-6" },
              { num: 3, color: "bg-green-500", rotation: "-rotate-6" },
              { num: 10, color: "bg-yellow-500", rotation: "rotate-12" },
              { num: "W", color: "bg-purple-600", rotation: "-rotate-3" },
              { num: 1, color: "bg-red-500", rotation: "rotate-8" },
              { num: 2, color: "bg-blue-500", rotation: "-rotate-8" }
            ].map((card, i) => (
              <div
                key={i}
                className={`w-10 h-14 flex items-center justify-center font-bold text-white ${card.rotation} ${card.color} rounded-lg shadow-lg border-2 border-white transform hover:scale-110 transition-transform duration-200 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="text-sm relative z-10">{card.num}</span>
              </div>
            ))}
          </div>
        </div>
        <LanguageSelector />
      </div>

      {/* Game Controls Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Current Leader Display */}
        <div className="flex items-center mb-4 md:mb-0">
          <span className="mr-2">👑</span>
          <span className="font-semibold">{t("currentLeader")}:</span>
          {winningPlayerIndex !== -1 ? (
            <span
              className={`ml-2 font-bold ${
                hasGameWinner ? "text-black" : "text-gray-500"
              }`}
            >
              {playerNames[winningPlayerIndex] ||
                `Player ${winningPlayerIndex + 1}`}
              {hasGameWinner && ` (${t("winner")}!)`}
            </span>
          ) : (
            <span className="ml-2 text-gray-500">{t("noLeader")}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onAddPlayer}
                  disabled={playerCount >= 6}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t("addPlayer")}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onRemovePlayer}
                  disabled={playerCount <= 2}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t("removePlayer")}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <AlertDialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      {t("resetGame")}
                    </Button>
                  </AlertDialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("resetGame")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t("confirmReset")}</AlertDialogTitle>
                <AlertDialogDescription>
                  {t("resetGameDescription")}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button variant="destructive" onClick={onResetGame}>
                    {t("resetGame")}
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="default" onClick={onEndGame}>
                  <Trophy className="h-4 w-4 mr-2" />
                  {t("endGame")}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t("endGameTooltip")}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
