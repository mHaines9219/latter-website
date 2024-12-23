import Image from 'next/image';
import './globals.css';
import Link from 'next/link';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import TourDates from './components/TourDates';
import PressSection from './components/PressSection';
export default function Home() {
  return (
    <main
      className=" text-white min-h-screen "
      style={{
        backgroundImage: "url('/assets/scuff2.png')",
        backgroundSize: '100%', // Corrected the quote
      }}
    >
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen">
        <Hero />
      </section>
      {/* About Section
      <section id="about" className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg">
          <iframe
            src="https://latter.bigcartel.com/products"
            title="Online Store"
          ></iframe>
          We are a Chicago-based metal band blending gritty sounds with the
          heart of the Windy City.
        </p>
      </section> */}
      {/* Music Section */}
      <section id="music" className="pt-12 px-8">
        {/* <h2 className="text-3xl font-bold mb-4">Our Music</h2> */}
        <MusicPlayer />
      </section>
      {/* Tour Dates Section */}
      <section
        id="tour"
        className="flex flex-col text-center  py-8 px-8 justify-center"
      >
        <TourDates />
      </section>
      <section
        id="press"
        className="flex flex-col text-center  py-8 px-8 justify-center"
      >
        <PressSection />
      </section>
      {/* Merch Section */}
      {/* <section id="merch" className="py-4 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold mb-4">Merch</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-700 rounded-md">T-shirt</div>
          <div className="p-4 bg-gray-700 rounded-md">Vinyl</div>
        </div>
      </section> */}
      {/* Contact Section */}
      {/* <section id="contact" className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="flex flex-col">
          <input
            className="mb-4 p-2 rounded-md bg-gray-700"
            type="text"
            placeholder="Your Name"
          />
          <textarea
            className="mb-4 p-2 rounded-md bg-gray-700"
            placeholder="Your Message"
          ></textarea>
          <button className="bg-blue-500 px-6 py-2 rounded-md">Send</button>
        </form>
      </section> */}
    </main>
  );
}
