import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden navy-panel">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 size-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
        </>
      )}
      <div className="shell relative py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">{description}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn(
          "mt-3 text-3xl leading-tight md:text-4xl",
          tone === "dark" && "text-navy-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-muted-foreground",
            tone === "dark" && "text-white/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="shell">
      <div className="navy-panel relative overflow-hidden rounded-2xl px-8 py-14 text-center md:px-16">
        <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-teal/10" />
        <h2 className="relative text-3xl md:text-4xl">Protect your sight — book a slot today.</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/70">
          Evening consultation runs daily from 6:30 PM to 9:30 PM. Walk-ins are accepted, but a
          booked slot means a full, unhurried examination.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/book"
            className="rounded-md bg-teal px-6 py-3 text-sm font-semibold text-navy-deep transition-opacity hover:opacity-90"
          >
            Book Appointment
          </Link>
          <Link
            to="/location"
            className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Find the clinic
          </Link>
        </div>
      </div>
    </section>
  );
}
