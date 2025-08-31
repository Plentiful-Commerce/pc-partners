import { Award, Briefcase, CheckCircle, Clock, Users, Zap } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";
import type { BulletPointColumnsData } from "@/components/LandingTemplate";

export const metadata = {
  title: "Stop Babysitting Developers. Start Scaling Your Agency.",
  description:
    "Tired of sloppy code and missed deadlines? Get a scalable, on-time white-label Shopify partner. We build. You scale. Your clients win.",
};

export default function MarketingDevPage() {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-[#B86B2B]" />, // Reclaim Your Time
      title: "Reclaim Your Time",
      text: "Get pixel-perfect code you can trust, delivered on time. Free up your team from technical QA and focus on what you do best: marketing, strategy, and growing your agency.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#B86B2B]" />, // Delight Your Clients
      title: "Delight Your Clients",
      text: "Ve aren't just coders; we're Shopify strategists. Leverage our 5+ years of deep Shopify expertise. We don't just build; we provide strategic insights to ensure your clients get a store that's fast, scalable, and built for conversion.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#B86B2B]" />, // Scale with Confidence
      title: "Scale with Confidence",
      text: "Onboard new e-commerce clients knowing you have a reliable, professional, and completely discrete development partner ready to execute flawlessly under your brand.",
    },
  ];

  const processColumns = [
    {
      icon: <Zap className="h-8 w-8 text-[#B86B2B]" />,
      title: "Plug Into Your System",
      text: "We onboard into your existing tools like Slack, Asana, Trello, ClickUp, or Monday. Prefer to keep it external? Use our simple ticketing system for new requests.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[#B86B2B]" />,
      title: "Define the Task",
      text: "Drop a request with the brief, goals, and deadline. We'll quickly clarify any requirements and provide a transparent quote before work begins.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#B86B2B]" />,
      title: "Consider it Done",
      text: "We deliver clean, tested code on time. You get a clear video demo via Loom (and a writen guide if needed) with every delivery, so you never have to scramble to remember what a change was for. We handle the details; you focus on the client.",
    },
  ];

  const painPoints = [
    {
      icon: <Clock className="h-7 w-7 text-[#B86B2B]" />, // Profit Bleeding from QA?
      title: "Profit Bleeding from QA?",
      text: "Every hour your team spends identifying and fixing sloppy bugs is an hour you can't bill. Your top talent is trapped in project management hell instead of driving client results and winning new business.",
    },
    {
      icon: <Briefcase className="h-7 w-7 text-[#B86B2B]" />, // The 11 PM "Is It Done?" Panic?
      title: "Losing sleep over Deadlines?",
      text: "Unreliable freelancers and missed deadlines put your client accounts and your agency's reputation at risk",
    },
    {
      icon: <Award className="h-7 w-7 text-[#B86B2B]" />, // Falling Behind the Shopify Curve?
      title: "Falling Behind the Shopify Curve?",
      text: "Shopify ships over 100 platform updates a year. Outdated tech means slow sites, lost sales for your client, and your agency looking out of touch. Can your current developers truly keep up?",
    },
  ];

  const bulletPointColumns: BulletPointColumnsData = {
    title: "Your On-Demand Shopify Taskforce",
    subtitle:
      "From urgent fixes to large-scale builds, we are the only Shopify development partner you'll ever need.",
    columns: [
      {
        heading: "For Your Marketing & Design Teams",
        items: [
          {
            title: "Platform Migrations",
            description:
              "Seamlessly moving stores to Shopify or Shopify Plus with zero data loss.",
          },
          {
            title: "Landing Page Development",
            description: "High-converting pages, coded to spec.",
          },
          {
            title: "Full Site Builds & Redesigns",
            description:
              "Bringing your ambitious creative vision to life with flawless code.",
          },
          {
            title: "Proactive Monthly Maintenance",
            description:
              "Handling bugs, app installs, and feature tweaks so you don't have to.",
          },
          {
            title: "Page Speed Optimization",
            description:
              "Passing Core Web Vitals to improve UX and conversions.",
          },
          {
            title: "Branded Transactional Emails",
            description:
              "Customizing Shopify, Klaviyo, and Attentive emails to match the brand perfectly.",
          },
        ],
      },
      {
        heading: "For Your SEO Team",
        items: [
          {
            title: "Full SEO Audit Implementation",
            description:
              "Executing technical recommendations from your SEO strategists with precision.",
          },
          {
            title: "International Domains Setup",
            description:
              "Expertly advise and implement the best SEO strategy for your multi-national clients to keep search engines happy",
          },
          {
            title: "Google Shopping Snippets",
            description:
              "Implement complex rich text snippets to bring the depth of your clients' products to Google",
          },
          {
            title: "Accessibility (A11Y) Compliance",
            description:
              "Ensuring sites are usable for all customers and meet WCAG standards.",
          },
        ],
      },
    ],
  };

  const partnershipsCards = [
    {
      image: "/marketing-refresh-logo.png", // Add image URL or import here if available
      agency: "MarketingRefresh.com",
      client: "Wood Finishers Depot",
      challenge:
        "The client wanted to focus more heavily on ecommerce but was trapped on the clunky outdated platform, OSCommerce. It was killing their marketing potential and operational efficiency. ",
      solution:
        "We executed a full-scale platform migration to Shopify as well as a redesign, ensuring zero data loss or customer disruption. We continue to provide proactive monthly maintenance, acting as their dedicated dev team since 2023.",
    },
    {
      image: "/structural-seo-logo.webp", // Add image URL or import here if available
      agency: "StructuralSEO.com.au",
      client: "Nomad the Label",
      challenge:
        "The client had a lot of duplicate content and products that were confusing search engines. They needed a developer to implement their SEO audit properly without impact SEO traffic.",
      solution:
        "Working directly with the SEO agency, we implemented their technical audit with precision. We successfully reduced the amount of duplicate products, collections and content significantly, as well as clean up header code and implement custom breadcrumbs.",
    },
  ];

  return (
    <>
      <LandingTemplate
        pageTitle={metadata.title}
        metaDescription={metadata.description}
        hero={{
          pre: "Stop Babysitting Developers. Start",
          highlight: "Scaling Your Agency.",
          post: "",
          subline:
            "Tired of sloppy code and missed deadlines? Get a scalable, on-time white-label Shopify partner. We build. You scale. Your clients win.",
        }}
        features={features}
        painPoints={painPoints}
        bulletPointColumns={bulletPointColumns}
        partnershipsInAction={{
          title: "Our Partnerships in Action",
          cards: partnershipsCards,
        }}
        featuresHeading="Why Marketing and SEO Agencies Trust Us for Shopify Development"
        featuresSubheading="We empower you to deliver exceptional results for your e-commerce clients."
        processColumns={processColumns}
        processHeading="Seamless Integration. Zero Friction."
        processSubheading="We adapt to your workflow, not the other way around. Here's how simple it is."
      />
    </>
  );
}
