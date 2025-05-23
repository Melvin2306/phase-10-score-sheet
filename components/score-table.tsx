"use client";

import { PlayerNameRow } from "@/components/player-name-row";
import { ScoreCell } from "@/components/score-cell";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/language-context";
import React from "react";

interface ScoreTableProps {
  playerCount: number;
  playerNames: string[];
  currentPhases: number[];
  scores: number[][];
  phases: Array<{
    id: number;
    description: string;
    isTotal?: boolean;
  }>;
  updatePlayerName: (index: number, name: string) => void;
  updateCurrentPhase: (
    playerIndex: number,
    phaseId: number,
    completed: boolean | string
  ) => void;
  updateScore: (phaseIndex: number, playerIndex: number, value: number) => void;
}

export function ScoreTable({
  playerCount,
  playerNames,
  currentPhases,
  scores,
  phases,
  updatePlayerName,
  updateCurrentPhase,
  updateScore,
}: ScoreTableProps) {
  const { t, getPhaseDescription } = useLanguage();

  return (
    <div className="overflow-x-auto">
      <Table className="border-collapse border border-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 bg-gray-100 font-bold text-center">
              #
            </TableHead>
            <TableHead className="w-64 bg-gray-100 font-bold">
              {t("phase")}
            </TableHead>
            {Array.from({ length: playerCount }).map((_, index) => (
              <React.Fragment key={`header-${index}`}>
                <TableHead className="w-10 bg-gray-100 text-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>✓</TooltipTrigger>
                      <TooltipContent>
                        <p>{t("phaseCompleted")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableHead>
                <TableHead className="bg-gray-100 text-center">
                  {t("player")} {index + 1}
                </TableHead>
              </React.Fragment>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <PlayerNameRow
            playerCount={playerCount}
            playerNames={playerNames}
            updatePlayerName={updatePlayerName}
            currentPhases={currentPhases}
          />

          {phases.map((phase, phaseIndex) => (
            <TableRow
              key={phase.id}
              className={phase.isTotal ? "bg-gray-100 font-bold" : ""}
            >
              <TableCell className="border border-gray-200 text-center font-bold">
                {phase.isTotal ? "" : phase.id}
              </TableCell>
              <TableCell className="border border-gray-200 font-medium">
                {phase.isTotal ? t("total") : getPhaseDescription(phase.id)}
              </TableCell>

              {Array.from({ length: playerCount }).map((_, playerIndex) => (
                <ScoreCell
                  key={`cell-${phase.id}-${playerIndex}`}
                  phase={phase}
                  phaseIndex={phaseIndex}
                  playerIndex={playerIndex}
                  playerCount={playerCount}
                  currentPhases={currentPhases}
                  scores={scores}
                  updateCurrentPhase={updateCurrentPhase}
                  updateScore={updateScore}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
