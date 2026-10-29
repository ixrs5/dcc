import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/site-chrome";

export const Route = createFileRoute("/developer")({
  head: () => ({
    meta: [
      { title: "Developer — Dhaka Commerce College" },
      { name: "description", content: "Rejoan Siyam, developer of the Dhaka Commerce College website." },
      { property: "og:title", content: "Developer — Dhaka Commerce College" },
      { property: "og:description", content: "Rejoan Siyam, developer of the Dhaka Commerce College website." },
    ],
  }),
  component: Page,
});

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

const links = [
  { name: "Instagram", handle: "@rejoan.siyam", href: "https://www.instagram.com/rejoan.siyam/", Icon: InstagramIcon },
  { name: "WhatsApp", handle: "rst.siuu", href: "https://wa.me/rst.siuu", Icon: WhatsAppIcon },
];

function Page() {
  return (
    <>
      <PageTitle kicker="Credits" title="Developer" />
      <section className="mx-auto max-w-2xl px-4 pb-24 text-center sm:px-6">
        <div className="frame-classic">
          <div className="py-8">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-accent bg-muted font-serif text-4xl text-primary">RS</div>
            <h2 className="mt-4 text-4xl font-semibold text-primary">Rejoan Siyam</h2>
            <p className="mt-1 italic text-muted-foreground">Designer & developer of this website</p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {links.map(({ name, handle, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-border bg-card p-5 text-left transition-colors hover:border-accent hover:bg-secondary"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Icon /></span>
              <span className="min-w-0">
                <span className="block font-serif text-xl font-semibold text-primary">{name}</span>
                <span className="block truncate text-sm text-muted-foreground">{handle}</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
