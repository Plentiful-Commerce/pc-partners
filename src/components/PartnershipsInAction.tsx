import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export interface PartnershipCard {
  image?: string; // URL or static import
  agency: string;
  client: string;
  challenge: string;
  solution: string;
}

interface PartnershipsInActionProps {
  title: string;
  cards: PartnershipCard[];
}

const PartnershipsInAction: React.FC<PartnershipsInActionProps> = ({
  title,
  cards,
}) => (
  <section className="py-[var(--section-padding-mobile)] md:py-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-5 font-heading capitalize">
        {title}
      </h2>
      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {cards.map((card, idx) => (
          <Card key={idx} className="rounded-2xl shadow-xl">
            <CardContent className="flex flex-col gap-4">
              {card.image && (
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={card.image}
                    alt={card.agency + " logo"}
                    width={160}
                    height={80}
                    className="max-h-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}
              <div>
                <div className="font-bold text-[#B86B2B] text-lg pb-4 mb-5 border-b border-gray-200 text-center">
                  AGENCY PARTNER: {card.agency}
                </div>
                <div className="font-semibold text-lg text-[var(--color-secondary,#222)] mb-3">
                  CLIENT: <span className="font-bold">{card.client}</span>
                </div>
                <div className="mb-3">
                  <span className="font-bold">THE CHALLENGE:</span>{" "}
                  {card.challenge}
                </div>
                <div>
                  <span className="font-bold">OUR SOLUTION:</span>{" "}
                  {card.solution}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default PartnershipsInAction;
