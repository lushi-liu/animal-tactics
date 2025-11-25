import { Board } from "@/components/Board";
import { DeploymentPanel } from "@/components/DeploymentPanel";
import { TurnLogPanel } from "@/components/TurnLogPanel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center">
      <header className="w-full max-w-5xl py-6 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🐾 Animal Tactics</h1>
        <div className="text-sm opacity-80">Prototype v0.1</div>
      </header>

      <section className="w-full max-w-5xl px-4 pb-10 flex flex-col gap-6">
        <p className="opacity-90">
          Arrange your animal pieces, break through the enemy line, and reach
          the objective.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Battlefield */}
          <div className="flex-1">
            <h2 className="font-semibold mb-2">Battlefield</h2>
            <Board />
          </div>

          {/* Right-side panel */}
          <div className="w-full md:w-80 space-y-4">
            <DeploymentPanel />
            <TurnLogPanel />
          </div>
        </div>
      </section>
    </main>
  );
}
