'use client'

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(true);
  const phoneNumber = "918750709787";

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {showPopup && (
        <div className="bg-white p-4 rounded-lg shadow-lg mb-2 relative max-w-[250px] border border-gray-400">
          <p className="text-sm mb-3">
            Hi, welcome to Sahari Hub
          </p>
          <button
            onClick={openWhatsApp}
            className="bg-green-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center w-full"
          >
            <FaWhatsapp className="mr-2" /> Chat with us
          </button>
        </div>
      )}
      <button
        onClick={togglePopup}
        className="bg-green-500 text-white p-3 rounded-full shadow-lg shadow-gray-500 hover:bg-green-600 transition-colors duration-300"
      >
        <FaWhatsapp size={32} />
      </button>
    </div>
  );
};

export default WhatsAppButton;