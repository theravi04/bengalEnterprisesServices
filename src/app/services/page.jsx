
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
      "/images/eventManagement/1.jpeg",
      "/images/eventManagement/2.jpg",
      "/images/eventManagement/3.jpeg",
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

  // Individual mobile image index for every service
  const [mobileImages, setMobileImages] = useState(
    services.map(() => 0)
  );

  // Image lightbox state
  const [lightbox, setLightbox] = useState(null);

  // Restore previously selected desktop service
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

  // Desktop service selection
  const selectService = (index) => {
    setActiveService(index);
    localStorage.setItem("activeService", String(index));
  };

  // Automatically rotate images in all mobile service sliders
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileImages((prev) =>
        prev.map((imageIndex, serviceIndex) => {
          const totalImages = services[serviceIndex].images.length;

          return (imageIndex + 1) % totalImages;
        })
      );
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  // Individual mobile slider navigation
  const changeMobileImage = (serviceIndex, direction) => {
    setMobileImages((prev) =>
      prev.map((imageIndex, index) => {
        if (index !== serviceIndex) return imageIndex;

        const totalImages = services[serviceIndex].images.length;

        return (
          (imageIndex + direction + totalImages) % totalImages
        );
      })
    );
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

          {/* Right: Three Image Gallery */}

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

        <div className="md:hidden space-y-10">

          {services.map((service, serviceIndex) => {
            const currentImage = mobileImages[serviceIndex];

            return (
              <div
                key={service.id}
                className="min-w-0"
              >

                {/* Service Heading */}

                <div className="mb-4">
                  <div className="mb-2">
  <span className="block h-1 w-10 rounded-full bg-[#0096c7]" />
</div>

                  <h2 className="text-xl font-bold leading-tight text-gray-900">
                    {service.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {service.description}
                  </p>
                </div>

                {/* Individual Service Image Slider */}

                <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg">

                  {/* Image */}

                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: service.images[currentImage],
                        title: service.title,
                      })
                    }
                    aria-label={`Enlarge ${service.title} image ${currentImage + 1}`}
                    className="relative block aspect-[4/3] w-full overflow-hidden"
                  >
                    <Image
                      key={`${service.id}-${currentImage}`}
                      src={service.images[currentImage]}
                      alt={`${service.title} image ${currentImage + 1}`}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 40px), 100vw"
                      className="object-cover transition-opacity duration-500"
                    />

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Image Counter */}

                    <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
                      {currentImage + 1} / {service.images.length}
                    </div>
                  </button>

                  {/* Previous Image Button */}

                  <button
                    type="button"
                    onClick={() =>
                      changeMobileImage(serviceIndex, -1)
                    }
                    aria-label={`Previous ${service.title} image`}
                    className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-white"
                  >
                    <ChevronLeft size={21} />
                  </button>

                  {/* Next Image Button */}

                  <button
                    type="button"
                    onClick={() =>
                      changeMobileImage(serviceIndex, 1)
                    }
                    aria-label={`Next ${service.title} image`}
                    className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-white"
                  >
                    <ChevronRight size={21} />
                  </button>
                </div>

                {/* Individual Image Indicators */}

                <div className="mt-4 flex justify-center gap-2">
                  {service.images.map((image, imageIndex) => (
                    <button
                      key={imageIndex}
                      type="button"
                      onClick={() =>
                        setMobileImages((prev) =>
                          prev.map((value, index) =>
                            index === serviceIndex
                              ? imageIndex
                              : value
                          )
                        )
                      }
                      aria-label={`View image ${imageIndex + 1} of ${service.title}`}
                      aria-current={
                        currentImage === imageIndex
                          ? "true"
                          : undefined
                      }
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentImage === imageIndex
                          ? "w-8 bg-[#0096c7]"
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

              </div>
            );
          })}

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
