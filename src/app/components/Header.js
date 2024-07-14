"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-[black] text-white font-inter w-full shadow-2xl shadow-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("products")}
              className="text-xl hover:text-white hover:scale-105 transition duration-300"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-xl hover:text-white hover:scale-105 transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xl hover:text-white hover:scale-105 transition duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Logo */}
          <div className="">
            <Link href="/" className="flex items-center pl-4 md:pl-0">
              <img
                src="/assets/images/SH-top2.png"
                alt="Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-2xl hover:text-blue-300 transition duration-300"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-pink-300 transition duration-300"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-green-300 transition duration-300 "
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-blue-200 transition duration-300"
            >
              <FaTelegram size={28} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden pr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black text-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-800 rounded-md transition duration-300"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-800 rounded-md transition duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-800 rounded-md transition duration-300"
              >
                Contact
              </button>
            </div>
            <div className="flex justify-start space-x-4 pb-3 pl-4 text-2xl">
              <a
                href="#"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-300 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-300 transition duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}