// src/components/VideoBackground.tsx

import React from "react";
import "./VideoBackground.css"; // Import the CSS file
const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted style={{ width: "100%", height: "auto" }}>
        <source src="src\Media\Video\Animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
