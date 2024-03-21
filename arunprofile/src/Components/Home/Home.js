import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Home.css";
// import bg from "../assets/Arunphoto.jpg";

function Home() {
  const navigate = useNavigate();

  function naviagteToPortfolio() {
    // alert("onclick working");
    navigate("/portfolio");
  }
  // function navigateToExperience() {
  //   // alert("onclick working");
  //   navigate("/Experience");
  // }
  // function navigateToContact() {
  //   navigate("/Contact");
  // }
  // function navigateToProject() {
  //   navigate("/Projects");
  // }
  // function navigateToPortfolio() {
  //   navigate("/Portfolio");
  // }

  return (
    <div
      className="body"
      style={{ backgroundImage: "linear-gradient(to right, white, #E9F1FA)" }}
    >
      <Header />

      <div
        className="container background-image d-flex flex-column justify-content-end"
        style={{ color: "white" }}
      >
        <h3 style={{ color: "grey" }}>Hi I'm Arunraj </h3>
        <h6 style={{ color: "grey" }}>
          Iam a Fullstack developer based on Salem .I am passionate about
          building high-quality web applications with modern technologies.
        </h6>
        <button
          type="button"
          class="btn btn-primary portfolio_btn mb-5"
          onClick={naviagteToPortfolio}
        >
          View portfolio
        </button>
      </div>

      {/* <div
        className="container justify-content-center"
        style={{
          height: "10%",
          // borderRadius: "10px",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <button
          type="button"
          className="btn "
          style={{ color: "black" }}
          onClick={navigateToPortfolio}
        >
          <h6>Portfolio</h6>
        </button>
        <button
          type="button"
          className="btn "
          style={{ color: "black" }}
          onClick={navigateToExperience}
        >
          <h6>Experience</h6>
        </button>
        <button
          type="button"
          className="btn "
          style={{ color: "black" }}
          onClick={navigateToProject}
        >
          <h6>Projects</h6>
        </button>
        <button
          type="button"
          className="btn  "
          style={{ color: "black" }}
          onClick={navigateToContact}
        >
          <h6>Contact</h6>
        </button>
      </div> */}
    </div>
  );
}

export default Home;
