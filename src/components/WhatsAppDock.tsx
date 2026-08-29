import { contact } from "@/data/site";

export function WhatsAppDock() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      className="fixed right-4 bottom-20 z-40 flex h-12 items-center bg-[#25D366] px-4 text-[12px] font-medium tracking-[0.08em] uppercase text-white shadow-lg md:bottom-6"
    >
      WhatsApp
    </a>
  );
}
