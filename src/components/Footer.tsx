import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { EyeMark } from "./Header";

export function Footer() {
  return (
    <footer className="navy-panel mt-24">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <EyeMark className="bg-white/10" />
            <span className="font-display text-xl font-semibold">Khawaja Eye Care & Eyewear</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Complete examination and treatment of all eye diseases under the supervision of{" "}
            {CLINIC.doctor}, {CLINIC.credential}. Located inside Khawaja Hospital, Kahna Nau,
            Lahore.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-teal">
            Rating {CLINIC.rating} · {CLINIC.reviewCount} Google reviews
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
            Visit us
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal" />
              <span>{CLINIC.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-teal" />
              <a href={`tel:${CLINIC.phoneTel}`} className="hover:text-white">
                {CLINIC.phoneIntl}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-teal" />
              <span>
                {CLINIC.hours}
                <br />
                {CLINIC.hospitalHours}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
            Quick links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="hover:text-white">
                Treatments
              </Link>
            </li>
            <li>
              <Link to="/location" className="hover:text-white">
                Location & Reviews
              </Link>
            </li>
            <li>
              <Link to="/tour" className="hover:text-white">
                Clinic Tour
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-white">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
          <p>
            {CLINIC.doctor} — {CLINIC.credential}
          </p>
        </div>
      </div>
    </footer>
  );
}
