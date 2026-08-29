"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/inquire", label: "Bulk inquiry" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="relative block h-14 w-36 md:h-16 md:w-44">
          <Image
            src="/brand/logo.png"
            alt="TRUEFINE FOODS"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] tracking-[0.12em] uppercase md:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-maroon">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/inquire"
          className="hidden bg-maroon px-5 py-2.5 text-[12px] tracking-[0.14em] uppercase text-white md:inline-flex"
        >
          Request a Quote
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-ink/15 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-[60] bg-cream md:hidden">
          <div className="flex items-center justify-between px-5 py-3">
            <p className="font-serif text-2xl">TRUEFINE</p>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border border-ink/15"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-6">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-4 font-serif text-3xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
