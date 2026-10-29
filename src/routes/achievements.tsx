import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageTitle } from "@/components/site-chrome";
import a1 from "@/assets/image-2.png.asset.json";
import a2 from "@/assets/image-3.png.asset.json";
import a3 from "@/assets/image-4.png.asset.json";
import a4 from "@/assets/image-5.png.asset.json";

const photos = [a1, a2, a3, a4];

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Dhaka Commerce College" },
      { name: "description", content: "Honours and achievements of Dhaka Commerce College." },
      { property: "og:title", content: "Achievements — Dhaka Commerce College" },
      { property: "og:description", content: "Honours and achievements of Dhaka Commerce College." },
    ],
  }),
  component: Achievements,
});

function Achievements() {
  const [i, setI] = useState(0);
  const n = photos.length;
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 4500);
    return () => clearInterval(t);
  }, [i, n]);

  return (
    <>
      <PageTitle kicker="Honours" title="Achievements" />
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="frame-classic relative">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {photos.map((p, k) => (
                <div key={k} className="aspect-[4/3] w-full shrink-0 bg-muted">
                  <img src={p.url} alt={`Achievement ${k + 1}`} className="h-full w-full object-contain" />
                </div>
              ))}
            </div>
            <button
              aria-label="Previous"
              onClick={() => setI((i - 1 + n) % n)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-accent bg-card/90 p-2 text-primary hover:bg-card"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => setI((i + 1) % n)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-accent bg-card/90 p-2 text-primary hover:bg-card"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          {photos.map((_, k) => (
            <button
              key={k}
              aria-label={`Show photo ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-2.5 w-2.5 rotate-45 border border-accent transition-colors ${k === i ? "bg-accent" : "bg-transparent"}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
