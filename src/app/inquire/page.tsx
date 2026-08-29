import { Suspense } from "react";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata = { title: "Request a Quote" };

export default function InquirePage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
      <div>
        <p className="text-[11px] tracking-[0.22em] uppercase text-maroon">
          Bulk orders
        </p>
        <h1 className="mt-3 font-serif text-5xl">Tell us what you’re sourcing.</h1>
        <p className="mt-4 text-muted">
          Share the ingredient and quantity. We review every requirement before
          we respond.
        </p>
      </div>
      <Suspense>
        <InquiryForm />
      </Suspense>
    </section>
  );
}
