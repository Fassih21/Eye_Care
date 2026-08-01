import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Clock, MessageCircle, Phone } from "lucide-react";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Khawaja Hospital Eye Care & Eyewear, Lahore" },
      {
        name: "description",
        content:
          "Book an eye consultation with Dr. Muhammad Asmat Rasheed at Khawaja Hospital, Kahna Nau, Lahore. Send your details straight to the clinic on WhatsApp.",
      },
      { property: "og:title", content: "Book an eye consultation in Kahna Nau, Lahore" },
      {
        property: "og:description",
        content:
          "Choose a date and time for your examination and send the request directly to the clinic on WhatsApp.",
      },
    ],
  }),
  component: BookPage,
});

const REASONS = [
  "Complete eye examination",
  "Glasses / lens prescription",
  "Foreign body or eye injury",
  "Redness, pain or swelling",
  "Cataract assessment",
  "Child's eye check-up",
  "Follow-up visit",
  "Other concern",
] as const;

const TIMES = ["6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"] as const;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Please enter your full name")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(20, "Enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Phone number can only contain digits and + - ( )"),
  date: z.string().min(1, "Choose a preferred date"),
  time: z.string().min(1, "Choose a preferred time"),
  reason: z.string().min(1, "Select the reason for your visit"),
  message: z.string().trim().max(500, "Please keep this under 500 characters").optional(),
});

type FormValues = z.infer<typeof schema>;

function BookPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", date: "", time: "", reason: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    const lines = [
      `Assalam-o-Alaikum, I would like to book an eye appointment at ${CLINIC.name}.`,
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Preferred date: ${values.date}`,
      `Preferred time: ${values.time}`,
      `Reason for visit: ${values.reason}`,
    ];
    if (values.message) lines.push(`Additional details: ${values.message}`);
    lines.push("", `For: ${CLINIC.doctor}`);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const today = new Date().toISOString().split("T")[0];
  const fieldClass =
    "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-ring/30";

  return (
    <>
      <PageHero
        eyebrow="Book Appointment"
        title={
          <>
            Reserve your slot in the <span className="text-teal">evening eye clinic.</span>
          </>
        }
        description="Fill in your details and the request is sent straight to the clinic on WhatsApp. You will receive a confirmation message before your visit."
      />

      <section className="shell grid gap-14 py-24 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="card-surface p-7 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>
              <input id="name" type="text" autoComplete="name" className={fieldClass} {...register("name")} />
              <FieldError message={errors.name?.message} />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="03XX XXXXXXX"
                className={fieldClass}
                {...register("phone")}
              />
              <FieldError message={errors.phone?.message} />
            </div>

            <div>
              <label htmlFor="date" className="text-sm font-medium">
                Preferred date
              </label>
              <input id="date" type="date" min={today} className={fieldClass} {...register("date")} />
              <FieldError message={errors.date?.message} />
            </div>

            <div>
              <label htmlFor="time" className="text-sm font-medium">
                Preferred time
              </label>
              <select id="time" className={fieldClass} defaultValue="" {...register("time")}>
                <option value="" disabled>
                  Select a time
                </option>
                {TIMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <FieldError message={errors.time?.message} />
            </div>

            <div>
              <label htmlFor="reason" className="text-sm font-medium">
                Reason for visit
              </label>
              <select id="reason" className={fieldClass} defaultValue="" {...register("reason")}>
                <option value="" disabled>
                  Select a reason
                </option>
                {REASONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <FieldError message={errors.reason?.message} />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">
                Additional details <span className="text-muted-foreground">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                maxLength={500}
                placeholder="Symptoms, how long they have lasted, previous prescriptions or surgery."
                className={fieldClass}
                {...register("message")}
              />
              <FieldError message={errors.message?.message} />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep disabled:opacity-60 sm:w-auto"
          >
            <MessageCircle className="size-4 text-teal" />
            Send request on WhatsApp
          </button>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Submitting opens WhatsApp with your details written out. No information is stored on
            this website.
          </p>
        </form>

        <aside className="space-y-6">
          <div className="navy-panel rounded-2xl p-7">
            <h2 className="text-xl text-navy-foreground">Before you book</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/70">
              <li>Bring your current glasses and any previous prescriptions.</li>
              <li>Mention diabetes, hypertension or eye surgery when you book.</li>
              <li>
                If your eyes will be dilated, arrange for someone to travel back with you.
              </li>
              <li>For an injury or sudden vision loss, call the clinic instead of booking.</li>
            </ul>
          </div>

          <div className="card-surface p-7">
            <p className="flex items-start gap-3 text-sm">
              <Clock className="mt-0.5 size-4 shrink-0 text-teal" />
              <span>
                {CLINIC.hours}
                <br />
                {CLINIC.hospitalHours}
              </span>
            </p>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="mt-5 flex items-center gap-3 text-sm font-semibold hover:text-teal"
            >
              <Phone className="size-4 text-teal" /> {CLINIC.phoneIntl}
            </a>
            <p className="mt-5 border-t border-border pt-5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {CLINIC.doctor} — {CLINIC.credential}
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-2 text-xs font-medium text-destructive">{message}</p>;
}
