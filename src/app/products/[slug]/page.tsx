import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  categoryLabels,
  contact,
  getProduct,
  getRelatedProducts,
  productSpecs,
  products,
} from "@/data/site";

export function generateStaticParams() {
  return products.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.detail,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);
  const overview = [
    ["Product name", product.name],
    ["Botanical name", product.botanicalName],
    ["Form", product.form],
    ["Origin", product.origin],
    ["Applications", product.applications.join(", ")],
    ["Pack size", product.packSize],
    ["MOQ", product.moq],
  ];

  return (
    <article>
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-14 md:grid-cols-2">
        <div
          className="relative min-h-[420px] bg-cream-deep"
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
            {categoryLabels[product.category]}
          </p>
          <h1 className="mt-3 font-serif text-5xl">{product.name}</h1>
          <p className="mt-5 text-lg text-muted">{product.detail}</p>
          <p className="mt-4 text-sm text-muted">
            {product.available
              ? "This product is part of the current TRUEFINE range. Commercial confirmation is made against each inquiry."
              : "This product is listed for inquiry. Availability is confirmed against your requirement."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/inquire?product=${product.slug}`}
              className="bg-maroon px-6 py-3 text-[12px] tracking-[0.12em] uppercase text-white"
            >
              Request sample
            </Link>
            <Link
              href={`/inquire?product=${product.slug}&intent=specification`}
              className="border border-ink/20 px-6 py-3 text-[12px] tracking-[0.12em] uppercase"
            >
              Request specifications
            </Link>
          </div>
          <a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`I would like to discuss ${product.name}.`)}`}
            className="mt-5 inline-block text-[12px] tracking-[0.14em] uppercase text-maroon"
          >
            Talk to our experts
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-serif text-4xl">Product overview</h2>
          <dl className="mt-8 border-t border-ink/10">
            {overview.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-ink/10 py-4 md:grid-cols-[220px_1fr] md:gap-8"
              >
                <dt className="text-[11px] tracking-[0.16em] uppercase text-muted">
                  {label}
                </dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-serif text-4xl">Specifications</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Specification available on request. Values are not published until
            they have been established for the product.
          </p>
          <div className="mt-8 overflow-x-auto border border-ink/10">
            <table className="w-full min-w-[520px] text-left">
              <thead className="bg-ink text-cream">
                <tr>
                  <th className="px-5 py-3 text-[11px] font-medium tracking-[0.16em] uppercase">
                    Parameter
                  </th>
                  <th className="px-5 py-3 text-[11px] font-medium tracking-[0.16em] uppercase">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody>
                {productSpecs.map((row) => (
                  <tr key={row.parameter} className="border-t border-ink/10 bg-white">
                    <td className="px-5 py-3">{row.parameter}</td>
                    <td className="px-5 py-3 text-muted">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-serif text-4xl">Related products</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group border border-ink/10 bg-cream"
                >
                  <div
                    className="relative aspect-[4/5] overflow-hidden"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] tracking-[0.14em] uppercase text-maroon">
                      {categoryLabels[item.category]}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                    <ul className="mt-3 space-y-1 text-sm text-muted">
                      {item.applications.map((application) => (
                        <li key={application}>{application}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
