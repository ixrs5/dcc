import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/site-chrome";
import p1 from "@/assets/principal-1.png.asset.json";
import p2 from "@/assets/principal-2.png.asset.json";
import p3 from "@/assets/principal-3.png.asset.json";
import p4 from "@/assets/principal-4.png.asset.json";
import { User } from "lucide-react";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Teachers — Dhaka Commerce College" },
      { name: "description", content: "Principals and faculty of Dhaka Commerce College." },
      { property: "og:title", content: "Teachers — Dhaka Commerce College" },
      { property: "og:description", content: "Principals and faculty of Dhaka Commerce College." },
    ],
  }),
  component: Page,
});

const principals = [
  { img: p1.url, name: "Prof. A. N. M. Mozammel Hossain", role: "Principal (Acting)", dates: ["15-Oct-2026 – Present"] },
  { img: p2.url, name: "Prof. Dr. Kazi Fayz Ahamed", role: "Former Principal", dates: ["15-Oct-2025 – 14-Oct-2026"] },
  { img: p3.url, name: "Prof. Dr. Md. Abu Masud", role: "Former Principal", dates: ["16-Jan-2021 – 14-Oct-2025"] },
  { img: p4.url, name: "Prof. Md. Shafiqul Islam", role: "Former Principal", dates: ["03-Nov-2019 – 07-Jan-2021", "20-Jan-2019 – 07-Jul-2019"] },
];

function Page() {
  return (
    <>
      <PageTitle kicker="Faculty" title="Teachers" />
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="frame-classic">
          <h2 className="py-4 text-center text-3xl font-semibold text-primary">Our Principals</h2>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {principals.map((p) => (
              <div key={p.name} className="flex flex-col items-center bg-card p-6 text-center">
                <img src={p.img} alt={p.name} className="h-48 w-40 border border-accent object-cover p-1" loading="lazy" />
                <h3 className="mt-4 text-2xl font-semibold text-primary">{p.name}</h3>
                <div className="mt-1 text-sm uppercase tracking-[0.2em] text-accent-foreground">{p.role}</div>
                {p.dates.map((d) => (
                  <div key={d} className="text-sm text-muted-foreground">{d}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="rule-ornament mb-10 text-xs uppercase tracking-[0.35em]">Professors</div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center border border-border bg-card p-4 text-center shadow-sm">
              <div className="grid h-20 w-20 place-items-center rounded-full border border-accent bg-muted text-muted-foreground">
                <User className="h-10 w-10" />
              </div>
              <div className="mt-4 w-full space-y-2">
                <div className="mx-auto h-3 w-3/4 rounded bg-muted" />
                <div className="mx-auto h-2 w-1/2 rounded bg-muted" />
                <div className="mx-auto h-2 w-2/3 rounded bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
