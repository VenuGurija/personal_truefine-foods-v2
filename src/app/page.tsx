import Link from "next/link";
import { InstagramReviews } from "@/components/InstagramReviews";
import { ProductGrid } from "@/components/ProductGrid";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-maroon">
              India · Food ingredients · B2B
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.1] md:text-6xl">
              Premium TRUEFINE dehydrated products
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              Carefully sourced Indian produce, processed into dependable
              powders for food businesses that care what goes into their
              products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#why"
                className="bg-maroon px-6 py-3 text-[12px] tracking-[0.14em] uppercase text-white"
              >
                Why TRUEFINE
              </Link>
              <Link
                href="/products"
                className="border border-ink/20 px-6 py-3 text-[12px] tracking-[0.14em] uppercase"
              >
                Shop powders
              </Link>
            </div>
          </div>
          <div className="relative min-h-[380px] bg-[#1F4D2A]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/products/spinach-powder-study.jpg"
              alt="TRUEFINE spinach powder"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="why" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-center text-[11px] tracking-[0.22em] uppercase text-maroon">
            Pure process, clear supply
          </p>
          <h2 className="mt-3 text-center font-serif text-4xl md:text-5xl">
            Why TRUEFINE?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Carefully sourced",
                text: "Indian produce selected for the ingredient it will become.",
              },
              {
                title: "Thoughtfully processed",
                text: "Dehydrated and milled so the powder stays consistent in the kitchen and in production.",
              },
              {
                title: "Retail packs and bulk",
                text: "Order a jar online, or inquire when you need commercial quantities.",
              },
            ].map((item) => (
              <article key={item.title} className="border-t border-gold pt-6">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProductGrid variant="best" />

      <section className="bg-cream-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold">
              Telangana, India
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              From fresh produce to dependable ingredients.
            </h2>
            <p className="mt-5 text-muted">
              TRUEFINE FOODS works from Chityala, Nalgonda. We do not publish
              factory claims we cannot show. What we offer is a clear catalog,
              honest documentation and a direct line for bulk requirements.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-[12px] tracking-[0.14em] uppercase text-maroon"
            >
              Read the story
            </Link>
          </div>
          <div className="relative min-h-[420px] bg-maroon">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/signboard.png"
              alt="TRUEFINE FOODS signboard"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <InstagramReviews />
    </>
  );
}
