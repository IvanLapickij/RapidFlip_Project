import YouTube from "react-youtube";

const VideoDemo = () => {

    const opts = {
        height: '390',   // 视频高度
        width: '640',    // 视频宽度
        playerVars: {
          autoplay: 1,   // 自动播放视频
        },
      };
    
      return (
        <div>
          <YouTube videoId="dQw4w9WgXcQ" opts={opts} />
        </div>
      );
  };
  
  export default VideoDemo;