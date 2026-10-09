import { contact } from "@/data/site";

export function Ticker() {
  const line = `Retail packs ship across India  ·  Bulk orders on WhatsApp ${contact.phone}  ·  `;
  return (
    <div className="overflow-hidden bg-maroon py-2 text-[12px] tracking-wide text-white">
      <div className="ticker-track flex w-max">
        <p className="px-4 whitespace-nowrap">{line.repeat(8)}</p>
        <p className="px-4 whitespace-nowrap">{line.repeat(8)}</p>
      </div>
    </div>
  );
}
