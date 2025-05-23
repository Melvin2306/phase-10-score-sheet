"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";
import React from "react";

interface ScoreCellProps {
  phase: {
    id: number;
    description: string;
    isTotal?: boolean;
  };
  phaseIndex: number;
  playerIndex: number;
  playerCount: number;
  currentPhases: number[];
  scores: number[][];
  updateCurrentPhase: (
    playerIndex: number,
    phaseId: number,
    completed: boolean | string
  ) => void;
  updateScore: (phaseIndex: number, playerIndex: number, value: number) => void;
}

export function ScoreCell({
  phase,
  phaseIndex,
  playerIndex,
  currentPhases,
  scores,
  updateCurrentPhase,
  updateScore,
}: ScoreCellProps) {
  return (
    <React.Fragment>
      <TableCell className="border border-gray-200 p-0 text-center">
        {!phase.isTotal && (
          <div className="flex items-center justify-center">
            <Checkbox
              checked={currentPhases[playerIndex] > phase.id}
              onCheckedChange={(checked) =>
                updateCurrentPhase(playerIndex, phase.id, !!checked)
              }
            />
          </div>
        )}
      </TableCell>
      <TableCell className="border border-gray-200 p-0">
        {phase.isTotal ? (
          <div className="p-2 text-center font-bold">
            {scores[phaseIndex]?.[playerIndex] || 0}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Input
              type="number"
              min="0"
              step="5"
              value={scores[phaseIndex]?.[playerIndex] || 0}
              onChange={(e) => {
                // Parse value and ensure it's a non-negative number
                let value = Number.parseInt(e.target.value);
                value = isNaN(value) ? 0 : Math.max(0, value);
                updateScore(phaseIndex, playerIndex, value);
              }}
              className="border-0 text-center h-10 focus:ring-0"
            />
          </div>
        )}
      </TableCell>
    </React.Fragment>
  );
}
