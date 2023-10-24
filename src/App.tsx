import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VideoBackground from "./components/VideoBackground";
import About from "./components/About";

import Contact from "./components/contact";

const App: React.FC = () => {
  return (
    <Router>
      <VideoBackground />
      <About></About>
      {/* <YouTubeVideo videoId="iI_-zHxweIs" /> */}
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <TeamMembers /> */}
      <Contact />
    </Router>
  );
};

export default App;
