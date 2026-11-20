"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = ["/images/1.png", "/images/2.png"];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => {
        const next = (current + 1) % heroImages.length;
        setPreviousImage(current);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-[650px] h-[90vh] max-h-[850px] items-center overflow-hidden bg-gray-900 sm:min-h-[700px]">
        {/* Previous Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImages[previousImage]}
            alt="Bengal Enterprises event management"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Current Background Image */}
        <div
          key={currentImage}
          className="absolute inset-0 animate-[heroFade_1.2s_ease-in-out]"
        >
          <Image
            src={heroImages[currentImage]}
            alt="Event and wedding management services"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-[450px]">
            <h1 className="text-2xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-4xl">
              We Are Among the Best in Banquet Setup, Event Management,
              Catering, Hoarding & Advertising, and Contract Services
            </h1>

            <Link
              href="/contact"
              className="mt-10 inline-flex min-h-[64px] w-full max-w-[430px] items-center justify-center bg-white px-6 py-5 text-center text-base font-semibold text-black transition-colors duration-300 hover:bg-[#0096c7] hover:text-white sm:text-lg"
            >
              Let’s talk — Send a message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
