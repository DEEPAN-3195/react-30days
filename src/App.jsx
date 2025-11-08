import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./Components/ThemeContext/ThemeContext.jsx";
import ThemeToggle from "./Components/ThemeContext/ThemeToggle.jsx";

const Home = lazy(() => import("./Home.jsx"));
const ProfileCard = lazy(() => import("./Components/ProfileCard.jsx"));
const CounterApp = lazy(() => import("./Components/CounterApp.jsx"));
const TodoApp = lazy(() => import("./Components/TodoApp.jsx"));
const DigitalClock = lazy(() => import("./Components/DigitalClock.jsx"));
const Navbar = lazy(() => import("./Components/Navbar.jsx"));
const PortfolioWebsite = lazy(() => import("./Components/Portfolio-website/PortfolioWebsite.jsx"));
const Login = lazy(() => import("./Components/login-signup/Login.jsx"));
const Signup = lazy(() => import("./Components/login-signup/Signup.jsx"));
const SuccessLogin = lazy(() => import("./Components/login-signup/SuccessLogin.jsx"));
const WeatherApp = lazy(() => import("./Components/weather-app/Weather.jsx"));
const ProductList = lazy(() => import("./Components/Shopping-products/ProductList.jsx"));
const Cart = lazy(() => import("./Components/Shopping-products/Card.jsx"));
const BlogsList = lazy(() => import("./Components/Blogs/BlogsList.jsx"));
const BlogsForm = lazy(() => import("./Components/Blogs/BlogsForm.jsx"));
const BlogsEdit = lazy(() => import("./Components/Blogs/BlogsEdit.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 h-[90vh] overflow-y-auto">
            <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
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
                <Route path="/shopping-cart" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/blogs-list" element={<BlogsList />} />
                <Route path="/blogs-create" element={<BlogsForm />} />
                <Route path="/blogs-edit/:id" element={<BlogsEdit />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>

  );
}
