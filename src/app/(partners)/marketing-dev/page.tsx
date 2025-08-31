import { Code2, Rocket, Users } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";
import type { BulletPointColumnsData } from "@/components/LandingTemplate";

export const metadata = {
  title: "White-label Web Dev for Marketing Agencies",
  description:
    "Offer high-end websites without hiring developers. Our senior engineers build, test, and hand-off—100 % under your brand.",
};

export default function MarketingDevPage() {
  const features = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Full-stack builds",
      text: "Shopify, Next.js, custom integrations—handled end-to-end.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Ship in days",
      text: "Rapid sprints mean you can upsell dev work without delays.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Invisible label",
      text: "We join your Slack / email with your domain.",
    },
  ];

  const bulletPointColumns: BulletPointColumnsData = {
    title: "Why Agencies Choose Us",
    subtitle:
      "We handle the dev, you handle the client. No more missed deadlines or code headaches.",
    columns: [
      {
        heading: "What You Get",
        items: [
          {
            title: "Full-stack builds",
            description:
              "Shopify, Next.js, custom integrations—handled end-to-end.",
          },
          {
            title: "Rapid sprints",
            description:
              "Ship in days, not weeks. Upsell dev work without delays.",
          },
          {
            title: "Invisible label",
            description:
              "We join your Slack/email with your domain. 100% white-label.",
          },
        ],
      },
      {
        heading: "Why It Matters",
        items: [
          {
            title: "No dev hiring",
            description:
              "Offer high-end sites without recruiting or managing engineers.",
          },
          {
            title: "Senior-only team",
            description: "No juniors. No hand-holding. Just results.",
          },
          {
            title: "Zero client risk",
            description:
              "We never poach, pitch, or contact your clients directly.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <LandingTemplate
        pageTitle={metadata.title}
        metaDescription={metadata.description}
        hero={{
          pre: "Senior-level dev firepower for",
          highlight: "marketing agencies",
          post: "that need a real dev partner.",
          subline:
            "Launch blazing-fast sites while you focus on strategy & design.",
        }}
        features={features}
        formAction={process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "#"}
        bulletPointColumns={bulletPointColumns}
        featuresHeading="The Dev Partner That Makes You Look Brilliant"
        featuresSubheading="We empower you to deliver exceptional results for your e-commerce clients."
      />
    </>
  );
}
