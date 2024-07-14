'use client'

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8750709787"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg shadow-gray-500 hover:bg-green-600 transition-colors duration-300 z-50"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;