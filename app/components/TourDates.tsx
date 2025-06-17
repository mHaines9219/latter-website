"use client";
import React, { useEffect, useState } from "react";

export default function TourDates() {
  const [tourDates, setTourDates] = useState<
    { city: string; venue: string; date: string }[]
  >([]);

  useEffect(() => {
    async function fetchTourDates() {
      try {
        const response = await fetch("/api/tour-dates");
        const data = await response.json();

        console.log("API Response:", data);

        if (!Array.isArray(data)) {
          console.error("Expected array of events, got:", typeof data);
          return;
        }

        const formatted = data.map((event: any) => ({
          city: `${event.venue.city}, ${
            event.venue.region || event.venue.country
          }`,
          venue: event.venue.name,
          date: new Date(event.datetime).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
        }));

        setTourDates(formatted);
      } catch (error) {
        console.error("Error fetching tour dates:", error);
      }
    }

    fetchTourDates();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold mb-4">TOUR DATES</h2>
      <ul>
        {tourDates.length === 0 ? (
          <li className="mb-2 border-white border-2 p-4 font-anton bg-[#005c46] bg-opacity-50">
            <div className="text-container">COMING SOON</div>
          </li>
        ) : (
          tourDates.map((tour, index) => (
            <li
              key={index}
              className="mb-2 border-white border-2 p-4 font-anton bg-[#005c46] bg-opacity-50"
            >
              <div className="text-container">{`${tour.city} - ${tour.venue} - ${tour.date}`}</div>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
