import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site";

export const Route = createFileRoute("/tour")({
  head: () => ({
    meta: [
      { title: "Clinic Tour — Khawaja Hospital Eye Care & Eyewear, Lahore" },
      {
        name: "description",
        content:
          "Walk through the eye department at Khawaja Hospital, Kahna Nau: the building, consultation room, slit lamp examination setup and refraction equipment.",
      },
      { property: "og:title", content: "Take a tour of Khawaja Hospital Eye Care" },
      {
        property: "og:description",
        content:
          "See the consultation room, examination equipment and hospital exterior before your visit.",
      },
    ],
  }),
  component: Tour,
});

const STOPS = [
  {
    step: "01",
    title: "The building",
    caption: "Khawaja Hospital, Main Feroz Pur Road",
    body: "The eye department sits inside Khawaja Hospital on Main Feroz Pur Road in Kahna Nau. The signage is visible from the road, with parking directly in front and the reception on the ground floor.",
    image: "/images/tour/exterior.jpeg",
    alt: "Khawaja Hospital building with signage on Main Feroz Pur Road",
  },
  {
    step: "02",
    title: "The consultation room",
    caption: "Examination desk, trial lens set and refraction chart",
    body: "A single, private room where history, refraction and examination all happen together. The trial lens set and retinoscope sit on the desk; the slit lamp is a step away, so nothing is rushed between rooms.",
    image: "/images/tour/consultation-room.jpeg",
    alt: "Consultation room with examination desk, trial lens set and slit lamp",
  },
  {
    step: "03",
    title: "Examination in progress",
    caption: "Slit lamp biomicroscopy with a condensing lens",
    body: "Slit lamp examination allows the cornea, anterior chamber, lens and — with a condensing lens — the retina to be assessed in detail. This is where cataract, corneal injury and retinal change are picked up.",
    image: "/images/tour/examination.jpeg",
    alt: "Dr. Muhammad Asmat Rasheed performing a slit lamp examination on a patient",
  },
];

function Tour() {
  return (
    <>
      <PageHero
        eyebrow="Clinic Tour"
        title={
          <>
            See the clinic <span className="text-teal">before you arrive.</span>
          </>
        }
        description="A short walkthrough of the eye department at Khawaja Hospital — the building, the consultation room and the equipment used during a standard examination."
        image="/images/tour/consultation-room.jpeg"
        imageAlt="Consultation room at Khawaja Hospital eye department"
      />

      <section className="shell py-24">
        <div className="space-y-24">
          {STOPS.map((stop, i) => (
            <article
              key={stop.step}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>figure]:order-last" : ""
              }`}
            >
              <figure>
                <img
                  src={stop.image}
                  alt={stop.alt}
                  className="w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-card)]"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {stop.caption}
                </figcaption>
              </figure>
              <div>
                <p className="eyebrow">Stop {stop.step}</p>
                <h2 className="mt-3 text-3xl">{stop.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{stop.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
      <div className="pb-8" />
    </>
  );
}
