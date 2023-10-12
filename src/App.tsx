// src/App.tsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VideoBackground from "./components/VideoBackground";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <Router>
      <VideoBackground />
      <About/>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
