import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  function naviagteToPortfolio() {
    // alert("onclick working");
    navigate("/portfolio");
  }

  return (
    <div className="body">
      <Header />

      <div
        className="container background-image d-flex flex-column justify-content-end"
        style={{ color: "white" }}
      >
        <h3>Hi I'm Arunraj </h3>
        <p>
          Iam a Fullstack developer based on Salem .I am passionate about
          building high-quality web applications with modern technologies.
        </p>
        <button
          type="button"
          class="btn btn-primary portfolio_btn mb-5"
          onClick={naviagteToPortfolio}
        >
          View portfolio
        </button>
      </div>

      <div
        className="container "
        style={{
          height: "10%",
          borderRadius: "10px",
        }}
      >
        <button
          type="button"
          className="btn btn-outline-info"
          style={{ color: "black" }}
        >
          <h6>Experience</h6>
        </button>
        <button
          type="button"
          className="btn btn-outline-info ml-5"
          style={{ color: "black" }}
        >
          <h6>Project</h6>
        </button>
        <button
          type="button"
          className="btn btn-outline-info ml-5 "
          style={{ color: "black" }}
        >
          <h6>Contact</h6>
        </button>
      </div>
    </div>
  );
}

export default Home;
