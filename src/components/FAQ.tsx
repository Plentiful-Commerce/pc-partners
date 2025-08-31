import { useState } from "react";

const faqs = [
  {
    q: "Will my client know you exist?",
    a: "No, unless you want them to. We work 100% white-label under your brand, in your tools. Your client never sees our name.",
  },
  {
    q: "How fast is your turnaround?",
    a: "It depends. If it's a small task, the turnaround is about 48-72hrs for us to work on and internally QA before presenting to you for final feedback. If you need questions answered for your clients, we'll reply within 24hrs. Most projects are delivered in 1-2 weeks, depending on scope. We always clarify timelines up front.",
  },
  {
    q: "Are you just for big projects?",
    a: "Nope. We handle everything from small tweaks to full builds. No project is too small or too complex.",
  },
  {
    q: "Do I have to commit to a long-term contract?",
    a: "No, you can either partner with us for ad-hoc projects as you need (for busy season, or for a specific project), or you can commit to a monthly retainer so you can better estimate your costs. We're flexible to fit your needs.",
  },
  {
    q: "Our agency doesn't have a Shopify Partners account - how does this work?",
    a: "If you're just added to the Shopify store as a staff account, then we'll need to send a collaborator request so that our team can access the store. In this case the client will see that a request is coming from us. If you have your own Shopify Partners account you can add us under your organization in order for us to gain access to the store. If we're working together on a new Shopify build or platform migration, then we will create a development store for the client and transfer it over to the client and add you as a staff member.",
  },
];

export default function FAQ() {
  // Track open state for arrow rotation
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[var(--section-padding-mobile)] md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 font-heading capitalize">
          No Surprises. Just Partnership.
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              className="border rounded-lg bg-gray-100"
              open={openIndex === i}
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === i ? null : i);
              }}
            >
              <summary className="flex items-center justify-between font-semibold cursor-pointer px-6 py-5 text-lg select-none">
                <span>{faq.q}</span>
                <svg
                  className={`transition-transform duration-200 ml-4 h-6 w-6 text-gray-500 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              {openIndex === i && (
                <div className="mt-2 opacity-80 px-6 pb-4 text-base">
                  {faq.a}
                </div>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
