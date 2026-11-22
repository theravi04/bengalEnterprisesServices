
import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          
          {/* Company Information */}
          <div className="max-w-xl">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Bengal Enterprises & Services
            </Link>

            <p className="mt-1.5 text-xs leading-5 text-gray-300 sm:text-sm">
              Banquet Setup & Management | Event Management | Catering Services
              | Hoarding & Advertising Services | Contract Services
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-2 text-sm md:items-end">
            
            {/* Email */}
            <a
              href="mailto:bengalenterprisesandservices@gmail.com"
              className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
            >
              <Mail size={15} className="text-[#55C9E8]" />
              bengalenterprisesandservices@gmail.com
            </a>

            {/* Phone 1 + WhatsApp */}
            <div className="flex items-center gap-2 text-gray-300">
              <a
                href="tel:+919918653678"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={15} className="text-[#55C9E8]" />
                +91 99186 53678
              </a>

              <span className="text-gray-500">/</span>

              <a
                href="https://wa.me/919918653678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp +91 99186 53678"
                className="flex items-center gap-1 transition-colors hover:text-white"
              >
                <FaWhatsapp size={17} className="text-[#25D366]" />
                <span>+91 99186 53678</span>
              </a>
            </div>

            {/* Phone 2 + WhatsApp */}
            <div className="flex items-center gap-2 text-gray-300">
              <a
                href="tel:+919839653678"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={15} className="text-[#55C9E8]" />
                +91 98396 53678
              </a>

              <span className="text-gray-500">/</span>

              <a
                href="https://wa.me/919839653678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp +91 98396 53678"
                className="flex items-center gap-1 transition-colors hover:text-white"
              >
                <FaWhatsapp size={17} className="text-[#25D366]" />
                <span>+91 98396 53678</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-white/15 pt-3 text-center text-xs text-gray-400 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Bengal Enterprises & Services. All
            rights reserved.
          </p>

          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
