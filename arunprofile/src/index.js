import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./Components/Portfolio/Portfolio";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Header from "./Components/Header/Header";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Experience" element={<Experience />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
