import { PhaseScoreSheet } from "@/components/phase-score-sheet";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <PhaseScoreSheet />
      </div>
    </main>
  );
}
