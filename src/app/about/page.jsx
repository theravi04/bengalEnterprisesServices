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

            <div className="mt-8 space-y-6 text-base leading-8 text-gray-600 sm:text-lg">
              <p>
                With over{" "}
                <strong className="font-semibold text-gray-900">
                  [X] years of experience
                </strong>{" "}
                in the catering and event management industry, we specialise in
                delivering quality catering solutions and comprehensive event
                management services. We have had the privilege of working with{" "}
                <strong className="font-semibold text-gray-900">
                  [mention organisations, companies, institutions or clients]
                </strong>
                , providing services for a wide range of events and occasions.
              </p>

              <p>
                Our expertise includes catering arrangements, food and beverage
                services, event planning, venue coordination, decoration, and
                complete event execution. We are committed to maintaining high
                standards of quality, professionalism and customer satisfaction
                while ensuring every event is organised seamlessly.
              </p>

              <p>
                At Bengal Enterprises and Services, we believe in delivering
                reliable services, creating memorable experiences and building
                long-term relationships with our clients.
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

              <p className="mt-5 text-base leading-8 text-gray-600">
                [Introduction about the person, professional experience and role
                in Bengal Enterprises & Services.]
              </p>

              <p className="mt-4 text-base leading-8 text-gray-600">
                [His commitment to quality, customer satisfaction,
                professionalism and the continued growth of the organisation.]
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
