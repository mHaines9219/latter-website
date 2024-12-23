import React from 'react';
import Link from 'next/link';
export default function PressSection() {
  let pressClips = [
    {
      mag: 'DECIBEL MAGAZINE',
      headline: 'VIDEO PREMIERE: LATTER - "I DON`T OWE YOU',
      href: 'https://www.decibelmagazine.com/2024/08/13/video-premiere-latter-i-dont-owe-you/',
    },

    {
      mag: 'PUNKNEWS.ORG',
      headline:
        'TALKING `MY BODY IS MY SICKNESS` WITH MEREDITH HAINES OF LATTER',
      href: 'https://www.punknews.org/article/83941/interviews-talking-my-body-is-my-sickness-with-meredith-haines-of-latter',
    },
  ];
  return (
    <>
      <h2 className="text-3xl font-bold mb-4 ">PRESS</h2>
      <ul>
        {pressClips.map((press, index) => (
          <li
            key={index}
            className="mb-2 border-white border-2 p-4 font-anton bg-red-800 bg-opacity-50"
          >
            <div className="text-container">
              <h2 className="text-3xl">{`${press.mag} `}</h2>
              {`${press.headline}`}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
