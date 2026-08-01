export const CLINIC = {
  name: "Khawaja Hospital Eye Care & Eyewear",
  shortName: "Khawaja Eye Care",
  doctor: "Dr. Muhammad Asmat Rasheed",
  credential: "Lecturer, The University of Lahore",
  phoneDisplay: "0336 6384540",
  phoneIntl: "+92 336 6384540",
  phoneTel: "+923366384540",
  whatsapp: "923366384540",
  address:
    "Main Feroz Pur Rd (Kasur Road), Bakery, near Gourmet, Kahna Nau, Lahore 53100, Pakistan",
  plusCode: "99F8+38 Lahore, Pakistan",
  rating: "5.0",
  reviewCount: 68,
  hours: "Open daily — evening consultation 6:30 PM to 9:30 PM",
  hospitalHours: "Hospital reception open until 11:00 PM",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Khawaja+Hospital+Kahna+Nau+Lahore",
  mapsEmbed:
    "https://www.google.com/maps?q=Khawaja%20Hospital%20Main%20Feroz%20Pur%20Road%20Kahna%20Nau%20Lahore&output=embed",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE = `Assalam-o-Alaikum, I would like to book an eye consultation with ${CLINIC.doctor} at ${CLINIC.name}.`;
