// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center">
      <header className="w-full max-w-5xl py-6 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🐾 Animal Tactics</h1>
        <div className="text-sm opacity-80">Prototype</div>
      </header>

      <section className="w-full max-w-5xl px-4 pb-10 flex flex-col gap-6">
        <p className="opacity-90">
          Arrange your animal pieces, break through the enemy line, and reach
          the objective.
        </p>

        {/* Board area */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h2 className="font-semibold mb-2">Battlefield</h2>
            <div className="aspect-square bg-slate-800 rounded-lg border border-slate-700 grid place-items-center">
              <span className="text-slate-400 text-sm">Board goes here</span>
            </div>
          </div>

          {/* Right-side panel for actions / info */}
          <div className="w-full md:w-80 space-y-4">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-sm text-slate-300">
                Drag your animal pieces onto your side of the board.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Turn Log</h3>
              <p className="text-sm text-slate-400">
                Turns and events will appear here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
