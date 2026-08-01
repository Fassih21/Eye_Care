import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarClock,
  Eye,
  Glasses,
  Microscope,
  Quote,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { CtaBand, SectionHeading } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Khawaja Hospital Eye Care & Eyewear — Dr. Muhammad Asmat Rasheed, Lahore",
      },
      {
        name: "description",
        content:
          "Complete eye examination and treatment in Kahna Nau, Lahore, led by Dr. Muhammad Asmat Rasheed, Lecturer at The University of Lahore. Evening clinic 6:30 to 9:30 PM.",
      },
      {
        property: "og:title",
        content: "Khawaja Hospital Eye Care & Eyewear — Kahna Nau, Lahore",
      },
      {
        property: "og:description",
        content:
          "Eye examination, injury and foreign body removal, cataract care and professionally fitted eyewear under Dr. Muhammad Asmat Rasheed.",
      },
    ],
  }),
  component: Home,
});

const TRUST = [
  {
    icon: Stethoscope,
    title: "Experienced specialist",
    body: "Every examination is performed personally by Dr. Asmat Rasheed.",
  },
  {
    icon: Microscope,
    title: "Modern equipment",
    body: "Slit lamp, phoropter and full refraction workup on site.",
  },
  {
    icon: Users,
    title: "Children to elders",
    body: "Separate, patient approach for kids and older patients.",
  },
  {
    icon: CalendarClock,
    title: "Timely service",
    body: "Evening clinic 6:30 to 9:30 PM daily, minimal waiting.",
  },
];

const SERVICES = [
  {
    icon: Eye,
    title: "Complete eye examination",
    body: "Vision, pressure, anterior segment and fundus assessment in one sitting.",
  },
  {
    icon: ShieldCheck,
    title: "Foreign body & injury care",
    body: "Safe removal of foreign bodies and management of ocular injuries.",
  },
  {
    icon: Microscope,
    title: "Cataract & eye disease",
    body: "Diagnosis, medical management and surgical referral when required.",
  },
  {
    icon: Glasses,
    title: "Eyewear & lens fitting",
    body: "Accurate prescriptions for distance and near, fitted under supervision.",
  },
];

const REVIEWS = [
  {
    name: "Iram Shahzadi",
    text: "The examination was thorough and the doctor explained every finding clearly. My glasses prescription was finally accurate.",
  },
  {
    name: "Eshal Khan",
    text: "Brought my father for a check-up. Modern equipment, no long wait, and a very respectful, patient manner throughout.",
  },
  {
    name: "Abid Hussain",
    text: "A foreign body was removed from my eye the same evening. Careful, professional handling and clear aftercare instructions.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden navy-panel">
        <img
          src="/images/hero/slit-lamp-exam.jpeg"
          alt="Dr. Muhammad Asmat Rasheed examining a patient on the slit lamp"
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/96 to-navy/60" />
        <div className="shell relative py-24 md:py-32">
          <p className="eyebrow">Eye Care & Eyewear · Kahna Nau, Lahore</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
            Complete eye examination and treatment,{" "}
            <span className="text-teal">under one experienced pair of hands.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {CLINIC.doctor} — {CLINIC.credential} — runs the eye department at Khawaja Hospital,
            treating everything from routine refraction and dry eye to injuries, infections and
            cataract, with eyewear fitted under professional supervision.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-navy-deep transition-opacity hover:opacity-90"
            >
              Book an Appointment <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/treatments"
              className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Treatments
            </Link>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((item) => (
              <li key={item.title} className="flex gap-3">
                <item.icon className="mt-0.5 size-5 shrink-0 text-teal" strokeWidth={1.8} />
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell grid items-center gap-14 py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="The Specialist"
            title="Care led by Dr. Muhammad Asmat Rasheed."
            description="A practising optometrist and Lecturer at The University of Lahore, Dr. Asmat Rasheed combines academic teaching with daily clinical work — which means every patient is examined against current standards, not habit."
          />
          <dl className="mt-9 grid grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Google rating
              </dt>
              <dd className="mt-2 font-display text-3xl">
                {CLINIC.rating}
                <span className="ml-2 text-sm font-sans text-muted-foreground">
                  {CLINIC.reviewCount} reviews
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Evening clinic
              </dt>
              <dd className="mt-2 font-display text-3xl">
                6:30 – 9:30
                <span className="ml-2 text-sm font-sans text-muted-foreground">PM daily</span>
              </dd>
            </div>
          </dl>
          <Link
            to="/tour"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Take a tour of the clinic <ArrowRight className="size-4 text-teal" />
          </Link>
        </div>
        <figure className="relative">
          <img
            src="/images/doctor/dr-asmat-rasheed.jpeg"
            alt="Portrait of Dr. Muhammad Asmat Rasheed"
            className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-[var(--shadow-lift)]"
            loading="lazy"
          />
          <figcaption className="card-surface absolute -bottom-6 left-6 right-6 px-5 py-4 md:right-auto">
            <p className="font-display text-lg">{CLINIC.doctor}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-teal">
              {CLINIC.credential}
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Services"
              title="Everything your eyes need, in one clinic."
            />
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
            >
              All treatments <ArrowRight className="size-4 text-teal" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article key={s.title} className="card-surface p-6">
                <s.icon className="size-6 text-teal" strokeWidth={1.7} />
                <h3 className="mt-5 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell grid items-center gap-14 py-24 lg:grid-cols-2">
        <figure>
          <img
            src="/images/treatments/swelling-case.jpeg"
            alt="Before and after five days of treatment for severe periorbital swelling"
            className="w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-card)]"
            loading="lazy"
          />
        </figure>
        <div>
          <SectionHeading
            eyebrow="Documented Results"
            title="Timely diagnosis changes the outcome."
            description="Severe swelling around the eye, resolved within five days of correct diagnosis and management. Swelling, redness and sudden pain are never cosmetic issues — they are signals that deserve same-day assessment."
          />
          <Link
            to="/treatments"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
          >
            See the full case studies <ArrowRight className="size-4 text-teal" />
          </Link>
        </div>
      </section>

      <section className="shell pb-24">
        <SectionHeading
          eyebrow="Patient Reviews"
          title="Rated 5.0 by 68 patients on Google."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} className="card-surface flex flex-col p-7">
              <Quote className="size-6 text-teal" strokeWidth={1.7} />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="mt-1 flex items-center gap-1 text-teal">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" strokeWidth={0} />
                  ))}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
