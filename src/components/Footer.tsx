import Link from "next/link";
import { contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-[#F6F1E8]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl">TRUEFINE FOODS</p>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Dehydrated food ingredients from India. A source of good nutrition.
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-gold">
            Quick links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/inquire">Bulk inquiry</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-gold">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </li>
            <li>{contact.address}</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} TRUEFINE FOODS
      </p>
    </footer>
  );
}
