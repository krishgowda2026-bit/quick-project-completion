import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteChrome";
import { SITE, productImages } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Shinemax Pharma Portfolio" },
      { name: "description", content: "Browse the Shinemax Pharma portfolio across diabetology, hypertension, gynaecology and gastroenterology." },
      { property: "og:title", content: "Shinemax Pharma Product Portfolio" },
      { property: "og:description", content: "Quality formulations at affordable cost." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Our products" text="For product details, availability and trade enquiries, contact our team." />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-3 lg:grid-cols-4">
          {productImages.map((src) => (
            <div key={src} className="bg-card p-6">
              <img src={src} alt="Shinemax product" loading="lazy" className="aspect-square w-full object-contain" />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href={SITE.whatsapp} className="inline-block bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:bg-ink">
            Request product information
          </a>
        </div>
      </section>
    </>
  );
}
