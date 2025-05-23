"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

interface PlayerNameRowProps {
  playerCount: number;
  playerNames: string[];
  updatePlayerName: (index: number, name: string) => void;
  currentPhases: number[];
}

export function PlayerNameRow({
  playerCount,
  playerNames,
  updatePlayerName,
  currentPhases,
}: PlayerNameRowProps) {
  return (
    <TableRow>
      <TableCell className="border border-gray-200"></TableCell>
      <TableCell className="border border-gray-200 font-bold">
        PLAYER&apos;S NAME
      </TableCell>
      {Array.from({ length: playerCount }).map((_, index) => (
        <React.Fragment key={`player-${index}`}>
          <TableCell className="border border-gray-200"></TableCell>
          <TableCell className="border border-gray-200 p-1">
            <div className="relative">
              <Input
                value={playerNames[index] || ""}
                onChange={(e) => updatePlayerName(index, e.target.value)}
                placeholder={`Player ${index + 1}`}
                className="text-center"
              />
              <Badge
                className="absolute -top-2 -right-2 bg-green-600"
                title="Current Phase"
              >
                {currentPhases[index]}
              </Badge>
            </div>
          </TableCell>
        </React.Fragment>
      ))}
    </TableRow>
  );
}
