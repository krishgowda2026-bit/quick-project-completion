import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { SITE, THERAPY_AREAS, productImages } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shinemax Pharma — Quality Medicines from Mysuru" },
      { name: "description", content: "Shinemax Pharma (I) Pvt Ltd, Mysuru: quality formulations in diabetology, hypertension, gynaecology and gastroenterology since 2013." },
      { property: "og:title", content: "Shinemax Pharma — Quality Medicines from Mysuru" },
      { property: "og:description", content: "Quality formulations at affordable cost, partnering with doctors and channel partners since 2013." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6 rise">
            <p className="eyebrow">Mysuru · Est. {SITE.founded}</p>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
              Quality medicine, <em className="text-primary">within reach.</em>
            </h1>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              Shinemax Pharma delivers high-quality formulations at affordable cost — working alongside doctors,
              healthcare professionals and channel partners to improve patients' quality of life.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-ink">
                Explore portfolio
              </Link>
              <a href={SITE.whatsapp} className="border border-foreground px-7 py-4 text-sm font-semibold transition hover:bg-foreground hover:text-background">
                Become a channel partner
              </a>
            </div>
          </div>
          <div className="relative md:col-span-6">
            <img src={hero} alt="Quality inspection of tablet blister packs" width={1600} height={1008} className="aspect-[4/5] w-full object-cover md:aspect-[5/6]" />
            <div className="absolute -bottom-6 -left-6 hidden bg-accent px-8 py-6 text-accent-foreground md:block">
              <p className="font-display text-4xl">{new Date().getFullYear() - SITE.founded}+ years</p>
              <p className="text-xs uppercase tracking-widest">serving healthcare</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow">Therapeutic focus</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Four segments. One standard of quality.</h2>
          <div className="mt-16 grid border-t border-ink-foreground/15 md:grid-cols-4">
            {THERAPY_AREAS.map((t, i) => (
              <div key={t.name} className="border-b border-ink-foreground/15 py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                <p className="font-display text-sm opacity-50">0{i + 1}</p>
                <h3 className="mt-4 text-2xl">{t.name}</h3>
                <p className="mt-3 text-sm opacity-70">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Selected products</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            View full portfolio →
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {productImages.slice(0, 8).map((src) => (
            <div key={src} className="bg-card p-6">
              <img src={src} alt="Shinemax product pack" loading="lazy" className="aspect-square w-full object-contain transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
          <h2 className="text-4xl md:text-5xl">Partnering with doctors, pharmacies and distributors across Karnataka.</h2>
          <div>
            <p className="text-lg text-muted-foreground">
              Whether you are a healthcare professional, stockist or distributor, our team is ready to discuss supply and partnership.
            </p>
            <a href={SITE.whatsapp} className="mt-8 inline-block bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition hover:bg-ink">
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
