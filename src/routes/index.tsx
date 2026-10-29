import { createFileRoute, Link } from "@tanstack/react-router";
import emblem from "@/assets/emblem.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhaka Commerce College — Home" },
      { name: "description", content: "Welcome to Dhaka Commerce College, a self-financed, politics and smoking free institution in Dhaka." },
      { property: "og:title", content: "Dhaka Commerce College" },
      { property: "og:description", content: "A self-financed, politics and smoking free institution in Dhaka." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="animate-fade-up mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
      <img src={emblem.url} alt="Dhaka Commerce College emblem" className="frame-classic h-40 w-40 rounded-full" />
      <div className="rule-ornament mt-12 w-full text-xs uppercase tracking-[0.35em]">Welcome</div>
      <h1 className="mt-6 text-6xl font-semibold leading-tight text-primary md:text-7xl">
        Dhaka Commerce College
      </h1>
      <p className="mt-6 max-w-xl text-lg italic text-muted-foreground">
        Self-financed, free from politics and smoking — dedicated to discipline, knowledge and excellence.
      </p>
      <Link
        to="/achievements"
        className="mt-10 border border-primary px-8 py-3 text-sm uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Our Achievements
      </Link>
    </section>
  );
}
