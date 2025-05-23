"use client";

import { useLocalStorage } from "@/app/hooks/use-local-storage";
import { PhaseHeader } from "@/components/phase-header";
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
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import type { ConfettiRef } from "@/components/ui/confetti";
import { Confetti } from "@/components/ui/confetti";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
import confetti from "canvas-confetti";
import { Minus, Plus, Trash2, Trophy } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { PlayerNameRow } from "./player-name-row";

// Define the phases of the game
const phases = [
  { id: 1, description: "2 sets of 3" },
  { id: 2, description: "1 set of 3 & 1 run of 4" },
  { id: 3, description: "1 set of 4 & 1 run of 4" },
  { id: 4, description: "1 run of 7" },
  { id: 5, description: "1 run of 8" },
  { id: 6, description: "1 run of 9" },
  { id: 7, description: "2 sets of 4" },
  { id: 8, description: "7 of all one color" },
  { id: 9, description: "1 set of 5 & 1 set of 2" },
  { id: 10, description: "1 set of 5 & 1 set of 3" },
  { id: 11, description: "TOTAL", isTotal: true },
];

export function PhaseScoreSheet() {
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
  const confettiRef = useRef<ConfettiRef>(null);

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
        playerNames[playerIndex] || `Player ${playerIndex + 1}`;
      toast.info(
        `${playerName}: ${value} points for ${phases[phaseIndex].description}`
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

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <PhaseHeader />
            <div className="flex items-center mt-4 md:mt-0">
              <div className="flex items-center mr-4">
                <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="font-semibold">Current Leader:</span>
                {winningPlayerIndex !== -1 ? (
                  <span
                    className={`ml-2 font-bold ${
                      hasGameWinner ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {playerNames[winningPlayerIndex] ||
                      `Player ${winningPlayerIndex + 1}`}
                    {hasGameWinner && " (Winner!)"}
                  </span>
                ) : (
                  <span className="ml-2 text-gray-500">No leader yet</span>
                )}
              </div>
              <div className="flex space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={addPlayer}
                        disabled={playerCount >= 6}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add Player</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={removePlayer}
                        disabled={playerCount <= 2}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Remove Player</p>
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
                            Reset Game
                          </Button>
                        </AlertDialogTrigger>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Reset Game</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This will reset the entire game. All scores and progress
                        will be lost.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleResetGame}>
                        Reset Game
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Dialog
                  open={endGameDialogOpen}
                  onOpenChange={setEndGameDialogOpen}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                          <Button variant="default" onClick={handleEndGame}>
                            <Trophy className="h-4 w-4 mr-2" />
                            End Game
                          </Button>
                        </DialogTrigger>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>End Game & Show Winner</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <DialogContent className="sm:max-w-lg">
                    <Confetti
                      ref={confettiRef}
                      className="absolute left-0 top-0 z-0 size-full"
                    />
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center">
                        🎉 Game Over! 🎉
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
                                  🏆 Winner: {rankedPlayers[0].name}
                                </div>
                                <div className="text-sm text-gray-600">
                                  Score: {rankedPlayers[0].score} points
                                </div>
                                <div className="text-sm text-gray-600">
                                  Phase: {Math.min(rankedPlayers[0].phase, 10)}{" "}
                                  of 10
                                </div>
                              </div>
                            )}

                            {/* Podium - Top 3 */}
                            {topThree.length > 0 && (
                              <div className="space-y-3">
                                <h3 className="text-md font-semibold text-center">
                                  Final Rankings
                                </h3>
                                <div className="space-y-2">
                                  {topThree.map((player, index) => {
                                    const medals = ["🥇", "🥈", "🥉"];
                                    const positions = ["1st", "2nd", "3rd"];
                                    return (
                                      <div
                                        key={player.index}
                                        className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                                      >
                                        <div className="flex items-center space-x-2">
                                          <span className="text-lg">
                                            {medals[index]}
                                          </span>
                                          <span className="font-medium">
                                            {positions[index]}
                                          </span>
                                          <span>{player.name}</span>
                                        </div>
                                        <div className="text-right text-sm">
                                          <div>{player.score} pts</div>
                                          <div className="text-gray-500">
                                            Phase {Math.min(player.phase, 10)}
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
                                  Other Players
                                </h4>
                                <div className="space-y-1">
                                  {remaining.map((player, index) => (
                                    <div
                                      key={player.index}
                                      className="flex items-center justify-between p-2 bg-gray-100 rounded-md text-sm"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <span className="text-gray-400 w-6">
                                          {index + 4}th
                                        </span>
                                        <span>{player.name}</span>
                                      </div>
                                      <div className="text-right text-xs">
                                        <div>{player.score} pts</div>
                                        <div className="text-gray-500">
                                          Phase {Math.min(player.phase, 10)}
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
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="border-collapse border border-gray-200">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 bg-gray-100 font-bold text-center">
                    #
                  </TableHead>
                  <TableHead className="w-64 bg-gray-100 font-bold">
                    Phase
                  </TableHead>
                  {Array.from({ length: playerCount }).map((_, index) => (
                    <React.Fragment key={`header-${index}`}>
                      <TableHead className="w-10 bg-gray-100 text-center">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>✓</TooltipTrigger>
                            <TooltipContent>
                              <p>Phase Completed</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableHead>
                      <TableHead className="bg-gray-100 text-center">
                        Player {index + 1}
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
                      {phase.description}
                    </TableCell>

                    {Array.from({ length: playerCount }).map(
                      (_, playerIndex) => (
                        <React.Fragment key={`cell-${phase.id}-${playerIndex}`}>
                          <TableCell className="border border-gray-200 p-0 text-center">
                            {!phase.isTotal && (
                              <div className="flex items-center justify-center">
                                <Checkbox
                                  checked={
                                    currentPhases[playerIndex] > phase.id
                                  }
                                  onCheckedChange={(checked) =>
                                    updateCurrentPhase(
                                      playerIndex,
                                      phase.id,
                                      !!checked
                                    )
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
                                    value = isNaN(value)
                                      ? 0
                                      : Math.max(0, value);
                                    updateScore(phaseIndex, playerIndex, value);
                                  }}
                                  className="border-0 text-center h-10 focus:ring-0"
                                />
                              </div>
                            )}
                          </TableCell>
                        </React.Fragment>
                      )
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-2">Current Phases</h2>
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
                    title="Currently winning"
                  >
                    👑
                  </span>
                )}
                {playerNames[playerIndex] || `Player ${playerIndex + 1}`}
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-600">Current Phase:</span>
                <span className="ml-2 font-bold">
                  {currentPhases[playerIndex]}
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-600">Points:</span>
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
      </div>

      {/* Game Rules Section */}
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Phase 10 Rules
          </h2>

          <div className="space-y-8">
            {/* Basic Info */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Game Overview</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Ages:</strong> 7+
                  </p>
                  <p>
                    <strong>Players:</strong> 2-6
                  </p>
                  <p>
                    <strong>Object:</strong> Be the first player to complete all
                    10 phases
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Winner:</strong> First to complete Phase 10
                  </p>
                  <p>
                    <strong>Tie-breaker:</strong> Player with lowest score wins
                  </p>
                </div>
              </div>
            </div>

            {/* The Ten Phases */}
            <div>
              <h3 className="text-xl font-semibold mb-3">The Ten Phases</h3>
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
                      <span className="text-sm">{phase.description}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Definitions */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Definitions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Sets</h4>
                  <p className="text-sm mb-2">
                    A set is made of two or more cards with the same number.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg text-sm">
                    <strong>Example:</strong> Phase 1 needs two sets of three,
                    which could be three &quot;7s&quot; and three &quot;10s&quot;. Cards may be any
                    combination of colors.
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Runs</h4>
                  <p className="text-sm mb-2">
                    A run is made of four or more cards numbered in order.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg text-sm">
                    <strong>Example:</strong> Part of Phase 2 requires a run of
                    four, which could be 3,4,5,6. Cards may be any combination
                    of colors.
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">
                    All One Color
                  </h4>
                  <p className="text-sm mb-2">All cards are the same color.</p>
                  <div className="bg-purple-50 p-3 rounded-lg text-sm">
                    <strong>Example:</strong> Phase 8 requires seven cards of
                    one color. Cards don&apos;t need to be in numerical order.
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">
                    Wild Cards
                  </h4>
                  <p className="text-sm mb-2">
                    May be used in place of any number or color.
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg text-sm">
                    <strong>Note:</strong> You can use multiple Wild cards but
                    must use at least one natural card in each Phase.
                  </div>
                </div>
              </div>
            </div>

            {/* Gameplay */}
            <div>
              <h3 className="text-xl font-semibold mb-3">How to Play</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Setup</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Deal 10 cards to each player</li>
                    <li>Place remaining cards face down as draw pile</li>
                    <li>Turn top card face up to start discard pile</li>
                    <li>Player to dealer's left goes first</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Your Turn</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Draw one card (from draw pile or discard pile)</li>
                    <li>If you can make your Phase, lay it down face-up</li>
                    <li>
                      After laying down Phase, you may &quot;hit&quot; on other players&apos;
                      Phases
                    </li>
                    <li>Discard one card to end your turn</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Making a Phase</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>
                      You must have the complete Phase in hand before laying it
                      down
                    </li>
                    <li>Only one Phase can be made per hand</li>
                    <li>Phases must be completed in order (1-10)</li>
                    <li>
                      If you fail to complete a Phase, you must try the same
                      Phase again next hand
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scoring */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Scoring</h3>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm mb-3">
                  Cards left in your hand at the end of each round score points{" "}
                  <strong>against</strong> you:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">1-9</div>
                    <div className="text-red-600">5 points</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">10-12</div>
                    <div className="text-red-600">10 points</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">Skip</div>
                    <div className="text-red-600">15 points</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">Wild</div>
                    <div className="text-red-600">25 points</div>
                  </div>
                </div>
                <p className="text-sm mt-3 text-center">
                  <strong>Goal:</strong> Have the lowest score when someone
                  completes Phase 10!
                </p>
              </div>
            </div>

            {/* Special Cards */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Special Cards</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-2">
                    Skip Cards
                  </h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Cause another player to lose their next turn</li>
                    <li>Discard to use, then choose target player</li>
                    <li>Cannot be used in Phases</li>
                    <li>Cannot be picked up from discard pile</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Wild Cards
                  </h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Can represent any number or color</li>
                    <li>Can be used in any Phase</li>
                    <li>Once played, cannot be moved or replaced</li>
                    <li>Must use at least one natural card per Phase</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Strategy Tips</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <ul className="text-sm space-y-2 list-disc list-inside">
                    <li>
                      <strong>Plan ahead:</strong> Think about your current
                      Phase and what cards you need
                    </li>
                    <li>
                      <strong>Watch opponents:</strong> Pay attention to what
                      Phases they're working on
                    </li>
                    <li>
                      <strong>Use Skips wisely:</strong> Save them for strategic
                      moments
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ul className="text-sm space-y-2 list-disc list-inside">
                    <li>
                      <strong>Wild cards are valuable:</strong> Don&apos;t waste them
                      early
                    </li>
                    <li>
                      <strong>Discard strategically:</strong> Don&apos;t give
                      opponents cards they need
                    </li>
                    <li>
                      <strong>Go out quickly:</strong> After completing your
                      Phase, get rid of remaining cards fast
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
