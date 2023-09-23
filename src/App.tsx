// src/App.tsx

import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <Router>
        <Navbar />
        <VideoBackground />
        <Routes>
          <Route path="/about">{/* Your About page component */}</Route>
          <Route path="/contact">{/* Your Contact page component */}</Route>
          <Route path="/">{/* Your Home page component */}</Route>
        </Routes>
        <About/>
    </Router>
    
  );
};

export default App;
