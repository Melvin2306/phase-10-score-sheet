"use client";

import { useLanguage } from "@/contexts/language-context";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { phases } from "@/lib/game-constants";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export function useGameLogic() {
  const { t, getPhaseDescription } = useLanguage();
  const [playerCount, setPlayerCount] = useState(4);
  const [playerNames, setPlayerNames] = useLocalStorage<string[]>(
    "phase10-player-names",
    Array(6).fill("")
  );
  const [scores, setScores] = useLocalStorage<number[][]>(
    "phase10-scores",
    Array.from({ length: phases.length }, () =>
      Array.from({ length: 6 }, () => 0)
    )
  );
  const [, setWinner] = useLocalStorage<string>("phase10-winner", "");
  const [currentPhases, setCurrentPhases] = useLocalStorage<number[]>(
    "phase10-current-phases",
    Array(6).fill(1)
  );
  const [endGameDialogOpen, setEndGameDialogOpen] = useState(false);

  // Initialize scores if they're empty
  useEffect(() => {
    if (!scores || scores.length === 0 || scores.length !== phases.length) {
      setScores(
        Array.from({ length: phases.length }, () =>
          Array.from({ length: 6 }, () => 0)
        )
      );
    }
  }, [scores, setScores]);

  // Update a score for a specific player and phase
  const updateScore = (
    phaseIndex: number,
    playerIndex: number,
    value: number
  ) => {
    // Create a proper deep copy of the scores array
    const newScores = scores.map((row) => [...row]);

    // Create a new row if it doesn't exist
    if (!newScores[phaseIndex]) {
      newScores[phaseIndex] = Array(6).fill(0);
    }

    // Update the value at the specific position
    newScores[phaseIndex][playerIndex] = value;

    setScores(newScores);

    // Only show toast for significant score changes
    if (value > 0 && !phases[phaseIndex]?.isTotal) {
      const playerName =
        playerNames[playerIndex] || `${t("player")} ${playerIndex + 1}`;
      toast.info(
        `${playerName}: ${value} ${t("pointsFor")} ${getPhaseDescription(phases[phaseIndex].id)}`
      );
    }
  };

  // Calculate the total score for a player
  const calculateTotal = useCallback((playerIndex: number): number => {
    return scores.reduce((total, phaseScores, phaseIndex) => {
      // Skip total rows in the calculation
      if (phases[phaseIndex]?.isTotal) return total;
      return total + (phaseScores[playerIndex] || 0);
    }, 0);
  }, [scores]);

  // Update the totals whenever scores change
  useEffect(() => {
    // Skip update if scores array is empty or not initialized
    if (!scores || scores.length === 0) return;

    // Create a proper deep copy of the scores array
    const newScores = scores.map((row) => [...row]);

    // Update the total row (index 10, id 11)
    phases.forEach((phase, phaseIndex) => {
      if (phase.id === 11) {
        // Total row
        const newRow = Array(6)
          .fill(0)
          .map((_, playerIndex) => calculateTotal(playerIndex));
        newScores[phaseIndex] = newRow;
      }
    });

    // Prevent infinite loop by only updating if the totals are different
    const hasChanges = phases.some((phase, phaseIndex) => {
      if (phase.id === 11) {
        return Array(6)
          .fill(0)
          .some((_, playerIndex) => {
            const calculatedValue = calculateTotal(playerIndex);
            return scores[phaseIndex]?.[playerIndex] !== calculatedValue;
          });
      }
      return false;
    });

    if (hasChanges) {
      setScores(newScores);
    }
  }, [scores, calculateTotal, setScores]);

  // Determine the current winning player
  const determineWinningPlayer = (): number => {
    let winningPlayerIndex = -1;
    let highestPhase = 0;
    let lowestScore = Infinity;

    for (let i = 0; i < playerCount; i++) {
      const playerPhase = currentPhases[i];
      const playerScore = calculateTotal(i);

      // First priority: highest phase
      if (playerPhase > highestPhase) {
        highestPhase = playerPhase;
        lowestScore = playerScore;
        winningPlayerIndex = i;
      }
      // If same phase, second priority: lowest points
      else if (playerPhase === highestPhase && playerScore < lowestScore) {
        lowestScore = playerScore;
        winningPlayerIndex = i;
      }
    }

    return winningPlayerIndex;
  };

  // Get the current winning player
  const winningPlayerIndex = determineWinningPlayer();
  const hasGameWinner =
    winningPlayerIndex !== -1 && currentPhases[winningPlayerIndex] >= 11;

  // Update winner when the game is completed
  useEffect(() => {
    if (hasGameWinner && winningPlayerIndex !== -1) {
      const winnerName =
        playerNames[winningPlayerIndex] || `Player ${winningPlayerIndex + 1}`;
      setWinner(winnerName);
    }
  }, [currentPhases, playerNames, winningPlayerIndex, hasGameWinner, setWinner]);

  // Add a player
  const addPlayer = () => {
    if (playerCount < 6) {
      setPlayerCount(playerCount + 1);
      toast.success("Player added successfully!");
    }
  };

  // Remove a player
  const removePlayer = () => {
    if (playerCount > 2) {
      setPlayerCount(playerCount - 1);
      toast.success("Player removed successfully!");
    }
  };

  // Update player name
  const updatePlayerName = (index: number, name: string) => {
    const newNames = [...playerNames];
    newNames[index] = name;
    setPlayerNames(newNames);
    toast.success("Player name updated successfully!");
  };

  // Reset the game
  const handleResetGame = () => {
    // Use Array.from to create proper deep arrays
    setScores(
      Array.from({ length: phases.length }, () =>
        Array.from({ length: 6 }, () => 0)
      )
    );
    setWinner("");
    setCurrentPhases(Array.from({ length: 6 }, () => 1));
    toast.success("Game reset successfully!");
  };

  // Update the current phase for a player
  const updateCurrentPhase = (
    playerIndex: number,
    phaseId: number,
    completed: boolean | string
  ) => {
    const newPhases = [...currentPhases];

    if (completed) {
      // If checking a phase, advance to the next phase
      newPhases[playerIndex] = Math.max(newPhases[playerIndex], phaseId + 1);
    } else {
      // If unchecking a phase, only allow unchecking the last completed phase
      if (newPhases[playerIndex] === phaseId + 1) {
        newPhases[playerIndex] = phaseId;
        const playerName =
          playerNames[playerIndex] || `Player ${playerIndex + 1}`;
        toast.info(`${playerName} reverted to phase ${phaseId}`);
      } else {
        // Don't allow unchecking phases that aren't the last one
        return;
      }
    }

    setCurrentPhases(newPhases);

    if (completed) {
      const playerName =
        playerNames[playerIndex] || `Player ${playerIndex + 1}`;
      toast.success(`${playerName} completed phase ${phaseId}!`);
    }
  };

  // Handle end game
  const handleEndGame = () => {
    setEndGameDialogOpen(true);
  };

  // Get all players ranked by performance
  const getRankedPlayers = () => {
    const players = Array.from({ length: playerCount }, (_, index) => ({
      index,
      name: playerNames[index] || `Player ${index + 1}`,
      phase: currentPhases[index],
      score: calculateTotal(index),
    }));

    // Sort by phase (descending) then by score (ascending)
    return players.sort((a, b) => {
      if (a.phase !== b.phase) {
        return b.phase - a.phase; // Higher phase wins
      }
      return a.score - b.score; // Lower score wins if same phase
    });
  };

  return {
    // State
    playerCount,
    playerNames,
    scores,
    currentPhases,
    endGameDialogOpen,
    winningPlayerIndex,
    hasGameWinner,
    
    // Actions
    addPlayer,
    removePlayer,
    updatePlayerName,
    handleResetGame,
    updateCurrentPhase,
    updateScore,
    handleEndGame,
    setEndGameDialogOpen,
    calculateTotal,
    getRankedPlayers,
  };
}