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
import Login from "./Components/login-signup/Login.jsx";
import Signup from "./Components/login-signup/Signup.jsx";
import SuccessLogin from "./Components/login-signup/SuccessLogin.jsx";
import WeatherApp from "./Components/weather-app/Weather.jsx";

export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-card" element={<ProfileCard />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/todo-list" element={<TodoApp />} />
        <Route path="/digital-clock" element={<DigitalClock />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/portfolio/*" element={<PortfolioWebsite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sucess-login" element={<SuccessLogin />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </BrowserRouter >
  )
}
