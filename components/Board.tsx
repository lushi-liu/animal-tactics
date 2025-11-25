// src/components/Board.tsx
"use client";

const BOARD_SIZE = 8; // 8x8 board (like chess) for now

export function Board() {
  const rows = Array.from({ length: BOARD_SIZE }, (_, y) => y);
  const cols = Array.from({ length: BOARD_SIZE }, (_, x) => x);

  return (
    <div className="aspect-square bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
      <div
        className="w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
        }}
      >
        {rows.map((y) =>
          cols.map((x) => {
            const isDark = (x + y) % 2 === 1;
            return (
              <div
                key={`${x}-${y}`}
                className={`flex items-center justify-center text-xl select-none ${
                  isDark ? "bg-slate-700" : "bg-slate-600"
                }`}
              >
                {/* Piece will go here later, e.g. 🐯 */}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
