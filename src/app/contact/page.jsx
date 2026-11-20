"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";

const COMPANY_EMAIL = "xyz@gmail.com";
const COMPANY_PHONE = "+910000000000";
const WHATSAPP_NUMBER = "910000000000";

const COMPANY_ADDRESS = `Building No: N-16/115-120-125
Flat No 2-A, Shri Haridham Apartment,
Sudamapur, Varanasi - 221010, Uttar Pradesh, India`;

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/w4qfPTKe5aexS15t5?g_st=aw";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    try {
      // Connect this endpoint to your Nodemailer backend.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to send your message.");
      }

      setStatus("Your enquiry has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        "Unable to send your enquiry. Please try again or contact us through WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hello Bengal Enterprises & Services,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Enquiry: ${formData.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-white">
      {/* Page Heading */}
      <section className="px-6 py-10 text-center sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0096c7]">
          Get In Touch
        </p>

        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Contact Us</h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-900 sm:text-base">
          Have an event or business requirement? We would be happy to discuss
          your needs and provide the right solution.
        </p>
      </section>

      {/* Contact Form and Information */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16 lg:px-12 lg:py-14">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Send Us an Enquiry
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Fill in the form and our team will get back to you.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0096c7] focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0096c7] focus:ring-2 focus:ring-sky-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0096c7] focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0096c7] focus:ring-2 focus:ring-sky-100"
                >
                  <option value="">Select a service</option>
                  <option>Banquet Setup & Management</option>
                  <option>Event Management</option>
                  <option>Catering Services</option>
                  <option>Hoarding & Advertising Services</option>
                  <option>Contract Services</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your requirements..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0096c7] focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0096c7] px-6 py-3.5 font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
            >
              <Send size={17} />
              {submitting ? "Sending..." : "Send Enquiry"}
            </button>

            {status && (
              <p role="status" className="text-sm text-gray-600">
                {status}
              </p>
            )}

            <div className="border-t border-gray-200 pt-5">
              <p className="mb-3 text-sm text-gray-500">
                Prefer WhatsApp? Send your enquiry directly.
              </p>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-green-600 px-6 py-3.5 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white sm:w-fit"
              >
                <MessageCircle size={19} />
                Enquire on WhatsApp
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="h-fit rounded-xl bg-gray-50 p-7 sm:p-9">
          <h2 className="text-2xl font-bold text-gray-900">
            Contact Information
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Reach out to us for event planning, catering and other business
            requirements.
          </p>

          <div className="mt-8 space-y-7">
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="flex items-start gap-4"
            >
              <div className="rounded-lg bg-sky-100 p-3 text-[#0096c7]">
                <Mail size={21} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="mt-1 break-all text-sm text-gray-500">
                  {COMPANY_EMAIL}
                </p>
              </div>
            </a>

            <a href={`tel:${COMPANY_PHONE}`} className="flex items-start gap-4">
              <div className="rounded-lg bg-sky-100 p-3 text-[#0096c7]">
                <Phone size={21} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="mt-1 text-sm text-gray-500">{COMPANY_PHONE}</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-sky-100 p-3 text-[#0096c7]">
                <MapPin size={21} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Our Location</h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  {COMPANY_ADDRESS}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-sky-100 p-3 text-[#0096c7]">
                <Clock size={21} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Business Enquiries
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Contact us for availability and service details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-gray-50 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0096c7]">
              Find Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Our Location
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Visit our office in Varanasi or find us on Google Maps.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <iframe
              title="Bengal Enterprises & Services Location - Varanasi"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                "Building No N-16/115-120-125, Flat No 2-A, Shri Haridham Apartment, Sudamapur, Varanasi, Uttar Pradesh 221010, India",
              )}&output=embed`}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-5 flex flex-col items-center gap-3 text-center">
            <p className="max-w-xl text-sm leading-6 text-gray-600">
              Building No: N-16/115-120-125, Flat No 2-A, Shri Haridham
              Apartment, Sudamapur, Varanasi - 221010, Uttar Pradesh, India
            </p>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0096c7] px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              <MapPin size={17} />
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
