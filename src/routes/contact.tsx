import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/site-chrome";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dhaka Commerce College" },
      { name: "description", content: "Phone numbers and details for Dhaka Commerce College." },
      { property: "og:title", content: "Contact — Dhaka Commerce College" },
      { property: "og:description", content: "Phone numbers and details for Dhaka Commerce College." },
    ],
  }),
  component: Page,
});

const phones = ["48033903", "48036942", "48037357"];
const codes = [
  ["College Code", "1375"],
  ["EIIN", "108207"],
  ["NU Code", "6438"],
];

function Page() {
  return (
    <>
      <PageTitle kicker="Get in touch" title="Contact" />
      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="frame-classic text-center">
          <p className="py-4 italic text-muted-foreground">Self Financed, Free from Politics & Smoking</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {phones.map((p) => (
              <a key={p} href={`tel:${p}`} className="flex items-center justify-center gap-2 border border-border p-4 text-primary transition-colors hover:bg-secondary">
                <Phone className="h-4 w-4 shrink-0" /> {p}
              </a>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-px bg-border">
            {codes.map(([k, v]) => (
              <div key={k} className="bg-card p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</div>
                <div className="font-serif text-2xl font-semibold text-primary">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
