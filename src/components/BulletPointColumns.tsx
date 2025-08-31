import React, { useState } from "react";

interface BulletPointColumnsProps {
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

const BulletPointColumns: React.FC<BulletPointColumnsProps> = ({
  title,
  subtitle,
  columns,
}) => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      className="py-[var(--section-padding-mobile)] md:py-12"
      style={{
        background: "var(--color-section-bg, #f5f5f5)",
      }}
    >
      <style jsx>{`
        .desktop-layout {
          display: none;
        }
        .mobile-layout {
          display: block;
        }
        @media (min-width: 768px) {
          .desktop-layout {
            display: flex;
          }
          .mobile-layout {
            display: none;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
        <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, margin: 0 }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>{subtitle}</p>
          )}
        </header>

        {/* Desktop Layout */}
        <div
          className="desktop-layout"
          style={{
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
                {col.items.map(
                  (item: {
                    title: string;
                    description: string;
                    icon?: React.ReactNode;
                  }) => (
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
                        <strong style={{ fontWeight: 600 }}>
                          {item.title}
                        </strong>
                        : <span>{item.description}</span>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Dropdown Layout */}
        <div
          className="mobile-layout"
          style={{ gap: "1rem", flexDirection: "column" }}
        >
          {columns.map((col, idx) => (
            <div key={idx}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  padding: "1rem 0",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {col.heading}
              </h2>
              <div
                key={col.heading}
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  marginBottom: "1rem",
                }}
              >
                <button
                  onClick={() => toggleDropdown(idx)}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    textAlign: "left",
                    fontWeight: 600,
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: 0,
                  }}
                >
                  <span>Explore services</span>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: openDropdowns[idx]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <polyline points="6,9 12,15 18,9" />
                  </svg>
                </button>

                {openDropdowns[idx] && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {col.items.map((item) => (
                        <li
                          key={item.title}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "1rem",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--color-accent, #d97706)",
                              marginRight: "1rem",
                              fontSize: "1.2rem",
                              marginTop: 2,
                              flexShrink: 0,
                            }}
                          >
                            {item.icon || (
                              <svg
                                width="25"
                                height="25"
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
                            <strong style={{ fontWeight: 600 }}>
                              {item.title}
                            </strong>
                            : <span>{item.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BulletPointColumns;
