
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Banquet Setup & Management",
    description:
      "Professional banquet arrangements, venue setup and complete banquet management for various occasions.",
    images: [
      "/images/banquet/1.jpg",
      "/images/banquet/2.jpg",
      "/images/banquet/3.jpg",
    ],
  },
  {
    id: 2,
    title: "Event Management",
    description:
      "Comprehensive event planning, coordination, decoration and execution for memorable occasions.",
    images: [
      "/images/event/1.jpeg",
      "/images/event/2.jpg",
      "/images/event/3.jpeg",
    ],
  },
  {
    id: 3,
    title: "Catering Services",
    description:
      "Quality catering arrangements and food and beverage services for different events and occasions.",
    images: [
      "/images/catering/c1.jpeg",
      "/images/catering/c2.jpg",
      "/images/catering/c3.jpeg",
    ],
  },
  {
    id: 4,
    title: "Hoarding & Advertising Services",
    description:
      "Advertising and hoarding solutions to support business visibility and promotional activities.",
    images: [
      "/images/hoarding/h1.jpg",
      "/images/hoarding/h2.jpg",
      "/images/hoarding/h3.jpg",
    ],
  },
  {
    id: 5,
    title: "Contract Services",
    description:
      "Reliable contract-based services and professional execution according to client requirements.",
    images: [
      "/images/contract/c1.jpg",
      "/images/contract/c2.jpg",
      "/images/contract/c3.jpeg",
    ],
  },
  {
    id: 6,
    title: "Festive Arrangements",
    description:
      "Creative festive decorations, themed setups, lighting and complete arrangements for festivals and special celebrations.",
    images: [
      "/images/festive/f1.jpg",
      "/images/festive/f2.jpg",
      "/images/festive/f3.jpg",
    ],
  },
  {
    id: 7,
    title: "Fair Arrangements",
    description:
      "Complete arrangements for fairs, exhibitions and public events, including stall setup, venue management and event coordination.",
    images: [
      "/images/fair/f1.jpg",
      "/images/fair/f2.jpg",
      "/images/fair/f3.jpg",
    ],
  },
];

