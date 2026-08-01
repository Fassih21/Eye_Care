import { MessageCircle } from "lucide-react";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/clinic";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the clinic on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)] transition-transform hover:scale-[1.03]"
    >
      <MessageCircle className="size-5" strokeWidth={2.2} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
