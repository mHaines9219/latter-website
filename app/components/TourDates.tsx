import React from 'react';

export default function TourDates() {
  let tourDates = [
    {
      city: 'CHICAGO, IL',
      venue: 'METRO',
      date: 'JAN 20TH',
    },

    {
      city: 'NEW YORK, NY',
      venue: 'BOWERY BALLROOM',
      date: 'FEB 10TH',
    },
  ];
  return (
    <>
      <h2 className="text-3xl font-bold  mb-4 ">TOUR DATES</h2>
      <ul>
        {tourDates.map((tour, index) => (
          <li
            key={index}
            className="mb-2 border-white border-2 p-4 font-anton bg-red-800 bg-opacity-50"
          >
            <div className="text-container">{`${tour.city} - ${tour.venue} - ${tour.date}`}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
