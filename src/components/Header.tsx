import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Brown line above header */}
      <div className="bg-[rgba(182,107,53,1)] header-brown-line"></div>

      <header className="bg-white py-6">
        <div className="container mx-auto max-w-[1140px] px-6">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-gray-700 hover:text-[rgb(182,107,53)] transition-colors font-medium text-[22px]"
              >
                SERVICES
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[rgb(182,107,53)] transition-colors font-medium text-[22px]"
              >
                CASE STUDIES
              </Link>
            </nav>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center md:flex-none">
              <Link href="/" className="flex items-center">
                <Image
                  src="/plentiful-commerce-logo-full-color-rgb-2000px_72ppi.png"
                  alt="Plentiful Commerce - Shopify Development"
                  width={218}
                  height={106}
                  className="w-auto header-logo"
                />
              </Link>
            </div>

            {/* Right Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-gray-700 hover:text-[rgb(182,107,53)] transition-colors font-medium text-[22px]"
              >
                PORTFOLIO
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[rgb(182,107,53)] transition-colors font-medium text-[22px]"
              >
                BLOG
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[rgb(182,107,53)] transition-colors font-medium text-[22px]"
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
