import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./components/home";
import { NavBar } from "./components/navBar"
import { SelfRegistration } from "./components/selfRegistration";

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/selfRegistration" element={<SelfRegistration />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
