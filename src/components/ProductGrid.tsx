"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/BuyBox";
import { products, type Category } from "@/data/site";
import { formatINR } from "@/lib/order";

const filters: { label: string; value: "all" | Category }[] = [
  { label: "All", value: "all" },
  { label: "Vegetable", value: "vegetable" },
  { label: "Fruit", value: "fruit" },
  { label: "Botanical", value: "botanical" },
];

export function ProductGrid({ variant = "all" }: { variant?: "all" | "best" }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const featured = variant === "best";
  const list = useMemo(() => {
    const source = featured ? products.filter((item) => item.available) : products;
    return filter === "all" ? source : source.filter((item) => item.category === filter);
  }, [featured, filter]);

  return (
    <section
      id={featured ? "best-products" : "products"}
      className="mx-auto max-w-6xl px-5 py-16 md:py-24"
    >
      <p className="text-center text-[11px] tracking-[0.22em] uppercase text-maroon">
        Direct from produce to powder
      </p>
      <h2 className="mt-3 text-center font-serif text-4xl md:text-5xl">
        {featured ? "Our best products" : "Products"}
      </h2>
      {featured ? null : (
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`px-4 py-2 text-[12px] tracking-[0.12em] uppercase ${
                filter === item.value
                  ? "bg-maroon text-white"
                  : "border border-ink/15"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((product) => {
          const pack = product.packs?.[0];
          return (
            <article key={product.slug} className="flex flex-col border border-ink/10 bg-white">
              <Link href={`/products/${product.slug}`} className="group block flex-1">
                <div
                  className="relative aspect-[4/5] overflow-hidden"
                  style={{ backgroundColor: product.accent }}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : null}
                </div>
                <div className="p-5">
                  <p className="text-[11px] tracking-[0.14em] uppercase text-muted">
                    {pack
                      ? `${pack.size} · ${formatINR(pack.price)}`
                      : product.available
                        ? "In range"
                        : "On request"}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl">{product.name}</h3>
                  <p className="mt-2 text-sm text-muted">{product.description}</p>
                  {product.packs && product.packs.length > 1 ? (
                    <p className="mt-2 text-sm text-muted">
                      Also{" "}
                      {product.packs
                        .slice(1)
                        .map((item) => `${item.size} ${formatINR(item.price)}`)
                        .join(", ")}
                    </p>
                  ) : null}
                </div>
              </Link>
              {pack ? (
                <div className="px-5 pb-5">
                  <AddToCartButton
                    slug={product.slug}
                    packSize={pack.size}
                    label={`Add ${pack.size}`}
                    className="w-full bg-maroon px-4 py-3 text-[12px] tracking-[0.12em] uppercase text-white"
                  />
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
      {featured ? (
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-block border border-ink/20 px-6 py-3 text-[12px] tracking-[0.14em] uppercase"
          >
            View all products
          </Link>
        </div>
      ) : null}
    </section>
  );
}
