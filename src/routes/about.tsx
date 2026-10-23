import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteChrome";
import { SITE, THERAPY_AREAS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shinemax Pharma — Mysuru since 2013" },
      { name: "description", content: "Founded in 2013 in Mysuru, Shinemax Pharma (I) Pvt Ltd is committed to quality medicines at affordable cost." },
      { property: "og:title", content: "About Shinemax Pharma" },
      { property: "og:description", content: "Our story, commitment and therapeutic focus." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Built on quality, driven by care." text={`Established in ${SITE.founded} by dynamic and committed people in Mysuru, Karnataka.`} />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">Our commitment</p>
          <h2 className="mt-4 text-4xl">Improving quality of life — together.</h2>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground md:col-span-7">
          <p>
            Shinemax Pharma (I) Pvt Ltd is committed to providing products with high quality standards at affordable cost.
          </p>
          <p>
            We work towards improving the quality of life of patients in society by joining hands with doctors, healthcare
            professionals and all our channel partners.
          </p>
          <ul className="grid gap-px bg-border pt-px sm:grid-cols-2">
            {THERAPY_AREAS.map((t) => (
              <li key={t.name} className="bg-background p-5 text-base text-foreground">{t.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
