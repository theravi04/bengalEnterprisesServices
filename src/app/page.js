"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = ["/images/1.png", "/images/2.png"];

const organisations = [
  "Organisation 1",
  "Organisation 2",
  "Organisation 3",
  "Organisation 4",
  "Organisation 5",
  "Organisation 6",
  "Organisation 7",
  "Organisation 8",
];

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
      <section className="relative flex min-h-svh w-full items-center overflow-hidden bg-gray-900">
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
<div className="absolute inset-x-0 bottom-16 z-10 mx-auto w-full max-w-7xl px-6 sm:bottom-auto sm:relative sm:px-10 lg:px-12">
  <div className="max-w-[520px]">

    <h1 className="text-3xl leading-[1.08] tracking-tight text-white sm:text-5xl md:text-4xl">
      We Are Among
      <br />
      the Best in
      <br />
      Banquet Setup,
      <br />
      Event Management,
      <br />
      Catering, Hoarding
      <br />
      & Advertising, and
      <br />
      Contract Services
    </h1>

    <Link
      href="/contact"
      className="mt-8 inline-flex min-h-[60px] w-full max-w-[430px] items-center justify-center bg-white px-6 py-5 text-center text-base font-semibold text-black transition-colors duration-300 hover:bg-[#0096c7] hover:text-white sm:mt-10 sm:min-h-[64px] sm:text-lg"
    >
      Let’s talk — Send a message
    </Link>

  </div>
</div>
      </section>

      {/* Organisations Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          {/* Section Heading */}
          <div className="mb-12 text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0096c7]">
              Our Experience
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Organisations We Have Served
            </h2>

            <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-[#0096c7]" />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Delivering reliable services and quality event solutions to
              organisations across various sectors.
            </p>
          </div>

          {/* Organisation Names */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {organisations.map((name, index) => (
              <span
                key={index}
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0096c7] hover:text-[#0096c7] hover:shadow-md sm:px-8 sm:py-4 sm:text-base"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
