import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar component */}
        <Navbar />
        
        {/* Defining Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
