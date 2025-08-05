"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinksLeft = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-services", label: "Our Services", hasDropdown: true },
];

const navLinksRight = [
  { href: "/3d-walkthrough", label: "3D Walkthrough" },
  { href: "/tools", label: "Tools" },
  { href: "/contact-us", label: "Contact Us" },
];

const allMobileLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-services", label: "Our Services" },
  { href: "/house-land-search", label: "House & Land Search" },
  { href: "/3d-walkthrough", label: "3D Walkthrough" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/tools", label: "Tools" },
  { href: "/new-home-designs-search", label: "New Home Designs Search" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="bg-primary-dark fixed top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div className="flex items-center justify-between h-24">
            {/* Left Side */}
            <div className="flex-1 flex justify-start">
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinksLeft.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white text-[16px] font-medium hover:text-warm-beige transition-colors flex items-center group"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="ml-1 h-5 w-5 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>
                ))}
              </nav>
              <div className="lg:hidden flex items-start justify-center">
                <Link href="/" onClick={closeMobileMenu} className="group">
                  <Image
                    src="/logo1.png"
                    alt="Site Logo"
                    width={450}
                    height={144}
                    className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* Center Logo (Desktop) */}
            <div className="hidden lg:flex flex-none justify-center items-start pt-2">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/logo1.png"
                  alt="Site Logo"
                  width={520}
                  height={156}
                  className="h-32 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:brightness-110"
                  priority
                />
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex justify-end">
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinksRight.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white text-[16px] font-medium hover:text-warm-beige transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-white p-2"
                  aria-label="Toggle menu"
                >
                  <Menu size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-primary-dark z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-24">
            <Link href="/" onClick={closeMobileMenu} className="flex items-center group">
              <Image
                src="/logo1.png"
                alt="Site Logo"
                width={450}
                height={144}
                className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col mt-4">
            {allMobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-lg py-4 border-b border-[rgba(255,255,255,0.1)] last:border-b-0 hover:text-warm-beige transition-colors"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}