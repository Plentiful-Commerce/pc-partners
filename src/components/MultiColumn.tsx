import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export interface MultiColumnItem {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface MultiColumnProps {
  heading: string;
  subheading: string;
  columns: MultiColumnItem[];
  iconNumber?: boolean;
}

const MultiColumn: React.FC<MultiColumnProps> = ({
  heading,
  subheading,
  columns,
  iconNumber = false,
}) => (
  <section className="py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)]">
    <div className="container mx-auto px-6 max-w-[1140px]">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 font-heading capitalize text-[var(--color-secondary)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {heading.includes(".") ? (
          <>
            {heading.split(".")[0]}.
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            {heading.split(".")[1]?.trim()}
          </>
        ) : (
          heading
        )}
      </h2>
      <p className="font-bold text-center mb-6 md:mb-12 font-text capitalize text-[var(--color-secondary)]">
        {subheading}
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {columns.map(({ icon, title, text }, index) => (
          <Card key={title} className="card h-full">
            <CardContent className="p-8 flex flex-col items-center gap-4 text-center">
              <div
                className="icon flex items-center justify-center bg-[var(--color-accent-light,rgba(255,153,0,0.10))] p-5 rounded-full mb-2"
                style={{ width: 64, height: 64 }}
              >
                {iconNumber ? (
                  <span
                    className="font-bold text-[#B86B2B]"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "2rem",
                    }}
                  >
                    {index + 1}
                  </span>
                ) : (
                  icon
                )}
              </div>
              <h3
                className="text-xl font-semibold font-heading capitalize text-[var(--color-secondary)] mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h3>
              <p
                className="opacity-80 leading-relaxed text-base font-body text-[var(--color-neutral-dark)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default MultiColumn;
