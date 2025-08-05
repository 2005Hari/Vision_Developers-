"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const partners = [
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/HIA_member_5years-300x300-20.png',
    alt: 'HIA Member',
    width: 300,
    height: 300,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/austral-bricks-master-logo-rgb-reversed-21.png',
    alt: 'Austral Bricks',
    width: 300,
    height: 73,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/Gainsborough-Website_Gainsborough-Hardware-Logo-Navy-Tagline-22.png',
    alt: 'Gainsborough',
    width: 300,
    height: 75,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/logo-23.png',
    alt: 'Beaumont Tiles',
    width: 300,
    height: 90,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/Daikin-Logo-with-Perfecting-the-Air_V_RGB-300x123-24.png',
    alt: 'Daikin',
    width: 300,
    height: 123,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/clipsal-300x117-25.png',
    alt: 'Clipsal',
    width: 300,
    height: 117,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/LAMINEXLOGO-300x94-26.png',
    alt: 'Laminex',
    width: 300,
    height: 94,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/BlueScope_Logo-27.svg',
    alt: 'BlueScope',
    width: 200,
    height: 53,
  },
];

const Partners = () => {
  return (
    <section className="bg-primary-dark text-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold uppercase tracking-[0.2em] mb-20 text-white">
          Trusted Partners
        </h2>
        
        {/* Moving Logo Line */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain w-auto h-auto max-w-[120px] max-h-[60px]"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain w-auto h-auto max-w-[120px] max-h-[60px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;
