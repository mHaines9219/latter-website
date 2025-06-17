"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div
      style={styles.container}
      className="lg:flex-row flex-col justify-center items-center"
    >
      {" "}
      <div style={styles.videoWrapper}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=M36wn8M0TgA"
          width="100%"
          height="100%"
        />
      </div>
      <div style={styles.videoWrapper}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Rmd50Cj-1lc"
          width="100%"
          height="100%"
        />
      </div>
      <div style={styles.videoWrapper}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dgnrYOCNWvM"
          width="100%"
          height="100%"
        />
      </div>
      <div style={styles.videoWrapper}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ORqnOCHtNEQ"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  videoWrapper: {
    flex: 1,
    maxWidth: "600px", // Adjust max width as needed
    aspectRatio: "16/9",
    overflow: "hidden",
  },
};

export default VideoSection;
