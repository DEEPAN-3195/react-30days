import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import ProfileCard from "./Components/ProfileCard.jsx";
import CounterApp from "./Components/CounterApp.jsx";
import "./index.css";
import TodoApp from "./Components/TodoApp.jsx";
import DigitalClock from "./Components/DigitalClock.jsx";
import Navbar from "./Components/Navbar.jsx";
import PortfolioWebsite from "./Components/Portfolio-website/PortfolioWebsite.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile-card" element={<ProfileCard />} />
      <Route path="/counter-app" element={<CounterApp />} />
      <Route path="/todo-list" element={<TodoApp />} />
      <Route path="/digital-clock" element={<DigitalClock />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/portfolio/*" element={<PortfolioWebsite />} />
    </Routes>
  </BrowserRouter>
);
