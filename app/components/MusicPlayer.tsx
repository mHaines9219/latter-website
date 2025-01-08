import React from 'react';

export default function MusicPlayer() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <iframe
          className="w-[85vw]  max-w-[1400px] h-96"
          src="https://open.spotify.com/embed/album/45Lx2eNJPf38jW0R92U2wO?si=NCp-rIHjRNyCn0T5HzirlA"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
      </div>
    </>
  );
}
