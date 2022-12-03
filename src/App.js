import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

// Styles css
import "./styles/Nabvar.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
