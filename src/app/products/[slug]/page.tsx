import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/site";
import Link from "next/link";

export function generateStaticParams() {
  return products.map((item) => ({ slug: item.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <article className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
      <div
        className="relative min-h-[420px]"
        style={{ backgroundColor: product.accent }}
      >
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
      </div>
      <div>
        <p className="text-[11px] tracking-[0.18em] uppercase text-maroon">
          {product.category}
        </p>
        <h1 className="mt-3 font-serif text-5xl">{product.name}</h1>
        <p className="mt-5 text-lg text-muted">{product.description}</p>
        <p className="mt-4 text-sm text-muted">
          Specification available on request. We do not publish values that
          have not been established.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/inquire?product=${product.slug}`}
            className="bg-maroon px-6 py-3 text-[12px] tracking-[0.12em] uppercase text-white"
          >
            Request sample
          </Link>
          <Link
            href="/products"
            className="border border-ink/20 px-6 py-3 text-[12px] tracking-[0.12em] uppercase"
          >
            All products
          </Link>
        </div>
      </div>
    </article>
  );
}
