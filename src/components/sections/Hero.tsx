"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const backgroundImages = [
    '/image21.jpg',
    '/image4.jpg', 
    '/image13.jpg',
    '/image9.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % backgroundImages.length
        );
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Images with Carousel Effect */}
      <div className="absolute inset-0 z-0 w-screen h-screen">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Luxury Home Background ${index + 1}`}
              fill
              className="object-cover object-center w-screen h-screen"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <div className="w-[min(90vw,750px)]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/find-your-dream-home-4.png"
            alt="Find Your Dream Home"
            width={1026}
            height={89}
            sizes="(max-width: 768px) 90vw, 750px"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center gap-8 sm:gap-20">
          <Link
            href="/new-home-designs-search"
            className="font-extrabold text-base md:text-lg text-white uppercase tracking-[0.3em] bg-[#c4b59a] hover:bg-[#b3a488] px-8 py-4 transition-all duration-300 ease-in-out transform-gpu hover:-translate-y-0.5 hover:shadow-lg border-2 border-white/20 hover:border-white/40 relative overflow-hidden group"
            style={{
              clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#c4b59a] to-[#d4c5aa] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Home Designs</span>
          </Link>
          <Link
            href="/contact-us"
            className="font-extrabold text-base md:text-lg text-white uppercase tracking-[0.3em] bg-[#3a3a3a] hover:bg-[#4a4a4a] px-8 py-4 transition-all duration-300 ease-in-out transform-gpu hover:-translate-y-0.5 hover:shadow-lg border-2 border-white/20 hover:border-white/40 relative overflow-hidden group"
            style={{
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4a4a4a] to-[#5a5a5a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;