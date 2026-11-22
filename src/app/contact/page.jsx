
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const COMPANY_EMAIL = "bengalenterprisesandservices@gmail.com";

const COMPANY_PHONE_1 = "+919918653678";
const COMPANY_PHONE_2 = "+919839653678";

const WHATSAPP_NUMBER_1 = "919839653678";
const WHATSAPP_NUMBER_2 = "919918653678";

const COMPANY_ADDRESS = `Shri Haridham Apartment,
Sudamapur, Varanasi - 221010, Uttar Pradesh, India`;

const GOOGLE_MAPS_LINK =
  "https://maps.app.goo.gl/w4qfPTKe5aexS15t5?g_st=aw";

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

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send email enquiry through the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setStatus("");

    try {
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
        "Unable to send your enquiry. Please try again or contact us through WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Open WhatsApp with enquiry details
  const handleWhatsApp = () => {
    const message = `Hello Bengal Enterprises & Services,

Name: ${formData.name || "Not provided"}
Email: ${formData.email || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Service: ${formData.service || "Not specified"}

Enquiry: ${formData.message || "I would like to know more about your services."}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER_1}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-white">
      {/* Page Heading */}
      <section className="px-6 pt-10 pb-3 text-center sm:pt-12 sm:pb-4"> <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0096c7]">
          Get In Touch
        </p>

        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-900 sm:text-base">
          Have an event or business requirement? We would be happy to discuss
          your needs and provide the right solution.
        </p>
      </section>

      {/* Contact Form and Information */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16 lg:px-12 lg:py-14">

        {/* Left Section: WhatsApp and Email Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Send Us an Enquiry
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Choose your preferred way to get in touch with us.
          </p>

          {/* WhatsApp Option - Outside the Form */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 font-semibold text-white transition hover:bg-[#1DA851] sm:w-fit"
            >
              <FaWhatsapp size={21} />
              Enquire on WhatsApp
            </button>

            <p className="mt-2 text-xs text-gray-500">
              Send your enquiry directly through WhatsApp.
            </p>
          </div>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Or Send an Email Enquiry
            </span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Email Enquiry Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name and Email */}
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

            {/* Phone and Service */}
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
                  <option>Festive Arrangements</option>
                  <option>Fair Arrangements</option>
                  <option>Banquet Hall Development & Construction</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
            </div>

            {/* Message */}
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0096c7] px-6 py-3.5 font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
            >
              <Send size={17} />
              {submitting ? "Sending..." : "Send Email Enquiry"}
            </button>

            {/* Form Status */}
            {status && (
              <p role="status" className="text-sm text-gray-600">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Right Section: Contact Information */}
        <div className="h-fit rounded-xl bg-gray-50 p-7 sm:p-9">
          <h2 className="text-2xl font-bold text-gray-900">
            Contact Information
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Reach out to us for event planning, catering and other business
            requirements.
          </p>

          <div className="mt-8 space-y-7">

            {/* Email */}
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="flex items-start gap-4"
            >
              <div className="rounded-lg bg-sky-100 p-3 text-[#0096c7]">
                <Mail size={21} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Email
                </h3>

                <p className="mt-1 break-all text-sm text-gray-500">
                  {COMPANY_EMAIL}
                </p>
              </div>
            </a>

            {/* Phone 1 */}
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-sky-100 p-3 text-[#0096c7]">
                <Phone size={21} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Phone
                </h3>

                <a
                  href={`tel:${COMPANY_PHONE_1}`}
                  className="mt-1 block text-sm text-gray-500 transition hover:text-[#0096c7]"
                >
                  +91 99186 53678
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER_2}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-green-600"
                >
                  <FaWhatsapp className="text-[#25D366]" size={15} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-sky-100 p-3 text-[#0096c7]">
                <Phone size={21} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Alternate Phone
                </h3>

                <a
                  href={`tel:${COMPANY_PHONE_2}`}
                  className="mt-1 block text-sm text-gray-500 transition hover:text-[#0096c7]"
                >
                  +91 98396 53678
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER_1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-green-600"
                >
                  <FaWhatsapp className="text-[#25D366]" size={15} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-sky-100 p-3 text-[#0096c7]">
                <MapPin size={21} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Our Location
                </h3>

                <p className="mt-1 whitespace-pre-line text-sm leading-6 text-gray-500">
                  {COMPANY_ADDRESS}
                </p>
              </div>
            </div>

            {/* Business Enquiries */}
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
                "Building No N-16/115-120-125, Flat No 2-A, Shri Haridham Apartment, Sudamapur, Varanasi, Uttar Pradesh 221010, India"
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
