import Image from 'next/image';
import './globals.css';
import Link from 'next/link';
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
            className="opacity-90" // Adjust the transparency here
          />
        </div>
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
      <section id="music" className="py-16 px-8">
        {/* <h2 className="text-3xl font-bold mb-4">Our Music</h2> */}
        <div className="flex flex-col items-center w-">
          <iframe
            className="w-full max-w-[1400px] h-96"
            src="https://open.spotify.com/embed/album/45Lx2eNJPf38jW0R92U2wO?si=NCp-rIHjRNyCn0T5HzirlA"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        </div>
      </section>
      {/* Tour Dates Section */}
      <section id="tour" className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-4">Tour Dates</h2>
        <ul>
          <li className="mb-2">Chicago, IL - Metro - Jan 20th</li>
          <li className="mb-2">New York, NY - Bowery Ballroom - Feb 10th</li>
        </ul>
      </section>
      {/* Merch Section */}
      <section id="merch" className="py-16 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold mb-4">Merch</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-700 rounded-md">T-shirt</div>
          <div className="p-4 bg-gray-700 rounded-md">Vinyl</div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-8">
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
      </section>
    </main>
  );
}
