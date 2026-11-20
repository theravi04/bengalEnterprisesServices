
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  const isActive = (href) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  // Close menu on Escape or desktop resize
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const mq = window.matchMedia("(min-width: 768px)");

    const handleResize = (e) => {
      if (e.matches) setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    mq.addEventListener("change", handleResize);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      mq.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          isHome ? "absolute left-0" : "sticky"
        } top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 ${
          isHome
            ? "border-white/10 bg-black/10 text-white"
            : "border-gray-200 bg-white/95 text-gray-900"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10"
        >
          {/* Logo and Company Name */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <div className="relative h-10 w-16 sm:h-12 sm:w-20">
              <Image
                src="/images/logo.svg"
                alt="BE&S Logo"
                fill
                priority
                className="object-contain"
                sizes="80px"
              />
            </div>

            {/* Desktop Company Name */}
            <span className="hidden text-lg tracking-tight md:inline-block lg:text-2xl">
              Bengal Enterprises &amp; Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex lg:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-lg border-2 px-5 py-2.5 text-base font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0096c7]/50 lg:px-6 lg:text-lg ${
                  isHome
                    ? isActive(link.href)
                      ? "border-white/70 bg-white/15 text-white"
                      : "border-transparent text-white hover:border-white/60 hover:bg-white/10"
                    : isActive(link.href)
                      ? "border-[#0096c7] bg-sky-50 text-[#0096c7]"
                      : "border-transparent text-gray-600 hover:border-[#0096c7] hover:bg-sky-50/60 hover:text-[#0096c7]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`relative flex h-10 w-10 items-center justify-center rounded-lg border transition-colors md:hidden ${
              isHome
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-gray-200 text-gray-900 hover:bg-gray-100"
            }`}
          >
            <Menu
              size={24}
              strokeWidth={1.8}
              className={`absolute transition-all duration-300 ${
                open
                  ? "rotate-90 scale-50 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <X
              size={24}
              strokeWidth={1.8}
              className={`absolute transition-all duration-300 ${
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-50 opacity-0"
              }`}
            />
          </button>
        </nav>

        {/* Mobile Transparent Dropdown */}
        <div
          id="mobile-menu"
          aria-hidden={!open}
          className={`absolute left-0 top-full w-full origin-top border-t shadow-xl backdrop-blur-2xl transition-[opacity,transform,visibility] duration-300 ease-out md:hidden ${
            isHome
              ? "border-white/15 bg-black/30 text-white"
              : "border-gray-200/40 bg-white/70 text-gray-900"
          } ${
            open
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto px-5 py-5 sm:px-8">
            <div className="flex flex-col items-end gap-2">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={open ? 0 : -1}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  style={{
                    transitionDelay: open ? `${i * 40}ms` : "0ms",
                  }}
                  className={`w-full max-w-[220px] rounded-lg border-2 px-4 py-3.5 text-right text-base font-medium transition-all duration-300 ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-1 opacity-0"
                  } ${
                    isHome
                      ? isActive(link.href)
                        ? "border-white/60 bg-white/15 text-white"
                        : "border-transparent text-white hover:border-white/50 hover:bg-white/10"
                      : isActive(link.href)
                        ? "border-[#0096c7] bg-sky-50/70 text-[#0096c7]"
                        : "border-transparent text-gray-700 hover:border-[#0096c7] hover:bg-sky-50/60 hover:text-[#0096c7]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Background Overlay */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={-1}
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      />
    </>
  );
}
