import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      {/* Video Background */}
      <video
        preload="auto"
        loop
        autoPlay
        playsInline
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/1221.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Image Overlay */}
      <div className="relative z-10">
        <Image
          src="/assets/IMG_6787 2.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="opacity-90" 
        />
      </div>
    </>
  );
}
