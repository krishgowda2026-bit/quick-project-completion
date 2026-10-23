import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteChrome";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Shinemax Pharma — Mysuru Office" },
      { name: "description", content: "Contact Shinemax Pharma (I) Pvt Ltd, Gangothri Layout, Mysuru. Chat with us on WhatsApp." },
      { property: "og:title", content: "Contact Shinemax Pharma" },
      { property: "og:description", content: "Reach our Mysuru office for partnerships and product enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Let's talk partnership." />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <div className="space-y-10">
          <div>
            <p className="eyebrow">Registered office</p>
            <p className="mt-3 font-display text-2xl">{SITE.name}</p>
            <p className="mt-2 text-muted-foreground">{SITE.address}</p>
            <a href={SITE.maps} className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">Open in Maps →</a>
          </div>
          <div>
            <p className="eyebrow">WhatsApp</p>
            <a href={SITE.whatsapp} className="mt-3 block font-display text-3xl hover:text-primary">{SITE.phoneDisplay}</a>
          </div>
        </div>
        <iframe
          title="Shinemax Pharma location"
          src="https://www.google.com/maps?q=Gangothri+Layout+Mysuru+570009&output=embed"
          className="h-96 w-full border"
          loading="lazy"
        />
      </section>
    </>
  );
}
