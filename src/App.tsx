
import { useEffect, useRef, useState } from "react";
import data from "./movies.json";

type Movie = {
  id: number;
  title: string;
  year: number;
  rating: number;
  genres: string[];
  overview: string;
  poster: string;
};

type SortKey = "title-asc" | "rating-desc" | "year-desc";

export default function App() {
  const [q, setQ] = useState("");
  const [min, setMin] = useState<0 | 6 | 7 | 8>(0);
  const [sort, setSort] = useState<SortKey>("title-asc");
  const [openId, setOpenId] = useState<number | null>(null);

  const movies: Movie[] = data as Movie[];

  return (
    <div style={{ padding: 16, minHeight: "100vh", minWidth: "100vw", background: "#0f172a", color: "#e5e7eb" }}>
      <header style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 12 }}>
        <h1 style={{ fontSize: 24, fontWeight: 600 }}>Mini Movie Explorer</h1>

        {/* Controls */}
        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "1fr 140px 200px",
          }}
        >
          <input
            aria-label="Search by title"
            placeholder="Search…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <select
            aria-label="Minimum rating"
            value={min}
            onChange={(e) => setMin(Number(e.target.value) as 0 | 6 | 7 | 8)}
          >
            <option value={0}>All ratings</option>
            <option value={6}>6+</option>
            <option value={7}>7+</option>
            <option value={8}>8+</option>
          </select>

          <select
            aria-label="Sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            <option value="title-asc">Title A–Z</option>
            <option value="rating-desc">Rating high→low</option>
            <option value="year-desc">Year new→old</option>
          </select>
        </div>
      </header>

      {/* Grid */}
      <main style={{ maxWidth: 1200, margin: "16px auto 0" }}>
        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          }}
        >
          {movies.map((m) => (
            <button
              key={m.id}
              onClick={() => setOpenId(m.id)}
              style={{
                textAlign: "left",
                background: "#111827",
                border: "1px solid #1f2937",
                padding: 12,
                borderRadius: 12,
              }}
            >
              <img
                src={m.poster}
                alt=""
                style={{ width: "100%", display: "block", borderRadius: 8 }}
              />
              <div style={{ marginTop: 8 }}>
                <div style={{ fontWeight: 600, fontSize: 18 }}>{m.title}</div>
                <div style={{ opacity: 0.85 }}>{m.year} • ⭐ {m.rating}</div>
              </div>
            </button>
          ))}
        </div>
      </main>

      {openId !== null && (
        <Details
          id={openId}
          onClose={() => setOpenId(null)}
        />
      )}
    </div>
  );
}

function Details({ id, onClose }: { id: number; onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus?.();
  }, []);

  return (
    <div ref={containerRef} />
  );
}
