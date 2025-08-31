"use client";
import Script from "next/script";
import { useEffect } from "react";
<Script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.10/iframeResizer.min.js" />;

/*
 * LandingTemplate.tsx – reusable React client component
 * Works with the Next.js 15 App Router.
 * Place this file at:  src/components/LandingTemplate.tsx
 * Each landing‑page route will import it and supply copy / data.
 */

import Head from "next/head";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import BulletPointColumns from "@/components/BulletPointColumns";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import PartnershipsInAction, {
  PartnershipCard,
} from "@/components/PartnershipsInAction";
import MultiColumn, { MultiColumnItem } from "@/components/MultiColumn";
import Image from "next/image";
import Header from "@/components/Header";

export interface BulletPointColumnsData {
  title: string;
  subtitle?: string;
  columns: [
    {
      heading: string;
      items: { title: string; description: string; icon?: React.ReactNode }[];
    },
    {
      heading: string;
      items: { title: string; description: string; icon?: React.ReactNode }[];
    }
  ];
}

export interface LandingProps {
  pageTitle: string;
  metaDescription: string;
  hero: {
    pre: string;
    highlight: string;
    post: string;
    subline: string;
  };
  featuresHeading?: string;
  featuresSubheading?: string;
  features?: MultiColumnItem[];
  processHeading?: string;
  processSubheading?: string;
  processColumns?: MultiColumnItem[];
  formAction: string;
  painPoints?: { icon: React.ReactNode; title: string; text: string }[];
  bulletPointColumns?: BulletPointColumnsData;
  partnershipsInAction?: {
    title: string;
    cards: PartnershipCard[];
  };
}

export default function LandingTemplate({
  pageTitle,
  metaDescription,
  hero,
  features,
  formAction,
  painPoints,
  bulletPointColumns,
  partnershipsInAction,
  featuresHeading,
  featuresSubheading,
  processHeading,
  processSubheading,
  processColumns,
}: LandingProps) {
  useEffect(() => {
    const moxieFrame = document.getElementById(
      "moxie-marketing--seo-agency-white-label-form"
    ) as HTMLIFrameElement | null;

    if (moxieFrame) {
      moxieFrame.src =
        "https://hello.withmoxie.com/01/plentiful-commerce/marketing--seo-agency-white-label-form?inFrame=true&sourceUrl=" +
        encodeURIComponent(window.location.href);

      setTimeout(() => {
        // @ts-ignore since this comes from iframe-resizer
        if (window.iFrameResize) {
          // @ts-ignore
          window.iFrameResize(
            {
              heightCalculationMethod: "min",
              sizeWidth: true,
              sizeHeight: true,
              log: false,
              checkOrigin: false,
            },
            "#moxie-marketing--seo-agency-white-label-form"
          );
        }
      }, 100);

      window.addEventListener(
        "message",
        (event) => {
          if (
            event.origin === "https://hello.withmoxie.com" &&
            event.data &&
            event.data.startsWith("[Redirect]")
          ) {
            const url = event.data.slice(10);
            window.location.href = url;
          }
        },
        false
      );
    }
  }, []);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--color-background)] pb-[var(--section-padding-mobile)] pt-[var(--section-padding-mobile)] md:pb-[var(--section-padding-desktop)] md:pt-[var(--section-padding-desktop)] text-[var(--color-neutral-dark)]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 max-w-[1140px]">
          <div className="flex-1 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl font-heading capitalize leading-[1.25]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {hero.pre} <br className="md:hidden" />
              <span className="underline decoration-[var(--color-accent)] text-[var(--color-primary)]">
                {hero.highlight}
              </span>{" "}
              {hero.post}
            </motion.h1>
            <p
              className="mt-6 max-w-xl text-lg opacity-90 font-body font-normal leading-[1.6] text-[var(--color-secondary)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {hero.subline}
            </p>
            <div className="mt-4 md:mt-8 flex gap-3 md:gap-6 flex-wrap justify-start items-center">
              <Button
                size="lg"
                className="button button-primary flex items-center gap-2 justify-center whitespace-nowrap w-full md:w-auto cursor-pointer"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <div style={{ paddingTop: 1 }} className="md:pt-0.5">
                  Claim My Free Agency Growth Session
                </div>
                <ArrowRight className="icon" size={20} color="white" />
              </Button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="justify-center items-center hidden md:flex">
            <Image
              src="/shopify_logo_whitebg.svg"
              alt="Hero image"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      {painPoints && (
        <section className="bg-[var(--color-surface)] py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)]">
          <div className="container mx-auto px-6 max-w-[1140px] flex flex-col md:flex-row items-center gap-16">
            {/* Left: Text */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-8 text-[var(--color-neutral-dark)] leading-tight">
                Is Your Dev Process Killing Your Margins?
              </h2>
              <ul className="flex flex-col gap-8">
                {painPoints.map(({ icon, title, text }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="mt-1">{icon}</span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[var(--color-secondary)] mb-1">
                        {title}
                      </h3>
                      <p className="text-base text-[var(--color-neutral-dark)] opacity-90 leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: Emoji in circle */}
            <div className="flex-1 justify-end items-center hidden md:flex">
              <div className="relative flex items-center justify-center">
                <Image
                  className="dark:invert rounded-lg"
                  src="/0V8A2791-Edit-11.jpg"
                  alt="Vercel logomark"
                  width={400}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {features && (
        <MultiColumn
          heading={
            featuresHeading ||
            "The Expert Partner That Makes You Look Brilliant"
          }
          subheading={
            featuresSubheading ||
            "We empower you to deliver exceptional results for your e-commerce clients."
          }
          columns={features}
        />
      )}

      {bulletPointColumns && (
        <BulletPointColumns
          title={bulletPointColumns.title}
          subtitle={bulletPointColumns.subtitle}
          columns={bulletPointColumns.columns}
        />
      )}
      {partnershipsInAction && (
        <PartnershipsInAction
          title={partnershipsInAction.title}
          cards={partnershipsInAction.cards}
        />
      )}
      <Testimonials />
      {processColumns && (
        <MultiColumn
          iconNumber={true}
          heading={processHeading || "How we plug into your workflow"}
          subheading={
            processSubheading ||
            "Our process is designed for seamless agency hand-off and client success."
          }
          columns={processColumns}
        />
      )}
      <ComparisonTable />
      <FAQ />
      {/* Contact */}
      <section
        id="contact"
        className="py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)] bg-[var(--color-surface)]"
      >
        <div className="container mx-auto max-w-xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading capitalize text-[var(--color-secondary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Build a More Profitable Agency. Starting Today.
          </h2>
          <p
            className="text-center opacity-80 mb-8 font-body text-[var(--color-neutral-dark)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            One 15-minute call will save you hundreds of hours in project
            headaches and unlock thousands in new client revenue. Let&apos;s map
            out your growth.
          </p>
          <div style={{ width: "100%", minHeight: "500px" }}>
            {/* Load iframe-resizer script */}
            <Script
              src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.10/iframeResizer.min.js"
              strategy="afterInteractive"
            />
            {/* The actual iframe */}
            <iframe
              id="moxie-marketing--seo-agency-white-label-form"
              allowTransparency={true}
              style={{
                padding: 0,
                margin: 0,
                border: 0,
                maxWidth: "100%",
                minWidth: "100%",
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-surface)] py-10">
        <div className="container mx-auto px-6 text-center text-sm opacity-70 text-[var(--color-neutral-dark)]">
          © {new Date().getFullYear()} Plentiful Commerce. All rights reserved.
        </div>
      </footer>
    </>
  );
}
