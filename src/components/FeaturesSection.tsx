import React from "react";

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeaturesColumn {
  heading: string;
  items: FeatureItem[];
}

interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  columns: [FeaturesColumn, FeaturesColumn];
}

const BulletPointColumns: React.FC<FeaturesSectionProps> = ({
  title,
  subtitle,
  columns,
}) => (
  <section
    style={{
      background: "var(--color-section-bg, #f5f5f5)",
      padding: "3rem 0",
    }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
      <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, margin: 0 }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>{subtitle}</p>
        )}
      </header>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {columns.map((col) => (
          <div key={col.heading} style={{ flex: "1 1 350px", minWidth: 300 }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}
            >
              {col.heading}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.items.map((item) => (
                <li
                  key={item.title}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-accent, #d97706)",
                      marginRight: "1rem",
                      fontSize: "1.5rem",
                      marginTop: 2,
                    }}
                  >
                    {item.icon || (
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    )}
                  </span>
                  <div>
                    <strong style={{ fontWeight: 600 }}>{item.title}</strong>:{" "}
                    <span>{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BulletPointColumns;
