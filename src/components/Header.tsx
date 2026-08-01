import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/treatments", label: "Treatments" },
  { to: "/location", label: "Location" },
  { to: "/tour", label: "Tour" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background/90 backdrop-blur transition-shadow",
        scrolled && "border-border shadow-[0_1px_20px_-12px_rgba(10,20,50,0.5)]",
      )}
    >
      <div className="shell flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <EyeMark />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight">
              Khawaja Eye Care
            </span>
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-teal">
              & Eyewear · Lahore
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${CLINIC.phoneTel}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="size-4 text-teal" strokeWidth={2} />
            {CLINIC.phoneDisplay}
          </a>
          <Link
            to="/book"
            className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep"
          >
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="flex items-center gap-2 px-2 py-3 text-sm font-medium"
            >
              <Phone className="size-4 text-teal" /> {CLINIC.phoneDisplay}
            </a>
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md bg-navy px-4 py-3 text-center text-sm font-semibold text-navy-foreground"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function EyeMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full bg-navy",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 20" className="w-6" fill="none">
        <path
          d="M1 10C1 10 6.5 1.5 16 1.5S31 10 31 10s-5.5 8.5-15 8.5S1 10 1 10Z"
          stroke="currentColor"
          className="text-teal"
          strokeWidth="1.6"
        />
        <circle cx="16" cy="10" r="4.6" className="fill-teal" />
        <circle cx="16" cy="10" r="1.9" className="fill-navy" />
      </svg>
    </span>
  );
}
