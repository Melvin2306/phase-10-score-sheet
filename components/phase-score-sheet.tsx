"use client";

import { EndGameDialog } from "@/components/end-game-dialog";
import { GameHeader } from "@/components/game-header";
import { GameRules } from "@/components/game-rules";
import { PlayerStatsCard } from "@/components/player-stats-card";
import { ScoreTable } from "@/components/score-table";
import { Card, CardContent } from "@/components/ui/card";
import { useGameLogic } from "@/hooks/use-game-logic";
import { phases } from "@/lib/game-constants";

export function PhaseScoreSheet() {
  const {
    playerCount,
    playerNames,
    scores,
    currentPhases,
    endGameDialogOpen,
    winningPlayerIndex,
    hasGameWinner,
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
  } = useGameLogic();

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="mb-6">
            <GameHeader
              playerCount={playerCount}
              onAddPlayer={addPlayer}
              onRemovePlayer={removePlayer}
              onResetGame={handleResetGame}
              onEndGame={handleEndGame}
              winningPlayerIndex={winningPlayerIndex}
              playerNames={playerNames}
              hasGameWinner={hasGameWinner}
            />
          </div>

          <ScoreTable
            playerCount={playerCount}
            playerNames={playerNames}
            currentPhases={currentPhases}
            scores={scores}
            phases={phases}
            updatePlayerName={updatePlayerName}
            updateCurrentPhase={updateCurrentPhase}
            updateScore={updateScore}
          />
        </CardContent>
      </Card>

      <PlayerStatsCard
        playerCount={playerCount}
        playerNames={playerNames}
        currentPhases={currentPhases}
        calculateTotal={calculateTotal}
        winningPlayerIndex={winningPlayerIndex}
      />

      <GameRules phases={phases} />

      <EndGameDialog
        isOpen={endGameDialogOpen}
        onOpenChange={setEndGameDialogOpen}
        getRankedPlayers={getRankedPlayers}
        onEndGame={handleEndGame}
      >
        <div />
      </EndGameDialog>
    </div>
  );
}
