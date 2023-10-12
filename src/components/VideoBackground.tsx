import React from "react";
import videoBg from "../assets/Animation.mp4";
// import Navbar from "./Navbar";

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <h4>Rapid Flip Project.</h4>
      </div>
    </div>
  );
};

export default Main;
