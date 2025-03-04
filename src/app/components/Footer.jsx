import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      className="text-white font-inter py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/footbanner1.jpg')" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-2">
              <img
                src="/assets/images/sh-foot.png"
                alt="logo"
                className="w-20"
              />
              <h3 className="text-2xl font-semibold">Sahari Hub</h3>
            </div>
            <p className="mb-2">Email: hubsahari@gmail.com</p>
            <p>Phone: +91 8745092024</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <button
                  onClick={() => scrollToSection("header")}
                  className="hover:text-gray-300"
                >
                  Home
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-gray-300"
                >
                  About Us
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => scrollToSection("categories")}
                  className="hover:text-gray-300"
                >
                  Categories
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => scrollToSection("products")}
                  className="hover:text-gray-300"
                >
                  Products
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Sahari-Hub/61563344424784/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/_sahari_hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaTelegram size={24} />
              </a>
              <a
                href="https://wa.me/8745092024"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white text-center">
          <p>
            &copy; {new Date().getFullYear()} Sahari Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
