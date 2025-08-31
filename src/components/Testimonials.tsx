import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Jocelyn is our go-to for delivering high-quality Shopify sites. She excels at scoping projects, providing clear pricing, and mapping out the path to success. She is extremely dependable, patient, and a creative partner in meeting our clients' needs.",
    name: "Tiffany McArthur",
    role: "VP of Account Stratgy, Marketing Refresh",
    initials: "TM",
    link: "https://plentifulcommerce.com/2023/08/15/shopify-migration-services-an-industrial-wood-finishing-site-story/",
    buttonText: "Read the Case Study",
  },
  {
    quote:
      "We've been with Plentiful Commerce for over 6 months and are extremely happy. Jocelyn is always responsive, her deep understanding of Shopify is invaluable, and she even provides how-to videos. A reliable, knowledgeable partner for store management and strategic advice. I highly recommend them.",
    name: "Denise Kakas",
    role: "WHO Digital Strategy",
    initials: "DK",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[var(--section-padding-mobile)] md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 font-heading capitalize mb-[var(--section-padding-mobile)]">
          What Our Agency Partners Say
        </h2>
        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-2xl shadow-lg  bg-white">
              <CardContent className="m-5 px-5 flex flex-col border-0 border-l-4 gap-6 h-full border-[#B86B2B]">
                <blockquote
                  className="italic text-xl leading-relaxed text-gray-800 font-serif"
                  style={{ fontFamily: "Georgia, Times, serif" }}
                >
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-4 mt-2">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#B86B2B] text-white font-bold text-lg shrink-0">
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-bold text-[var(--color-secondary,#222)] text-base mb-1">
                      {t.name}
                    </div>
                    <div className="text-sm opacity-80 font-normal">
                      {t.role}
                    </div>
                  </div>
                </div>
              </CardContent>
              {t.link && (
                <div className="flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="button button-primary"
                    style={{ margin: 0 }}
                  >
                    <a href={t.link} target="_blank" rel="noopener noreferrer">
                      <div style={{ paddingTop: 2 }}>
                        {t.buttonText || "Learn More"}{" "}
                      </div>
                    </a>
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
