import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import Hero from "./components/Hero";
import MusicPlayer from "./components/MusicPlayer";
import TourDates from "./components/TourDates";
import PressSection from "./components/PressSection";
import VideoSection from "./components/VideoSection";
import BandsintownWidget from "./components/BandsintownWidget";
import MailchimpForm from "./components/MailchimpForm";
export default function Home() {
  return (
    <main
      className=" text-white min-h-screen "
      style={{
        backgroundImage: "url('/assets/scuff2.png')",
        backgroundSize: "100%", // Corrected the quote
      }}
    >
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen">
        <Hero />
      </section>
      <section id="merch" className=" flex flex-col justify-center">
        <Link href="https://latter.bigcartel.com/products">
          <div className="text-[50px] py-12 md:text-[100px] font-anton border-4 bg-[#005c46] bg-opacity-50  w-screen text-center text-white transition-all duration-300 ease-in-out  hover:text-[#005c46] hover:bg-white">
            MERCH STORE
          </div>
        </Link>
        <Link href="https://latter.bigcartel.com/products">
          <div className="text-[50px] py-12 md:text-[100px] font-anton border-4 bg-[#005c46] bg-opacity-50  w-screen text-center text-white transition-all duration-300 ease-in-out  hover:text-[#005c46] hover:bg-white">
            VINYLS & TAPES{" "}
          </div>
        </Link>
      </section>
      <section id="videos" className=" my-12 mx-4 text-center">
        <div className="text-[40px] font-anton mb-12 md:text-[100px] ">
          VIDEOS
        </div>
        <VideoSection />
      </section>
      {/* Music Section */}
      <section
        id="music"
        className=" px-8 flex flex-col justify-center items-center"
      >
        <div className="text-[40px] font-anton mb-12 md:text-[100px] ">
          MUSIC
        </div>

        <MusicPlayer />
      </section>
      {/* Tour Dates Section */}
      <section
        id="tour"
        className="flex flex-col text-center  py-8 px-8 justify-center"
      >
        {/* <TourDates /> */}
        <BandsintownWidget />
      </section>
      <section
        id="press"
        className="flex flex-col text-center   px-8 justify-center"
      >
        <PressSection />
      </section>

      <div className="mt-12">
        <MailchimpForm />
      </div>
    </main>
  );
}
