// src/App.tsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <Router>
      <VideoBackground/>
      <Routes>
        <Route path="/about" element={<About />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
