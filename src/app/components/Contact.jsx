import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#FFF2D7] text-black py-10">
      <div className="container mx-auto font-inter overflow-x-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center px-4">
          <div className="content1 flex flex-col w-full md:w-1/2 mb-8 lg:ml-5 md:mb-0">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold lg:font-medium mb-8 pl-2">
              Contact Us
            </h1>
            <div className="contact-info space-y-4 pl-6">
              <p className="text-2xl">
                <strong>Email:</strong> hubsahari@gmail.com
              </p>
              <p className="text-2xl">
                <strong>Phone:</strong> +91 8745092024
              </p>
              <div className="social-links mt-6">
                <h2 className="text-2xl font-medium mb-4"><strong>Connect with us</strong></h2>
                <div className="flex space-x-6">
                  <a
                    href="https://facebook.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaFacebook size={32} />
                  </a>
                  <a
                    href="https://www.instagram.com/_sahari_hub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800"
                  >
                    <FaInstagram size={32} />
                  </a>
                  <a
                    href="https://t.me/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaTelegram size={32} />
                  </a>
                  <a
                    href="https://wa.me/yourphonenumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800"
                  >
                    <FaWhatsapp size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="img1 w-full md:w-1/2 hidden md:flex justify-center"
            data-aos="flip-down"
            data-aos-once="true"
          >
            <img
              src="/assets/images/SH-1.png"
              alt="Contact"
              className="rounded-lg shadow-lg w-full max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
