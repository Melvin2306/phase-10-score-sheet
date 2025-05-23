export const translations = {
  en: {
    // Header
    phase10: "PHASE 10",
    scoreSheet: "Score Sheet",
    addPlayer: "Add Player",
    removePlayer: "Remove Player",
    resetGame: "Reset Game",
    endGame: "End Game",
    endGameTooltip: "End Game & Show Winner",
    currentLeader: "Current Leader",
    noLeader: "No leader yet", 
    confirmReset: "Are you absolutely sure?",
    resetGameDescription: "This will reset the entire game. All scores and progress will be lost.",
    cancel: "Cancel",
    
    // Game
    playerName: "PLAYER'S NAME",
    phase: "PHASE",
    total: "TOTAL",
    currentPhases: "Current Phases",
    
    // Dialog
    gameOver: "🎉 Game Over! 🎉",
    winner: "🏆 Winner",
    score: "Score",
    points: "points",
    phaseOf: "of",
    finalRankings: "Final Rankings",
    otherPlayers: "Other Players",
    
    // Positions
    first: "1st",
    second: "2nd", 
    third: "3rd",
    fourth: "4th",
    fifth: "5th",
    sixth: "6th",
    
    // Game Rules
    gameRules: "Game Rules",
    phases: "Phases",
    phaseList: {
      1: "2 sets of 3",
      2: "1 set of 3 + 1 run of 4", 
      3: "1 set of 4 + 1 run of 4",
      4: "1 run of 7",
      5: "1 run of 8",
      6: "1 run of 9",
      7: "2 sets of 4",
      8: "7 cards of one color",
      9: "1 set of 5 + 1 set of 2",
      10: "1 set of 5 + 1 set of 3"
    },
    scoring: "Scoring",
    scoringDescription: "Cards left in your hand at the end of each round score points against you:",
    scoringGoal: "Have the lowest score when someone completes Phase 10!",
    goal: "Goal",
    cards1to9: "1-9",
    cards10to12: "10-12",
    skipCard: "Skip",
    wildCard: "Wild",
    points5: "5 points",
    points10: "10 points", 
    points15: "15 points",
    points25: "25 points",
    
    // Scoring rules list
    scoringList: [
      "Cards 1-9: 5 points each",
      "Cards 10-12: 10 points each", 
      "Skip cards: 15 points each",
      "Wild cards: 25 points each"
    ],
    
    // Language
    language: "Language",
    english: "English",
    german: "German",
    
    // Game Rules - Definitions
    definitions: "Definitions",
    sets: "Sets",
    runs: "Runs",
    allOneColor: "All One Color",
    wildCards: "Wild Cards",
    setsDescription: "A set is made of two or more cards with the same number.",
    runsDescription: "A run is made of four or more cards numbered in order.",
    allOneColorDescription: "All cards are the same color.",
    wildCardsDescription: "May be used in place of any number or color.",
    setsExample: 'Phase 1 needs two sets of three, which could be three "7s" and three "10s". Cards may be any combination of colors.',
    runsExample: "Part of Phase 2 requires a run of four, which could be 3,4,5,6. Cards may be any combination of colors.",
    allOneColorExample: "Phase 8 requires seven cards of one color. Cards don't need to be in numerical order.",
    wildCardsExample: "You can use multiple Wild cards but must use at least one natural card in each Phase.",
    
    // Game Rules - Gameplay
    howToPlay: "How to Play",
    setup: "Setup",
    yourTurn: "Your Turn",
    makingAPhase: "Making a Phase",
    setupRules: [
      "Deal 10 cards to each player",
      "Place remaining cards face down as draw pile",
      "Turn top card face up to start discard pile",
      "Player to dealer's left goes first"
    ],
    turnRules: [
      "Draw one card (from draw pile or discard pile)",
      "If you can make your Phase, lay it down face-up",
      "After laying down Phase, you may \"hit\" on other players' Phases",
      "Discard one card to end your turn"
    ],
    phaseRules: [
      "You must have the complete Phase in hand before laying it down",
      "Only one Phase can be made per hand",
      "Phases must be completed in order (1-10)",
      "If you fail to complete a Phase, you must try the same Phase again next hand"
    ],
    
    // Game Rules - Special Cards
    specialCards: "Special Cards",
    skipCards: "Skip Cards",
    skipCardRules: [
      "Cause another player to lose their next turn",
      "Discard to use, then choose target player",
      "Cannot be used in Phases",
      "Cannot be picked up from discard pile"
    ],
    wildCardRules: [
      "Can represent any number or color",
      "Can be used in any Phase",
      "Once played, cannot be moved or replaced",
      "Must use at least one natural card per Phase"
    ],
    
    // Game Rules - Strategy
    strategyTips: "Strategy Tips",
    strategyTipsContent: [
      "Think about your current Phase and what cards you need",
      "Pay attention to what Phases other players are working on",
      "Save Wild cards for strategic moments",
      "Don't waste Skip cards early in the game"
    ],
    example: "Example",
    note: "Note",
    
    // Additional missing translations
    phaseCompleted: "Phase Completed",
    player: "Player",
    currentlyWinning: "Currently winning",
    pointsFor: "points for"
  },
  
  de: {
    // Header
    phase10: "PHASE 10",
    scoreSheet: "Punktetabelle",
    addPlayer: "Spieler hinzufügen",
    removePlayer: "Spieler entfernen",
    resetGame: "Spiel zurücksetzen",
    endGame: "Spiel beenden",
    endGameTooltip: "Spiel beenden & Gewinner anzeigen",
    currentLeader: "Aktueller Führender",
    noLeader: "Noch kein Führender",
    confirmReset: "Sind Sie absolut sicher?",
    resetGameDescription: "Dies wird das gesamte Spiel zurücksetzen. Alle Punkte und der Fortschritt gehen verloren.",
    cancel: "Abbrechen",
    
    // Game
    playerName: "SPIELERNAME",
    phase: "PHASE",
    total: "GESAMT",
    currentPhases: "Aktuelle Phasen",
    
    // Dialog
    gameOver: "🎉 Spiel beendet! 🎉",
    winner: "🏆 Gewinner",
    score: "Punkte",
    points: "Punkte",
    phaseOf: "von",
    finalRankings: "Endplatzierung",
    otherPlayers: "Weitere Spieler",
    
    // Positions
    first: "1.",
    second: "2.",
    third: "3.",
    fourth: "4.",
    fifth: "5.",
    sixth: "6.",
    
    // Game Rules
    gameRules: "Spielregeln",
    phases: "Phasen",
    phaseList: {
      1: "2 Drillinge",
      2: "1 Drilling + 1 Viererfolge",
      3: "1 Vierling + 1 Viererfolge", 
      4: "1 Siebenerfolge",
      5: "1 Achterfolge",
      6: "1 Neunerfolge",
      7: "2 Vierlinge",
      8: "7 Karten einer Farbe",
      9: "1 Fünfling + 1 Zwilling",
      10: "1 Fünfling + 1 Drilling"
    },
    scoring: "Punktewertung",
    scoringDescription: "Karten, die am Ende jeder Runde in Ihrer Hand verbleiben, zählen Punkte gegen Sie:",
    scoringGoal: "Haben Sie die niedrigste Punktzahl, wenn jemand Phase 10 abschließt!",
    goal: "Ziel",
    cards1to9: "1-9",
    cards10to12: "10-12",
    skipCard: "Aussetzen",
    wildCard: "Joker",
    points5: "5 Punkte",
    points10: "10 Punkte",
    points15: "15 Punkte", 
    points25: "25 Punkte",
    
    // Scoring rules list
    scoringList: [
      "Karten 1-9: 5 Punkte pro Karte",
      "Karten 10-12: 10 Punkte pro Karte",
      "Aussetzen-Karten: 15 Punkte pro Karte", 
      "Joker-Karten: 25 Punkte pro Karte"
    ],
    
    // Language
    language: "Sprache",
    english: "Englisch",
    german: "Deutsch",
    
    // Game Rules - Definitions
    definitions: "Definitionen",
    sets: "Sätze",
    runs: "Folgen",
    allOneColor: "Alle eine Farbe",
    wildCards: "Joker-Karten",
    setsDescription: "Ein Satz besteht aus zwei oder mehr Karten mit derselben Nummer.",
    runsDescription: "Eine Folge besteht aus vier oder mehr Karten in numerischer Reihenfolge.",
    allOneColorDescription: "Alle Karten haben dieselbe Farbe.",
    wildCardsDescription: "Können anstelle jeder Nummer oder Farbe verwendet werden.",
    setsExample: 'Phase 1 benötigt zwei Drillinge, das könnten drei \"7er\" und drei \"10er\" sein. Karten können jede Farbkombination haben.',
    runsExample: "Teil von Phase 2 erfordert eine Viererfolge, das könnte 3,4,5,6 sein. Karten können jede Farbkombination haben.",
    allOneColorExample: "Phase 8 erfordert sieben Karten einer Farbe. Karten müssen nicht in numerischer Reihenfolge sein.",
    wildCardsExample: "Sie können mehrere Joker-Karten verwenden, müssen aber mindestens eine natürliche Karte in jeder Phase verwenden.",
    
    // Game Rules - Gameplay
    howToPlay: "Spielanleitung",
    setup: "Vorbereitung",
    yourTurn: "Ihr Zug",
    makingAPhase: "Eine Phase erstellen",
    setupRules: [
      "10 Karten an jeden Spieler austeilen",
      "Verbleibende Karten verdeckt als Nachziehstapel legen",
      "Oberste Karte aufdecken für Ablagestapel",
      "Spieler links vom Geber beginnt"
    ],
    turnRules: [
      "Eine Karte ziehen (vom Nachzieh- oder Ablagestapel)",
      "Wenn Sie Ihre Phase erstellen können, legen Sie sie offen aus",
      "Nach dem Auslegen der Phase können Sie an andere Spielerphasen \"anlegen\"",
      "Eine Karte ablegen, um Ihren Zug zu beenden"
    ],
    phaseRules: [
      "Sie müssen die vollständige Phase auf der Hand haben, bevor Sie sie auslegen",
      "Nur eine Phase kann pro Runde erstellt werden",
      "Phasen müssen in der Reihenfolge (1-10) abgeschlossen werden",
      "Wenn Sie eine Phase nicht schaffen, müssen Sie dieselbe Phase in der nächsten Runde erneut versuchen"
    ],
    
    // Game Rules - Special Cards
    specialCards: "Sonderkarten",
    skipCards: "Aussetzen-Karten",
    skipCardRules: [
      "Lassen einen anderen Spieler seinen nächsten Zug verlieren",
      "Ablegen um zu verwenden, dann Zielspieler wählen",
      "Können nicht in Phasen verwendet werden",
      "Können nicht vom Ablagestapel aufgenommen werden"
    ],
    wildCardRules: [
      "Können jede Nummer oder Farbe darstellen",
      "Können in jeder Phase verwendet werden",
      "Einmal gespielt, können sie nicht bewegt oder ersetzt werden",
      "Mindestens eine natürliche Karte pro Phase muss verwendet werden"
    ],
    
    // Game Rules - Strategy
    strategyTips: "Strategietipps",
    strategyTipsContent: [
      "Denken Sie an Ihre aktuelle Phase und welche Karten Sie benötigen",
      "Achten Sie darauf, an welchen Phasen andere Spieler arbeiten",
      "Sparen Sie Joker-Karten für strategische Momente",
      "Verschwenden Sie Aussetzen-Karten nicht früh im Spiel"
    ],
    example: "Beispiel",
    note: "Hinweis",
    
    // Additional missing translations
    phaseCompleted: "Phase Abgeschlossen",
    player: "Spieler",
    currentlyWinning: "Führt derzeit",
    pointsFor: "Punkte für"
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export function getOrdinalPosition(position: number, language: Language): string {
  const ordinals = {
    en: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"],
    de: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10."]
  };
  
  if (position >= 1 && position <= 10) {
    return ordinals[language][position - 1];
  }
  
  // Fallback for positions beyond 10
  return language === "en" ? `${position}th` : `${position}.`;
}