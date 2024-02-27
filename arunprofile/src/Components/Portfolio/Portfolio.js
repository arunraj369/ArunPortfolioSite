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
      id: 2,
      name: "UI/UX Program",
      Details: "Design using figma and Ai tools",
    },

    {
      id: 2,
      name: "UI/UX Program",
      Details: "Design using figma and Ai tools",
    },
    {
      id: 2,
      name: "UI/UX Program",
      Details: "Design using figma and Ai tools",
    },
    {
      id: 1,
      name: "Python ",
      Details: "basic python program",
    },
    {
      id: 0,
      name: "Full Stack Developement Program",
      Details: "Mern stack ",
    },
    {
      id: 2,
      name: "UI/UX Program",
      Details: "Design using figma and Ai tools",
    },
    {
      id: 2,
      name: "UI/UX Program",
      Details: "Design using figma and Ai tools",
    },
    {
      id: 2,
      name: "UI/UX Program",
      Details: "Design using figma and Ai tools",
    },
    {
      id: 2,
      name: "UI/UX Program",
      Details: "Design using figma and Ai tools",
    },
    {
      id: 2,
      name: "UI/UX Program",
      Details: "Design using figma and Ai tools",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container" style={{ height: "100%" }}>
        <div className="card">
          <h1>Arunraj</h1>
          <p style={{ color: "#4F7396", marginLeft: "5px" }}>
            Fullstack Developer
          </p>
          <p style={{ color: "#4F7396", marginLeft: "5px" }}>TamilNadu</p>
        </div>
        <div className="Biocard">
          <h3>Bio</h3>
          <p style={{ marginLeft: "5px" }}>
            I'm a Fullstack developer with a passion for building beautiful and
            functional web experiences. Currently, I work at a Asm technology in
            Salem, where I get to wear many hats and work across the stack. I
            love the process of creating something from nothing and seeing it
            come to life on the web. In my free time, you can find me exploring
            the city, trying new coffee shops, or working on side projects.
          </p>
        </div>
        <div>
          <h3>Skills</h3>
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
                  backgroundColor: "#D1DBE8",
                }}
              >
                <div className="card-body">
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
