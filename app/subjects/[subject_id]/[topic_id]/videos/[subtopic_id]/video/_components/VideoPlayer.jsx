"use client";
import React, { useRef, useState, useEffect } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ video, user_id }) => {
  const videoUrl = video;
  const video_id = video.id;

  const [progressTime, setProgressTime] = useState(0);

  const hasMounted = useRef(false);
  const playerRef = useRef(null);

  const onPlayerReady = (event) => {
    if (progressTime > 0) {
      event.target.seekTo(progressTime); // Seek to stored progress
    }
  };

  useEffect(() => {
    if (hasMounted.current) {
    } else {
      hasMounted.current = true;
    }
  }, []); // Depend on video_id, duration, and playerReady

  const getYoutubeIdFromUrl = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=)?([\w\-]+)/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  const youtubeVideoId = getYoutubeIdFromUrl(videoUrl);
  const opts = {
    height: "340px", // Use percentage for responsive height
    width: "720px", // Use percentage for responsive width
    playerVars: {
      // Enable progress tracking
      autoplay: 0,
      enablejsapi: 1,
    },
  };
  return (
    <div
      className="flex flex-col items-center justify-center"
      data-aos="zoom-in"
    >
      <YouTube
        className="flex max-w-[350px] md:max-w-4xl mx-auto"
        videoId={youtubeVideoId}
        opts={opts}
        onReady={onPlayerReady}
        ref={playerRef}
      />
    </div>
  );
};

export default VideoPlayer;
