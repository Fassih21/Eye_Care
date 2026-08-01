import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Navigation, Phone, Quote, Star } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { CtaBand, PageHero, SectionHeading } from "@/components/site";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Clinic Location & Reviews — Khawaja Hospital Eye Care, Kahna Nau Lahore" },
      {
        name: "description",
        content:
          "Khawaja Hospital Eye Care & Eyewear, Main Feroz Pur Road, Kahna Nau, Lahore. Rated 5.0 from 68 reviews. Directions, phone number and evening clinic timings.",
      },
      { property: "og:title", content: "Find Khawaja Hospital Eye Care in Kahna Nau, Lahore" },
      {
        property: "og:description",
        content:
          "Directions, timings, phone number and patient reviews for the eye department at Khawaja Hospital.",
      },
    ],
  }),
  component: LocationPage,
});

const DETAILS = [
  { icon: MapPin, label: "Address", value: CLINIC.address },
  { icon: Navigation, label: "Plus code", value: CLINIC.plusCode },
  { icon: Phone, label: "Phone", value: CLINIC.phoneIntl, href: `tel:${CLINIC.phoneTel}` },
  {
    icon: Clock,
    label: "Timings",
    value: `${CLINIC.hours}. ${CLINIC.hospitalHours}.`,
  },
];

const REVIEWS = [
  {
    name: "Iram Shahzadi",
    text: "A genuinely thorough examination. The doctor took time to explain what he found and why the prescription had changed — something I had not experienced elsewhere.",
  },
  {
    name: "Eshal Khan",
    text: "Clean setup, modern equipment and a calm environment. My mother was treated with real respect and we were not kept waiting past our slot.",
  },
  {
    name: "Abid Hussain",
    text: "Came in the evening with something stuck in my eye. It was dealt with carefully the same visit and the aftercare advice was clear and practical.",
  },
];

function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title={
          <>
            Inside Khawaja Hospital, <span className="text-teal">Kahna Nau, Lahore.</span>
          </>
        }
        description="On Main Feroz Pur Road (Kasur Road), near Gourmet Bakery. Easy to reach from Kahna, Bhai Pheru and the southern Ring Road corridor."
        image="/images/location/khawaja-hospital-exterior.jpeg"
        imageAlt="Khawaja Hospital building exterior"
      />

      <section className="shell grid gap-12 py-24 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <div className="card-surface inline-flex items-center gap-3 px-5 py-3">
            <span className="font-display text-2xl">{CLINIC.rating}</span>
            <span className="flex text-teal">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" strokeWidth={0} />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">
              {CLINIC.reviewCount} Google reviews · Eye care center
            </span>
          </div>

          <h2 className="mt-8 text-3xl">{CLINIC.name}</h2>
          <ul className="mt-8 space-y-6">
            {DETAILS.map((d) => (
              <li key={d.label} className="flex gap-4">
                <d.icon className="mt-1 size-5 shrink-0 text-teal" strokeWidth={1.8} />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a href={d.href} className="mt-1 block text-base font-medium hover:text-teal">
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base leading-relaxed">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={CLINIC.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep"
            >
              <Navigation className="size-4" /> Get Directions
            </a>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Phone className="size-4 text-teal" /> Call the clinic
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
          <iframe
            title="Map showing Khawaja Hospital Eye Care & Eyewear in Kahna Nau, Lahore"
            src={CLINIC.mapsEmbed}
            className="h-[420px] w-full lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="What patients say after their visit."
            description="Paraphrased from public Google reviews of the clinic."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <blockquote key={r.name} className="card-surface flex flex-col p-7">
                <Quote className="size-6 text-teal" strokeWidth={1.7} />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {r.text}
                </p>
                <footer className="mt-6 border-t border-border pt-4 text-sm font-semibold">
                  {r.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <div className="py-24">
        <CtaBand />
      </div>
    </>
  );
}
