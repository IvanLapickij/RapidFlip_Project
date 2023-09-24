// src/components/VideoBackground.tsx
import React from "react";
import "./VideoBackground.css";
import Navbar from "./Navbar";

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video-element">
        <source src="src/Media/Video/Animation.mp4" type="video/mp4" />
      </video>
      <div className="carousel-caption d-none d-md-block">
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default VideoBackground;
