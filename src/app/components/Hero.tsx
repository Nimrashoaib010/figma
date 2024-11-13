import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-yellow-50">
        <div className="max-w-4xl p-8 rounded-lg shadow-md bg-white flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <div className="flex-1">
            <h2 className="text-yellow-500 text-sm font-semibold mb-2">UI/UX Designer</h2>
            <h1 className="text-4xl font-bold mb-4">
              Hello, my name is Madelyn Torff
            </h1>
            <p className="text-gray-600 mb-6">
              Short text with details about you, what you do or your professional career.
              You can add more information on the about page.
            </p>
            <div className="space-x-4">
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-full">
                Projects
              </button>
              <button className="px-4 py-2 border border-gray-400 rounded-full">
                LinkedIn
              </button>
            </div>
          </div>
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden mt-8 lg:mt-0">
            <Image src="/image.png" alt="Profile" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </>
  );
}

