import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./components/home";
import { NavBar } from "./components/navBar"
import { SelfRegistration } from "./components/selfRegistration";
import { Videos } from "./components/videos";
import { AboutPage } from "./components/about";
import { PawsTutorial } from "./components/pawsTutorial";
import { tutorials } from "./components/tutorials";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/tutorials" element={<SelfRegistration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tutorials/1" element={<PawsTutorial tutorial={tutorials[0]}/>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
