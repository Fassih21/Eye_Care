import { createFileRoute } from "@tanstack/react-router";
import { Baby, Eye, Glasses, Microscope, ShieldCheck, Syringe } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/site";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Eye Treatments & Services — Khawaja Hospital Eye Care, Lahore" },
      {
        name: "description",
        content:
          "Complete eye examination, foreign body removal, cataract and eye disease treatment, eyewear fitting and paediatric or elderly eye care in Kahna Nau, Lahore.",
      },
      { property: "og:title", content: "Eye Treatments at Khawaja Hospital Eye Care" },
      {
        property: "og:description",
        content:
          "Examination, injury care, cataract management and professionally fitted eyewear under Dr. Muhammad Asmat Rasheed.",
      },
    ],
  }),
  component: Treatments,
});

const TREATMENTS = [
  {
    icon: Eye,
    title: "Complete eye examination",
    body: "Visual acuity, refraction, intraocular pressure, slit lamp assessment of the anterior segment and dilated fundus examination — recorded and explained in plain language before you leave.",
    points: ["Distance and near vision testing", "Slit lamp and fundus review", "Written findings"],
  },
  {
    icon: Syringe,
    title: "Foreign body & eye injury care",
    body: "Metal chips, dust, elfy and other foreign bodies removed under magnification with topical anaesthesia, followed by staining to confirm the cornea is clear and an antibiotic plan.",
    points: ["Same-evening removal", "Corneal staining check", "Aftercare instructions"],
  },
  {
    icon: Microscope,
    title: "Cataract & general eye disease",
    body: "Assessment and management of cataract, conjunctivitis, dry eye, allergic eye disease, styes, lid swelling and diabetic or hypertensive eye changes, with surgical referral arranged where indicated.",
    points: ["Cataract grading", "Medical management", "Surgical referral pathway"],
  },
  {
    icon: Glasses,
    title: "Eyewear & lens fitting",
    body: "Prescriptions issued only after a full refraction, then frames and lenses fitted and verified on site so the finished pair matches the prescription exactly.",
    points: ["Single vision, bifocal, progressive", "Frame fitting and adjustment", "Prescription verification"],
  },
  {
    icon: Baby,
    title: "Paediatric eye care",
    body: "Screening for squint, lazy eye and refractive error in children, with a calm, unhurried approach and clear guidance for parents on follow-up intervals.",
    points: ["Squint and amblyopia screening", "School vision problems", "Parent counselling"],
  },
  {
    icon: ShieldCheck,
    title: "Elderly eye care",
    body: "Age-related change deserves patience. Cataract, glaucoma risk, dry eye and reading difficulty are assessed together, with mobility and lighting advice for the home.",
    points: ["Cataract and glaucoma checks", "Reading vision support", "Follow-up scheduling"],
  },
];

function Treatments() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title={
          <>
            Diagnosis first, treatment second —{" "}
            <span className="text-teal">never the other way round.</span>
          </>
        }
        description="Every service below is delivered personally by Dr. Muhammad Asmat Rasheed, Lecturer at The University of Lahore, at the Khawaja Hospital eye department in Kahna Nau."
        image="/images/tour/examination.jpeg"
        imageAlt="Eye examination in progress at Khawaja Hospital"
      />

      <section className="shell py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t) => (
            <article key={t.title} className="card-surface flex flex-col p-7">
              <t.icon className="size-6 text-teal" strokeWidth={1.7} />
              <h2 className="mt-5 text-xl">{t.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real cases treated at the clinic."
            description="Shared with patient consent as clinical documentation, not promotion. Both cases reached a good outcome because they were seen early."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <article className="card-surface overflow-hidden">
              <img
                src="/images/treatments/foreign-body-case.jpeg"
                alt="Before, during and after safe removal of a foreign body from a young patient's eye"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="p-7">
                <p className="eyebrow">Case 01 · Foreign body</p>
                <h3 className="mt-3 text-xl">Accidental elfy fall in a young patient's eye</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Glitter particles lodged in the conjunctival sac and lid margin. Removed under
                  magnification with topical anaesthesia, the surface stained to rule out corneal
                  abrasion, and the eye left clear and comfortable the same evening.
                </p>
              </div>
            </article>

            <article className="card-surface overflow-hidden">
              <img
                src="/images/treatments/swelling-case.jpeg"
                alt="Before and after five days of treatment for swelling around the eye"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="p-7">
                <p className="eyebrow">Case 02 · Periorbital swelling</p>
                <h3 className="mt-3 text-xl">Marked swelling resolved in five days</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  An elderly patient presented with painful redness and swelling around the eye.
                  Correct diagnosis and prompt medical management produced near-complete resolution
                  within five days, with vision preserved.
                </p>
              </div>
            </article>
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            If you have sudden pain, redness, swelling, discharge or a drop in vision, do not wait
            for it to settle on its own. Early assessment is what prevents complications.
          </p>
        </div>
      </section>

      <div className="py-24">
        <CtaBand />
      </div>
    </>
  );
}
