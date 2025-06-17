"use client";
import { useEffect } from "react";

export default function BandsintownWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgetv3.bandsintown.com/main.min.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      className="bit-widget-initializer"
      data-artist-name="id_15554734"
      data-background-color="rgba(0,0,0,1)"
      data-text-color="rgba(255,255,255,1)"
      data-font="Impact"
      data-auto-style="true"
      data-display-local-dates="true"
      data-display-past-dates="true"
      data-date-format="MMM. D, YYYY"
      data-bit-logo-position="bottomRight"
      // Add the rest of your desired data-attributes here
    ></a>
  );
}
