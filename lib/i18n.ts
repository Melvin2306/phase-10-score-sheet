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
    italian: "Italian",
    french: "French",
    spanish: "Spanish",
    
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
    pointsFor: "points for",
    
    // Toast messages
    playerAddedSuccessfully: "Player added successfully!",
    playerRemovedSuccessfully: "Player removed successfully!",
    playerNameUpdatedSuccessfully: "Player name updated successfully!",
    gameResetSuccessfully: "Game reset successfully!",
    playerRevertedToPhase: "reverted to phase",
    playerCompletedPhase: "completed phase",
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
      1: "Zwei Drillinge",
      2: "Ein Drilling + eine Viererfolge",
      3: "Ein Vierling + eine Viererfolge", 
      4: "Eine Siebenerfolge",
      5: "Eine Achterfolge",
      6: "Eine Neunerfolge",
      7: "Zwei Vierlinge",
      8: "Sieben Karten einer Farbe",
      9: "Ein Fünfling + ein Zwilling",
      10: "Ein Fünfling + ein Drilling"
    },
    scoring: "Punktewertung",
    scoringDescription: "Karten, die am Ende jeder Runde in Ihrer Hand verbleiben, zählen Minuspunkte:",
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
      "Karten 1-9: je 5 Minuspunkte",
      "Karten 10-12: je 10 Minuspunkte",
      "Aussetzen-Karten: je 15 Minuspunkte", 
      "Joker-Karten: je 20 Minuspunkte"
    ],
    
    // Language
    language: "Sprache",
    english: "Englisch",
    german: "Deutsch",
    italian: "Italienisch",
    french: "Französisch",
    spanish: "Spanisch",
    
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
    pointsFor: "Punkte für",
    
    // Toast messages
    playerAddedSuccessfully: "Spieler erfolgreich hinzugefügt!",
    playerRemovedSuccessfully: "Spieler erfolgreich entfernt!",
    playerNameUpdatedSuccessfully: "Spielername erfolgreich aktualisiert!",
    gameResetSuccessfully: "Spiel erfolgreich zurückgesetzt!",
    playerRevertedToPhase: "zu Phase zurückgefallen",
    playerCompletedPhase: "hat Phase abgeschlossen",
  },
  
  it: {
    // Header
    phase10: "FASE 10",
    scoreSheet: "Tabella Punteggi",
    addPlayer: "Aggiungi Giocatore",
    removePlayer: "Rimuovi Giocatore",
    resetGame: "Resetta Partita",
    endGame: "Termina Partita",
    endGameTooltip: "Termina Partita e Mostra Vincitore",
    currentLeader: "Leader Attuale",
    noLeader: "Ancora nessun leader",
    confirmReset: "Sei assolutamente sicuro?",
    resetGameDescription: "Questo resetterà l'intera partita. Tutti i punteggi e i progressi andranno persi.",
    cancel: "Annulla",
    
    // Game
    playerName: "NOME GIOCATORE",
    phase: "FASE",
    total: "TOTALE",
    currentPhases: "Fasi Attuali",
    
    // Dialog
    gameOver: "🎉 Partita Terminata! 🎉",
    winner: "🏆 Vincitore",
    score: "Punteggio",
    points: "punti",
    phaseOf: "di",
    finalRankings: "Classifica Finale",
    otherPlayers: "Altri Giocatori",
    
    // Positions
    first: "1°",
    second: "2°",
    third: "3°",
    fourth: "4°",
    fifth: "5°",
    sixth: "6°",
    
    // Game Rules
    gameRules: "Regole del Gioco",
    phases: "Fasi",
    phaseList: {
      1: "Due tris",
      2: "Un tris + una sequenza di quattro",
      3: "Un poker + una sequenza di quattro",
      4: "Una sequenza di sette",
      5: "Una sequenza di otto",
      6: "Una sequenza di nove",
      7: "Due poker",
      8: "Sette carte di un colore",
      9: "Un poker + una coppia",
      10: "Un poker + un tris"
    },
    scoring: "Punteggio",
    scoringDescription: "Le carte rimaste in mano alla fine di ogni turno ti danno punti penalty:",
    scoringGoal: "Avere il punteggio più basso quando qualcuno completa la Fase 10!",
    goal: "Obiettivo",
    cards1to9: "1-9",
    cards10to12: "10-12",
    skipCard: "Salta Turno",
    wildCard: "Jolly",
    points5: "5 punti",
    points10: "10 punti",
    points15: "15 punti",
    points25: "25 punti",
    
    // Scoring rules list
    scoringList: [
      "Carte 1-9: 5 punti ciascuna",
      "Carte 10-12: 10 punti ciascuna",
      "Carte Salta Turno: 15 punti ciascuna",
      "Carte Jolly: 25 punti ciascuna"
    ],
    
    // Language
    language: "Lingua",
    english: "Inglese",
    german: "Tedesco",
    italian: "Italiano",
    french: "Francese",
    spanish: "Spagnolo",
    
    // Game Rules - Definitions
    definitions: "Definizioni",
    sets: "Tris/Poker",
    runs: "Sequenze",
    allOneColor: "Tutto Un Colore",
    wildCards: "Carte Jolly",
    setsDescription: "Un tris è formato da due o più carte con lo stesso numero.",
    runsDescription: "Una sequenza è formata da quattro o più carte numerate in ordine.",
    allOneColorDescription: "Tutte le carte hanno lo stesso colore.",
    wildCardsDescription: "Possono essere usate al posto di qualsiasi numero o colore.",
    setsExample: 'La Fase 1 richiede due tris, che potrebbero essere tre \"7\" e tre \"10\". Le carte possono essere di qualsiasi combinazione di colori.',
    runsExample: "Parte della Fase 2 richiede una sequenza di quattro, che potrebbe essere 3,4,5,6. Le carte possono essere di qualsiasi combinazione di colori.",
    allOneColorExample: "La Fase 8 richiede sette carte di un colore. Le carte non devono essere in ordine numerico.",
    wildCardsExample: "Puoi usare più carte Jolly ma devi usare almeno una carta naturale in ogni Fase.",
    
    // Game Rules - Gameplay
    howToPlay: "Come Giocare",
    setup: "Preparazione",
    yourTurn: "Il Tuo Turno",
    makingAPhase: "Completare una Fase",
    setupRules: [
      "Distribuisci 10 carte a ogni giocatore",
      "Metti le carte rimanenti coperte come mazzo di pesca",
      "Gira la prima carta scoperta per iniziare il mazzo degli scarti",
      "Il giocatore alla sinistra del mazziere inizia"
    ],
    turnRules: [
      "Pesca una carta (dal mazzo di pesca o dal mazzo degli scarti)",
      "Se puoi completare la tua Fase, mettila scoperta",
      "Dopo aver messo la Fase, puoi \"attaccare\" alle Fasi di altri giocatori",
      "Scarta una carta per finire il tuo turno"
    ],
    phaseRules: [
      "Devi avere la Fase completa in mano prima di metterla",
      "Solo una Fase può essere completata per mano",
      "Le Fasi devono essere completate in ordine (1-10)",
      "Se non riesci a completare una Fase, devi riprovare la stessa Fase nella mano successiva"
    ],
    
    // Game Rules - Special Cards
    specialCards: "Carte Speciali",
    skipCards: "Carte Salta Turno",
    skipCardRules: [
      "Fanno perdere il turno successivo a un altro giocatore",
      "Scarta per usare, poi scegli il giocatore bersaglio",
      "Non possono essere usate nelle Fasi",
      "Non possono essere prese dal mazzo degli scarti"
    ],
    wildCardRules: [
      "Possono rappresentare qualsiasi numero o colore",
      "Possono essere usate in qualsiasi Fase",
      "Una volta giocate, non possono essere spostate o sostituite",
      "Devi usare almeno una carta naturale per Fase"
    ],
    
    // Game Rules - Strategy
    strategyTips: "Consigli Strategici",
    strategyTipsContent: [
      "Pensa alla tua Fase attuale e alle carte di cui hai bisogno",
      "Fai attenzione alle Fasi su cui stanno lavorando gli altri giocatori",
      "Risparmia le carte Jolly per momenti strategici",
      "Non sprecare le carte Salta Turno all'inizio del gioco"
    ],
    example: "Esempio",
    note: "Nota",
    
    // Additional missing translations
    phaseCompleted: "Fase Completata",
    player: "Giocatore",
    currentlyWinning: "Attualmente in vantaggio",
    pointsFor: "punti per",
    
    // Toast messages
    playerAddedSuccessfully: "Giocatore aggiunto con successo!",
    playerRemovedSuccessfully: "Giocatore rimosso con successo!",
    playerNameUpdatedSuccessfully: "Nome giocatore aggiornato con successo!",
    gameResetSuccessfully: "Gioco reimpostato con successo!",
    playerRevertedToPhase: "è tornato alla fase",
    playerCompletedPhase: "ha completato la fase",
  },
  
  fr: {
    // Header
    phase10: "PHASE 10",
    scoreSheet: "Feuille de Score",
    addPlayer: "Ajouter Joueur",
    removePlayer: "Retirer Joueur",
    resetGame: "Réinitialiser Partie",
    endGame: "Terminer Partie",
    endGameTooltip: "Terminer Partie et Afficher Gagnant",
    currentLeader: "Leader Actuel",
    noLeader: "Pas encore de leader",
    confirmReset: "Êtes-vous absolument sûr ?",
    resetGameDescription: "Ceci réinitialisera toute la partie. Tous les scores et la progression seront perdus.",
    cancel: "Annuler",
    
    // Game
    playerName: "NOM DU JOUEUR",
    phase: "PHASE",
    total: "TOTAL",
    currentPhases: "Phases Actuelles",
    
    // Dialog
    gameOver: "🎉 Partie Terminée ! 🎉",
    winner: "🏆 Gagnant",
    score: "Score",
    points: "points",
    phaseOf: "de",
    finalRankings: "Classement Final",
    otherPlayers: "Autres Joueurs",
    
    // Positions
    first: "1er",
    second: "2ème",
    third: "3ème",
    fourth: "4ème",
    fifth: "5ème",
    sixth: "6ème",
    
    // Game Rules
    gameRules: "Règles du Jeu",
    phases: "Phases",
    phaseList: {
      1: "2 ensembles de 3",
      2: "1 ensemble de 3 + 1 suite de 4",
      3: "1 ensemble de 4 + 1 suite de 4",
      4: "1 suite de 7",
      5: "1 suite de 8",
      6: "1 suite de 9",
      7: "2 ensembles de 4",
      8: "7 cartes d'une couleur",
      9: "1 ensemble de 5 + 1 ensemble de 2",
      10: "1 ensemble de 5 + 1 ensemble de 3"
    },
    scoring: "Notation",
    scoringDescription: "Les cartes restantes dans votre main à la fin de chaque tour vous donnent des points :",
    scoringGoal: "Ayez le score le plus bas quand quelqu'un complète la Phase 10 !",
    goal: "Objectif",
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
      "Cartes 1-9 : 5 points chacune",
      "Cartes 10-12 : 10 points chacune",
      "Cartes Skip : 15 points chacune",
      "Cartes Wild : 25 points chacune"
    ],
    
    // Language
    language: "Langue",
    english: "Anglais",
    german: "Allemand",
    italian: "Italien",
    french: "Français",
    spanish: "Espagnol",
    
    // Game Rules - Definitions
    definitions: "Définitions",
    sets: "Ensembles",
    runs: "Suites",
    allOneColor: "Toutes d'une Couleur",
    wildCards: "Cartes Wild",
    setsDescription: "Un ensemble est fait de deux ou plus cartes avec le même numéro.",
    runsDescription: "Une suite est faite de quatre ou plus cartes numérotées dans l'ordre.",
    allOneColorDescription: "Toutes les cartes sont de la même couleur.",
    wildCardsDescription: "Peuvent être utilisées à la place de n'importe quel numéro ou couleur.",
    setsExample: 'La Phase 1 nécessite deux ensembles de trois, qui pourraient être trois \"7\" et trois \"10\". Les cartes peuvent être de n\'importe quelle combinaison de couleurs.',
    runsExample: "Une partie de la Phase 2 nécessite une suite de quatre, qui pourrait être 3,4,5,6. Les cartes peuvent être de n'importe quelle combinaison de couleurs.",
    allOneColorExample: "La Phase 8 nécessite sept cartes d'une couleur. Les cartes n'ont pas besoin d'être dans l'ordre numérique.",
    wildCardsExample: "Vous pouvez utiliser plusieurs cartes Wild mais devez utiliser au moins une carte naturelle dans chaque Phase.",
    
    // Game Rules - Gameplay
    howToPlay: "Comment Jouer",
    setup: "Mise en Place",
    yourTurn: "Votre Tour",
    makingAPhase: "Faire une Phase",
    setupRules: [
      "Distribuez 10 cartes à chaque joueur",
      "Placez les cartes restantes face cachée comme pile de pioche",
      "Retournez la carte du dessus face visible pour commencer la pile de défausse",
      "Le joueur à gauche du donneur commence"
    ],
    turnRules: [
      "Tirez une carte (de la pile de pioche ou de défausse)",
      "Si vous pouvez faire votre Phase, posez-la face visible",
      "Après avoir posé la Phase, vous pouvez \"ajouter\" aux Phases d'autres joueurs",
      "Défaussez une carte pour terminer votre tour"
    ],
    phaseRules: [
      "Vous devez avoir la Phase complète en main avant de la poser",
      "Une seule Phase peut être faite par main",
      "Les Phases doivent être complétées dans l'ordre (1-10)",
      "Si vous échouez à compléter une Phase, vous devez essayer la même Phase à la main suivante"
    ],
    
    // Game Rules - Special Cards
    specialCards: "Cartes Spéciales",
    skipCards: "Cartes Skip",
    skipCardRules: [
      "Font perdre leur prochain tour à un autre joueur",
      "Défaussez pour utiliser, puis choisissez le joueur cible",
      "Ne peuvent pas être utilisées dans les Phases",
      "Ne peuvent pas être prises de la pile de défausse"
    ],
    wildCardRules: [
      "Peuvent représenter n'importe quel numéro ou couleur",
      "Peuvent être utilisées dans n'importe quelle Phase",
      "Une fois jouées, ne peuvent pas être déplacées ou remplacées",
      "Devez utiliser au moins une carte naturelle par Phase"
    ],
    
    // Game Rules - Strategy
    strategyTips: "Conseils Stratégiques",
    strategyTipsContent: [
      "Pensez à votre Phase actuelle et aux cartes dont vous avez besoin",
      "Faites attention aux Phases sur lesquelles travaillent les autres joueurs",
      "Gardez les cartes Wild pour les moments stratégiques",
      "Ne gaspillez pas les cartes Skip tôt dans le jeu"
    ],
    example: "Exemple",
    note: "Note",
    
    // Additional missing translations
    phaseCompleted: "Phase Complétée",
    player: "Joueur",
    currentlyWinning: "Actuellement gagnant",
    pointsFor: "points pour",
    
    // Toast messages
    playerAddedSuccessfully: "Joueur ajouté avec succès !",
    playerRemovedSuccessfully: "Joueur supprimé avec succès !",
    playerNameUpdatedSuccessfully: "Nom du joueur mis à jour avec succès !",
    gameResetSuccessfully: "Jeu remis à zéro avec succès !",
    playerRevertedToPhase: "revenu à la phase",
    playerCompletedPhase: "a terminé la phase",
  },
  
  es: {
    // Header
    phase10: "PHASE 10",
    scoreSheet: "Hoja de Puntuación",
    addPlayer: "Agregar Jugador",
    removePlayer: "Quitar Jugador",
    resetGame: "Reiniciar Partida",
    endGame: "Terminar Partida",
    endGameTooltip: "Terminar Partida y Mostrar Ganador",
    currentLeader: "Líder Actual",
    noLeader: "Aún no hay líder",
    confirmReset: "¿Estás absolutamente seguro?",
    resetGameDescription: "Esto reiniciará toda la partida. Se perderán todos los puntajes y el progreso.",
    cancel: "Cancelar",
    
    // Game
    playerName: "NOMBRE DEL JUGADOR",
    phase: "FASE",
    total: "TOTAL",
    currentPhases: "Fases Actuales",
    
    // Dialog
    gameOver: "🎉 ¡Partida Terminada! 🎉",
    winner: "🏆 Ganador",
    score: "Puntaje",
    points: "puntos",
    phaseOf: "de",
    finalRankings: "Clasificación Final",
    otherPlayers: "Otros Jugadores",
    
    // Positions
    first: "1°",
    second: "2°",
    third: "3°",
    fourth: "4°",
    fifth: "5°",
    sixth: "6°",
    
    // Game Rules
    gameRules: "Reglas del Juego",
    phases: "Fases",
    phaseList: {
      1: "2 conjuntos de 3",
      2: "1 conjunto de 3 + 1 corrida de 4",
      3: "1 conjunto de 4 + 1 corrida de 4",
      4: "1 corrida de 7",
      5: "1 corrida de 8",
      6: "1 corrida de 9",
      7: "2 conjuntos de 4",
      8: "7 cartas de 1 color",
      9: "1 conjunto de 5 + 1 conjunto de 2",
      10: "1 conjunto de 5 + 1 conjunto de 3"
    },
    scoring: "Puntuación",
    scoringDescription: "Las cartas que quedan en tu mano al final de cada ronda suman puntos en tu contra:",
    scoringGoal: "¡Ten el puntaje más bajo cuando alguien complete la Fase 10!",
    goal: "Objetivo",
    cards1to9: "1-9",
    cards10to12: "10-12",
    skipCard: "Salta",
    wildCard: "Comodín",
    points5: "5 puntos",
    points10: "10 puntos",
    points15: "15 puntos",
    points25: "25 puntos",
    
    // Scoring rules list
    scoringList: [
      "Cartas 1-9: 5 puntos cada una",
      "Cartas 10-12: 10 puntos cada una",
      "Cartas Salta: 15 puntos cada una",
      "Cartas Comodín: 25 puntos cada una"
    ],
    
    // Language
    language: "Idioma",
    english: "Inglés",
    german: "Alemán",
    italian: "Italiano",
    french: "Francés",
    spanish: "Español",
    
    // Game Rules - Definitions
    definitions: "Definiciones",
    sets: "Conjuntos",
    runs: "Corridas",
    allOneColor: "Todas de un Color",
    wildCards: "Cartas Comodín",
    setsDescription: "Un conjunto está compuesto de dos o más cartas del mismo número.",
    runsDescription: "Una corrida está compuesta de cuatro o más cartas numeradas en orden.",
    allOneColorDescription: "Todas las cartas son del mismo color.",
    wildCardsDescription: "Se pueden usar en lugar de cualquier número o color.",
    setsExample: 'La Fase 1 necesita dos conjuntos de tres, que podrían ser tres \"7\" y tres \"10\". Las cartas pueden ser de cualquier combinación de colores.',
    runsExample: "Parte de la Fase 2 requiere una corrida de cuatro, que podría ser 3,4,5,6. Las cartas pueden ser de cualquier combinación de colores.",
    allOneColorExample: "La Fase 8 requiere siete cartas de un color. Las cartas no necesitan estar en orden numérico.",
    wildCardsExample: "Puedes usar múltiples cartas Comodín pero debes usar al menos una carta natural en cada Fase.",
    
    // Game Rules - Gameplay
    howToPlay: "Cómo Jugar",
    setup: "Preparación",
    yourTurn: "Tu Turno",
    makingAPhase: "Hacer una Fase",
    setupRules: [
      "Reparte 10 cartas a cada jugador",
      "Coloca las cartas restantes cara abajo como pila para robar",
      "Voltea la carta de arriba cara arriba para empezar la pila para descartar",
      "El jugador a la izquierda del repartidor va primero"
    ],
    turnRules: [
      "Roba una carta (de la pila para robar o para descartar)",
      "Si puedes hacer tu Fase, ponla cara arriba",
      "Después de poner la Fase, puedes \"salir\" en las Fases de otros jugadores",
      "Descarta una carta para terminar tu turno"
    ],
    phaseRules: [
      "Debes tener la Fase completa en tu mano antes de ponerla",
      "Solo se puede hacer una Fase por mano",
      "Las Fases deben completarse en orden (1-10)",
      "Si no completas una Fase, debes intentar la misma Fase en la siguiente mano"
    ],
    
    // Game Rules - Special Cards
    specialCards: "Cartas Especiales",
    skipCards: "Cartas Salta",
    skipCardRules: [
      "Hacen que otro jugador pierda su siguiente turno",
      "Descarta para usar, luego elige el jugador objetivo",
      "No se pueden usar en las Fases",
      "No se pueden robar de la pila para descartar"
    ],
    wildCardRules: [
      "Pueden representar cualquier número o color",
      "Se pueden usar en cualquier Fase",
      "Una vez jugadas, no se pueden mover o reemplazar",
      "Debes usar al menos una carta natural por Fase"
    ],
    
    // Game Rules - Strategy
    strategyTips: "Consejos Estratégicos",
    strategyTipsContent: [
      "Piensa en tu Fase actual y qué cartas necesitas",
      "Presta atención a las Fases en las que están trabajando otros jugadores",
      "Guarda las cartas Comodín para momentos estratégicos",
      "No desperdicies las cartas Salta temprano en el juego"
    ],
    example: "Ejemplo",
    note: "Nota",
    
    // Additional missing translations
    phaseCompleted: "Fase Completada",
    player: "Jugador",
    currentlyWinning: "Actualmente ganando",
    pointsFor: "puntos por",
    
    // Toast messages
    playerAddedSuccessfully: "¡Jugador agregado con éxito!",
    playerRemovedSuccessfully: "¡Jugador eliminado con éxito!",
    playerNameUpdatedSuccessfully: "¡Nombre del jugador actualizado con éxito!",
    gameResetSuccessfully: "¡Juego reiniciado con éxito!",
    playerRevertedToPhase: "retrocedió a la fase",
    playerCompletedPhase: "completó la fase",
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export function getOrdinalPosition(position: number, language: Language): string {
  const ordinals = {
    en: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"],
    de: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10."],
    it: ["1°", "2°", "3°", "4°", "5°", "6°", "7°", "8°", "9°", "10°"],
    fr: ["1er", "2ème", "3ème", "4ème", "5ème", "6ème", "7ème", "8ème", "9ème", "10ème"],
    es: ["1°", "2°", "3°", "4°", "5°", "6°", "7°", "8°", "9°", "10°"]
  };
  
  if (position >= 1 && position <= 10) {
    return ordinals[language][position - 1];
  }
  
  // Fallback for positions beyond 10
  return language === "en" ? `${position}th` : language === "de" ? `${position}.` : language === "it" ? `${position}°` : language === "fr" ? `${position}ème` : `${position}°`;
}