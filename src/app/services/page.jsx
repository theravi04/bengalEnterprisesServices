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
      "/images/1.png",
      "/images/2.png",
      "/images/services/banquet-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Event Management",
    description:
      "Comprehensive event planning, coordination, decoration and execution for memorable occasions.",
    images: [
      "/images/services/event-1.jpg",
      "/images/services/event-2.jpg",
      "/images/services/event-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Catering Services",
    description:
      "Quality catering arrangements and food and beverage services for different events and occasions.",
    images: [
      "/images/services/catering-1.jpg",
      "/images/services/catering-2.jpg",
      "/images/services/catering-3.jpg",
    ],
  },
  {
    id: 4,
    title: "Hoarding & Advertising Services",
    description:
      "Advertising and hoarding solutions to support business visibility and promotional activities.",
    images: [
      "/images/services/advertising-1.jpg",
      "/images/services/advertising-2.jpg",
      "/images/services/advertising-3.jpg",
    ],
  },
  {
    id: 5,
    title: "Contract Services",
    description:
      "Reliable contract-based services and professional execution according to client requirements.",
    images: [
      "/images/services/contract-1.jpg",
      "/images/services/contract-2.jpg",
      "/images/services/contract-3.jpg",
    ],
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [desktopImage, setDesktopImage] = useState(0);

  const [mobileService, setMobileService] = useState(0);
  const [mobileImage, setMobileImage] = useState(0);

  const [lightbox, setLightbox] = useState(null);

  const currentService = services[activeService];

  // Desktop automatic image rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setDesktopImage((prev) => (prev + 1) % 3);
    }, 3500);

    return () => clearInterval(timer);
  }, [activeService]);

  // Mobile automatic image and service rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileImage((prevImage) => {
        if (prevImage < 2) {
          return prevImage + 1;
        }

        setMobileService((prevService) => (prevService + 1) % services.length);

        return 0;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  // Desktop service selection
  const selectService = (index) => {
    setActiveService(index);
    setDesktopImage(0);
  };

  // Mobile navigation
  const nextMobile = () => {
    setMobileImage(0);
    setMobileService((prev) => (prev + 1) % services.length);
  };

  const prevMobile = () => {
    setMobileImage(0);
    setMobileService((prev) => (prev - 1 + services.length) % services.length);
  };

  // Image lightbox
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
        {/* Heading */}
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
                        : "text-gray-400 group-hover:translate-x-1"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Three Image Gallery */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#0096c7]">
                  Featured Service
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900 lg:text-2xl">
                  {currentService.title}
                </h2>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => setDesktopImage((prev) => (prev + 2) % 3)}
                  className="rounded-full border p-2 transition hover:bg-gray-100"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setDesktopImage((prev) => (prev + 1) % 3)}
                  className="rounded-full border p-2 transition hover:bg-gray-100"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {[0, 1, 2].map((offset) => {
                const index = (desktopImage + offset) % 3;
                const image = currentService.images[index];

                return (
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
                );
              })}
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {[0, 1, 2].map((dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() => setDesktopImage(dot)}
                  aria-label={`Show image ${dot + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    desktopImage === dot
                      ? "w-7 bg-[#0096c7]"
                      : "w-2 bg-gray-300"
                  }`}
                />
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
                key={`${mobileService}-${mobileImage}`}
                src={services[mobileService].images[mobileImage]}
                alt={services[mobileService].title}
                fill
                priority
                sizes="100vw"
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

            {/* Previous */}
            <button
              type="button"
              onClick={prevMobile}
              aria-label="Previous service"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={nextMobile}
              aria-label="Next service"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Mobile Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                onClick={() => {
                  setMobileService(index);
                  setMobileImage(0);
                }}
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
              sizes="100vw"
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
