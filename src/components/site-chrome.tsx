import { Link } from "@tanstack/react-router";
import emblem from "@/assets/emblem.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/teachers", label: "Teachers" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
  { to: "/developer", label: "Developer" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-5 sm:px-6 md:flex-row md:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
          <img src={emblem.url} alt="Dhaka Commerce College emblem" className="h-12 w-12 shrink-0 rounded-full sm:h-14 sm:w-14" />
          <div className="min-w-0">
            <div className="font-serif text-xl font-semibold tracking-wide text-primary sm:text-2xl">
              Dhaka Commerce College
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Est. 1989 · Dhaka</div>
          </div>
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="border-b border-transparent py-1 text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary sm:text-sm sm:tracking-[0.18em]"
              activeProps={{ className: "border-accent text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm tracking-wide">
        © {new Date().getFullYear()} Dhaka Commerce College · Mirpur, Dhaka
      </div>
    </footer>
  );
}

export function PageTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="animate-fade-up mx-auto max-w-3xl px-6 pt-16 pb-10 text-center">
      <div className="rule-ornament text-xs uppercase tracking-[0.35em]">{kicker}</div>
      <h1 className="mt-4 text-5xl font-semibold text-primary md:text-6xl">{title}</h1>
    </div>
  );
}
