import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./components/home";
import { NavBar } from "./components/navBar"
import { SelfRegistration } from "./components/selfRegistration";
import { Videos } from "./components/videos";

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/selfRegistration" element={<SelfRegistration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
    </div>
  );
}

export default App;
