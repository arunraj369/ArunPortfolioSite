import React from "react";
import Header from "../Header/Header";
import "./Portfolio.css";
function About() {
  const Skills = [
    {
      id: 0,
      name: "Full Stack Developement Program",
      Details: "Mern stack ",
    },

    {
      id: 1,
      name: "UI/UX Program",
      Details: "Design using figma and Ai tools",
    },

    {
      id: 2,
      name: "Javascript",
      Details: "Able to work in java script",
    },
    {
      id: 3,
      name: "Python",
      Details: "Able to work in python programing",
    },
    {
      id: 4,
      name: "React js",
      Details: "create mobile responsive ui using react js",
    },
    {
      id: 5,
      name: "Angular ",
      Details: "create mobile responsive ui using angular js",
    },
    {
      id: 6,
      name: "Node js",
      Details: "for backend i use express js in node to access database",
    },
    {
      id: 7,
      name: "SQL",
      Details: "for table wise data i can use sql database ",
    },
    {
      id: 8,
      name: "mongoDB",
      Details: "No sql database is use mongodb",
    },
  ];

  return (
    <div
      style={{ backgroundImage: "linear-gradient(to right, white, #E9F1FA)" }}
    >
      <Header />
      <div className="container" style={{ height: "100%" }}>
        <h2
          style={{
            textDecoration: "underline",
            textAlign: "center",
            marginBottom: "3%",
          }}
        >
          𝖕𝖔𝖗𝖙𝖋𝖔𝖑𝖎𝖔
        </h2>
        <div
          className="card"
          style={{ border: "none", backgroundColor: "white" }}
        >
          <h1>Arunraj V</h1>
          <h6 style={{ color: "#4F7396" }}>Fullstack Developer</h6>
          <h6 style={{ color: "#4F7396" }}>TamilNadu</h6>
        </div>
        <div className="Biocard">
          <h4 className="mt-3 ml-3" style={{ textDecoration: "underline" }}>
            Bio
          </h4>
          <h6
            style={{
              marginLeft: "20px",
              // fontFamily: "Arial, sans-serif",
              fontFamily: "system-ui",
            }}
          >
            &emsp;I'm a Fullstack developer with a passion for building
            beautiful and functional web experiences. Currently, I work at a Asm
            technology in Salem, where I get to wear many hats and work across
            the stack. I love the process of creating something from nothing and
            seeing it come to life on the web. In my free time, you can find me
            exploring the city, trying new coffee shops, or working on side
            projects.
          </h6>
        </div>
        <div>
          <h4 className="mt-3 ml-3" style={{ textDecoration: "underline" }}>
            Skills
          </h4>
          <div
            className="card-container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {Object.values(Skills).map((skill) => (
              <div
                key={skill.id}
                className="card"
                style={{
                  width: "15rem",
                  margin: "0.5rem",

                  marginLeft: "8%",
                  backgroundImage:
                    "linear-gradient(to right, #000080, #000080)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                }}
              >
                <div className="card-body" style={{ color: "white" }}>
                  <h6 className="card-title">{skill.name}</h6>
                  <p className="card-text">{skill.Details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
