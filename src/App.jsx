import React, { useState } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import './index.css'; // We'll add CSS styles here

export default function RomanticLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center relative overflow-hidden px-4">
      {/* Background hearts */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Envelope */}
      {!isOpen && (
        <div
          className="z-10 cursor-pointer bg-white shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md envelope"
          onClick={() => setIsOpen(true)}
        >
          <FaEnvelopeOpenText className="text-red-500 text-5xl md:text-6xl" />
          <p className="mt-4 text-base md:text-lg font-medium text-gray-700">Click to open</p>
        </div>
      )}

      {/* Letter */}
      {isOpen && (
        <div className="z-10 bg-white w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl rounded-xl p-6 md:p-8 text-center letter">
          <h1 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">To the one who makes my heart skip 💌</h1>
          <p className="text-gray-700 text-base md:text-lg">
            Would you like to go on a date with me? 💖<br />
            I promise laughter, sweet moments, and a memory to cherish. 🌹
          </p>
        </div>
      )}
    </div>
  );
}
