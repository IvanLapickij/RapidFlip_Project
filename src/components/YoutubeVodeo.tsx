import React from "react";
import YouTube from "react-youtube";

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // You can customize player parameters here, such as autoplay, controls, etc.
      autoplay: 0,
    },
  };

  return (
    <div className="youtube-video">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubeVideo;