export default function ServicesPage() {
  // Desktop selected service
  const [activeService, setActiveService] = useState(0);

  // Mobile slideshow state
  const [mobileSlide, setMobileSlide] = useState(0);

  // Image lightbox state
  const [lightbox, setLightbox] = useState(null);

  // Restore previously selected desktop service after mounting
  // This prevents server/client hydration mismatch
  useEffect(() => {
    const savedService = localStorage.getItem("activeService");

    if (savedService !== null) {
      const index = Number(savedService);

      if (
        Number.isInteger(index) &&
        index >= 0 &&
        index < services.length
      ) {
        setActiveService(index);
      }
    }
  }, []);

  // Desktop selected service
  const currentService = services[activeService];

  // Mobile service and image derived from current slide
  const mobileService = Math.floor(mobileSlide / 3);
  const mobileImage = mobileSlide % 3;

  // Mobile automatic image and service rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileSlide((prev) => (prev + 1) % (services.length * 3));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  // Desktop service selection
  const selectService = (index) => {
    setActiveService(index);
    localStorage.setItem("activeService", String(index));
  };

  // Mobile navigation
  const nextMobile = () => {
    setMobileSlide((prev) => {
      const nextService = (Math.floor(prev / 3) + 1) % services.length;
      return nextService * 3;
    });
  };

  const prevMobile = () => {
    setMobileSlide((prev) => {
      const previousService =
        (Math.floor(prev / 3) - 1 + services.length) % services.length;

      return previousService * 3;
    });
  };

  // Image lightbox - close using Escape key
  useEffect(() => {
    if (!lightbox) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [lightbox]);

  // Pause page scrolling when lightbox is open
  useEffect(() => {
    if (!lightbox) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox]);

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-5 pt-8 pb-14 sm:px-8 md:pt-10 md:pb-16 lg:px-12 lg:pt-12 lg:pb-20">

        {/* ================= HEADING ================= */}

        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0096c7]">
            What We Offer
          </p>

          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Services
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#0096c7]" />

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            Delivering professional solutions with quality, commitment and
            attention to detail.
          </p>
        </div>

        {/* ================= DESKTOP VIEW ================= */}

        <div className="hidden md:grid md:grid-cols-[0.85fr_1.5fr] md:items-center md:gap-10 lg:gap-16">

          {/* Left: Service List */}

          <div>
            <h2 className="mb-7 text-2xl font-bold text-gray-900">
              Our Expertise
            </h2>

            <div className="space-y-3">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => selectService(index)}
                  aria-pressed={activeService === index}
                  className={`flex w-full items-start justify-between gap-3 rounded-xl border p-4 text-left transition-all duration-300 ${
                    activeService === index
                      ? "border-[#0096c7] bg-sky-50 shadow-sm"
                      : "border-gray-200 hover:border-[#0096c7] hover:bg-gray-50"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <span
                      className={`block text-sm font-semibold lg:text-base ${
                        activeService === index
                          ? "text-[#0096c7]"
                          : "text-gray-700"
                      }`}
                    >
                      {service.title}
                    </span>

                    {/* Description appears below selected service */}

                    {activeService === index && (
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {service.description}
                      </p>
                    )}
                  </div>

                  <ChevronRight
                    size={19}
                    className={`mt-0.5 shrink-0 transition-transform ${
                      activeService === index
                        ? "translate-x-1 text-[#0096c7]"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Static Three Image Gallery */}

          <div className="min-w-0">
            <div className="mb-5">
              <p className="text-sm font-semibold text-[#0096c7]">
                Featured Service
              </p>

              <h2 className="mt-1 text-xl font-bold text-gray-900 lg:text-2xl">
                {currentService.title}
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {currentService.images.map((image, index) => (
                <button
                  key={`${activeService}-${index}`}
                  type="button"
                  onClick={() =>
                    setLightbox({
                      src: image,
                      title: currentService.title,
                    })
                  }
                  aria-label={`Enlarge ${currentService.title} image ${index + 1}`}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100"
                >
                  <Image
                    src={image}
                    alt={`${currentService.title} ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MOBILE VIEW ================= */}

        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">

            {/* Mobile Image */}

            <button
              type="button"
              onClick={() =>
                setLightbox({
                  src: services[mobileService].images[mobileImage],
                  title: services[mobileService].title,
                })
              }
              aria-label={`Enlarge ${services[mobileService].title} image`}
              className="relative block aspect-[4/5] w-full overflow-hidden bg-gray-100"
            >
              <Image
                key={mobileSlide}
                src={services[mobileService].images[mobileImage]}
                alt={services[mobileService].title}
                fill
                priority
                sizes="(max-width: 767px) calc(100vw - 40px), 100vw"
                className="object-cover transition-opacity duration-500"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* Service Information */}

              <div className="absolute inset-x-0 bottom-0 p-6 text-left sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                  Our Services
                </p>

                <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {services[mobileService].title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-200">
                  {services[mobileService].description}
                </p>
              </div>
            </button>

            {/* Previous Button */}

            <button
              type="button"
              onClick={prevMobile}
              aria-label="Previous service"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Button */}

            <button
              type="button"
              onClick={nextMobile}
              aria-label="Next service"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Mobile Service Indicators */}

          <div className="mt-6 flex justify-center gap-2">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setMobileSlide(index * 3)}
                aria-label={`Go to ${service.title}`}
                aria-current={mobileService === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  mobileService === index
                    ? "w-8 bg-[#0096c7]"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-gray-400">
            Explore our services
          </p>
        </div>
      </section>

      {/* ================= IMAGE ENLARGEMENT ================= */}

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <X size={26} />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.title}
              fill
              sizes="(max-width: 767px) calc(100vw - 32px), 80vw"
              className="rounded-xl object-contain"
            />

            <p className="absolute -bottom-8 left-0 right-0 text-center text-sm text-white">
              {lightbox.title}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
