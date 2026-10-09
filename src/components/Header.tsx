"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/CartProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/inquire", label: "Bulk inquiry" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/" className="relative block h-14 w-36 md:h-16 md:w-44">
            <Image
              src="/brand/logo.png"
              alt="TRUEFINE FOODS"
              fill
              sizes="176px"
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
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              aria-label={count ? `Cart, ${count} items` : "Cart"}
              className="relative inline-flex h-10 w-10 items-center justify-center border border-ink/15"
            >
              <ShoppingBag size={18} />
              {count > 0 ? (
                <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center bg-maroon px-1 text-[10px] text-white">
                  {count}
                </span>
              ) : null}
            </Link>
            <Link
              href="/inquire"
              className="hidden bg-maroon px-5 py-2.5 text-[12px] tracking-[0.14em] uppercase text-white md:inline-flex"
            >
              Request a Quote
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-ink/15 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[70] flex h-dvh w-full flex-col overflow-y-auto bg-cream md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3">
            <Link
              href="/"
              className="relative block h-14 w-36"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/brand/logo.png"
                alt="TRUEFINE FOODS"
                fill
                sizes="144px"
                className="object-contain object-left"
              />
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border border-ink/15"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col overflow-y-auto px-6 pt-4 pb-10">
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
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-4 font-serif text-3xl"
            >
              Cart{count > 0 ? ` (${count})` : ""}
            </Link>
            <Link
              href="/inquire"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-fit bg-maroon px-5 py-2.5 text-[12px] tracking-[0.14em] uppercase text-white"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
