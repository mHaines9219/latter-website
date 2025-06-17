"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Video Background */}
      <video
        preload="auto"
        src="https://latter-site.s3.us-east-2.amazonaws.com/latter_hero2_optimized.mp4"
        loop
        autoPlay
        playsInline
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Image Overlay */}
      <div className="relative z-10">
        <Image
          src="/assets/LATTER4_White.png"
          width={300}
          height={300}
          alt="Latter band text"
          className="opacity-90 mix-blend-screen"
        />
      </div>
    </>
  );
}
