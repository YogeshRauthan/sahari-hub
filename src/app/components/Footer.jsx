import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='bg-gradient-to-r from-[#194D5C] to-[#2F4858] text-white font-inter py-10'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Company Info */}
          <div>
            <img src="/assets/images/sahari_logo3.png" alt="logo" width={32} />
            <h3 className='text-xl font-semibold mb-4'>Sahari Hub</h3>
            <p className='mb-2'>123 Main Street</p>
            <p className='mb-2'>City, State 12345</p>
            <p>Phone: +91 (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul>
              <li className='mb-2'>
                <button onClick={() => scrollToSection('header')} className='hover:text-gray-300'>Home</button>
              </li>
              <li className='mb-2'>
                <button onClick={() => scrollToSection('about')} className='hover:text-gray-300'>About Us</button>
              </li>
              <li className='mb-2'>
                <button onClick={() => scrollToSection('categories')} className='hover:text-gray-300'>Categories</button>
              </li>
              <li className='mb-2'>
                <button onClick={() => scrollToSection('products')} className='hover:text-gray-300'>Products</button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Connect With Us</h3>
            <div className='flex space-x-4'>
              <a href="#" className='hover:text-gray-300 transition duration-300'>
                <FaFacebook size={24} />
              </a>
              <a href="#" className='hover:text-gray-300 transition duration-300'>
                <FaInstagram size={24} />
              </a>
              <a href="#" className='hover:text-gray-300 transition duration-300'>
                <FaTelegram size={24} />
              </a>
              <a href="#" className='hover:text-gray-300 transition duration-300'>
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 pt-8 border-t border-gray-700 text-center'>
          <p>&copy; {new Date().getFullYear()} Sahari Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer