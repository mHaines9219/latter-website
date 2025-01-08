'use client';
import React from 'react';
import ReactPlayer from 'react-player';

const VideoSection = () => {
  return (
    <div style={styles.container}>
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
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'space-around',
    gap: '20px',
  },
  videoWrapper: {
    flex: 1,
    maxWidth: '600px', // Adjust max width as needed
    aspectRatio: '16/9',
    overflow: 'hidden',
  },
};

export default VideoSection;
