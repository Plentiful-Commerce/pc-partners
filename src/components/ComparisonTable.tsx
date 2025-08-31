import { CheckCircle, XCircle } from "lucide-react";
import React from "react";

const rows = [
  {
    feature: "Strategy",
    pc: {
      icon: (
        <CheckCircle className="inline h-6 w-6 text-[#B86B2B] mr-2 align-middle" />
      ),
      text: "Growth strategy in every project",
    },
    tf: {
      icon: (
        <XCircle className="inline h-6 w-6 text-gray-400 mr-2 align-middle" />
      ),
      text: "Blindly follows tickets",
    },
  },
  {
    feature: "Expertise",
    pc: {
      icon: (
        <CheckCircle className="inline h-6 w-6 text-[#B86B2B] mr-2 align-middle" />
      ),
      text: "Elite Shopify-only specialists",
    },
    tf: {
      icon: (
        <XCircle className="inline h-6 w-6 text-gray-400 mr-2 align-middle" />
      ),
      text: "Part-time platform generalists",
    },
  },
  {
    feature: "Communication",
    pc: {
      icon: (
        <CheckCircle className="inline h-6 w-6 text-[#B86B2B] mr-2 align-middle" />
      ),
      text: "Proactive & consistently clear",
    },
    tf: {
      icon: (
        <XCircle className="inline h-6 w-6 text-gray-400 mr-2 align-middle" />
      ),
      text: "Requires constant follow-ups",
    },
  },
  {
    feature: "Onboarding",
    pc: {
      icon: (
        <CheckCircle className="inline h-6 w-6 text-[#B86B2B] mr-2 align-middle" />
      ),
      text: "Seamless, fast & easy",
    },
    tf: {
      icon: (
        <XCircle className="inline h-6 w-6 text-gray-400 mr-2 align-middle" />
      ),
      text: "Complicated & time-consuming",
    },
  },
  {
    feature: "Accountability",
    pc: {
      icon: (
        <CheckCircle className="inline h-6 w-6 text-[#B86B2B] mr-2 align-middle" />
      ),
      text: "Takes full ownership of outcomes",
    },
    tf: {
      icon: (
        <XCircle className="inline h-6 w-6 text-gray-400 mr-2 align-middle" />
      ),
      text: "Disappears or blames others",
    },
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-[var(--section-padding-mobile)] md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 font-heading capitalize">
          The Difference Between a Coder and a Partner
        </h2>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-lg">
                  Feature
                </th>
                <th className="py-3 px-4 font-semibold text-lg text-[#B86B2B]">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8"></div>
                    <span className="ml-2">Plentiful Commerce</span>
                  </div>
                </th>
                <th className="py-3 px-4 font-semibold text-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8"></div>
                    <span className="ml-2">Typical Freelancers</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-t">
                  <td className="py-3 px-4 font-semibold text-[var(--color-secondary,#222)]">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-[var(--color-secondary,#222)]">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 flex justify-center">
                        {row.pc.icon}
                      </div>
                      <span className="text-base font-medium ml-2">
                        {row.pc.text}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 flex justify-center">
                        {row.tf.icon}
                      </div>
                      <span className="text-base font-medium ml-2">
                        {row.tf.text}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {rows.map((row) => (
            <div
              key={row.feature}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="font-semibold text-lg text-[var(--color-secondary,#222)] mb-4 text-center">
                {row.feature}
              </h3>

              <div className="space-y-4">
                {/* Plentiful Commerce */}
                <div
                  className="rounded-lg p-4 border-l-4 border-[#B86B2B]"
                  style={{ backgroundColor: "rgba(233, 178, 64, 0.1)" }}
                >
                  <h4 className="font-semibold text-[#B86B2B] mb-2">
                    Plentiful Commerce
                  </h4>
                  <div className="flex items-center text-[var(--color-secondary,#222)]">
                    <div className="flex-shrink-0 w-8 flex justify-center">
                      {row.pc.icon}
                    </div>
                    <span className="text-base font-medium ml-2">
                      {row.pc.text}
                    </span>
                  </div>
                </div>

                {/* Typical Freelancers */}
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                  <h4 className="font-semibold text-gray-600 mb-2">
                    Typical Freelancers
                  </h4>
                  <div className="flex items-center text-gray-600">
                    <div className="flex-shrink-0 w-8 flex justify-center">
                      {row.tf.icon}
                    </div>
                    <span className="text-base font-medium ml-2">
                      {row.tf.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-[#B86B2B] hover:bg-[#e9b240] text-white font-bold py-4 px-8 rounded-lg text-lg shadow transition-colors duration-150 cursor-pointer"
          >
            <div style={{ paddingTop: 2 }}>Secure My Reliable Dev Partner</div>
          </a>
        </div>
      </div>
    </section>
  );
}
