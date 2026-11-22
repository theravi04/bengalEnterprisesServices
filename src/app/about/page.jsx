import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Bengal Enterprises & Services",
  description:
    "Learn about Bengal Enterprises & Services and our catering and event management expertise.",
};

export default function About() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT SIDE - COMPLETE ABOUT CONTENT */}
          <div className="order-1 flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0096c7]">
              Who We Are
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              About Us
            </h1>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#0096c7]" />

            <div className="space-y-4 text-base leading-7 text-gray-600">
              <p>
                With over{" "}
                <strong className="font-semibold text-gray-900">
                  10 years of experience
                </strong>
                , Bengal Enterprises and Services is a trusted name in event
                management, catering and hospitality across Varanasi and Uttar
                Pradesh. We have served leading organisations, institutions,
                corporate clients and private customers across weddings,
                corporate events, religious functions, fairs and grand
                celebrations.
              </p>

              <p>
                Led by our Founder and Proprietor,{" "}
                <strong className="font-semibold text-gray-900">
                  Mr. Prabir Dutta
                </strong>
                , with over{" "}
                <strong className="font-semibold text-gray-900">
                  25 years of industry experience
                </strong>
                , our work is driven by quality, reliability and a client-first
                approach. Our services include event management, premium
                catering, venue coordination, decoration, stage management,
                branding, festive and fair arrangements.
              </p>

              <p>
                Over the last 3–4 years, we have also expanded into{" "}
                <strong className="font-semibold text-gray-900">
                  banquet hall development and construction
                </strong>
                , successfully designing and constructing 2–3 premium banquet
                halls. This has strengthened our ability to deliver complete
                solutions, from venue development and planning to event
                execution.
              </p>

              <p>
                By bringing{" "}
                <strong className="font-semibold text-gray-900">
                  catering, event management, banquet construction and branding
                </strong>{" "}
                under one roof, we aim to provide seamless services, memorable
                experiences and lasting relationships built on trust and
                customer satisfaction.
              </p>
            </div>

            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#0096c7] px-7 py-3.5 font-medium text-white transition-all duration-300 hover:bg-[#007ba5] hover:shadow-lg"
              >
                Get in Touch
                <span className="ml-3 text-lg">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE AND TEXT */}
          <div className="order-2 flex flex-col gap-8">
            {/* UPPER RIGHT - IMAGE */}
            <div className="relative min-h-[280px] w-full overflow-hidden rounded-2xl bg-gray-100 sm:min-h-[380px] lg:min-h-[420px]">
              <Image
                src="/images/photo.jpeg"
                alt="Bengal Enterprises and Services catering and event management"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-contain"
              />
            </div>

            {/* LOWER RIGHT - ADDITIONAL TEXT */}
            <div className="rounded-2xl bg-gray-50 p-6 sm:p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0096c7]">
                Meet Our Leadership
              </p>

              <h2 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
                Prabir Kumar Dutta
              </h2>

              <p className="mt-2 font-medium text-[#0096c7]">Founder</p>

              <div className="mt-4 h-1 w-12 rounded-full bg-[#0096c7]" />

              <p className="mt-4 text-base leading-8 text-gray-600">
                Committed to delivering quality, ensuring customer satisfaction,
                maintaining professionalism, and fostering the continued growth
                of the organisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
