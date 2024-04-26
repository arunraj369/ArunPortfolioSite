import React from "react";
import Header from "../Header/Header";
import arunimg from "../assets/Arunphoto.jpg";

function Home() {
  const Skills = [
    {
      id: 0,
      name: "Full Stack Development Program",
      Details: "MERN stack",
    },
    {
      id: 1,
      name: "UI/UX Program",
      Details: "Design using Figma and AI tools",
    },
    {
      id: 2,
      name: "JavaScript",
      Details: "Able to work in JavaScript",
    },
    {
      id: 3,
      name: "Python",
      Details: "Able to work in Python programming",
    },
    {
      id: 4,
      name: "React.js",
      Details: "Create mobile responsive UI using React.js",
    },
    {
      id: 5,
      name: "Angular",
      Details: "Create mobile responsive UI using Angular",
    },
    {
      id: 6,
      name: "Node.js",
      Details: "For backend, I use Express.js in Node.js to access databases",
    },
    {
      id: 7,
      name: "SQL",
      Details: "For table-wise data, I can use SQL databases",
    },
    {
      id: 8,
      name: "MongoDB",
      Details: "NoSQL database is used MongoDB",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md d-flex align-items-center">
            <img
              src={arunimg}
              alt="Not Available"
              className="img-fluid"
              style={{ maxHeight: "100vh", objectFit: "cover" }}
            />
          </div>
          <div className="col-md">
            <div className="card-body">
              <h1>Arunraj V</h1>
              <h6 className="text-muted">Fullstack Developer</h6>
              <h6 className="text-muted">Tamil Nadu</h6>
              <h4 className="mt-3 text-muted">Bio</h4>
              <p className="text-muted">
                Experienced Full stack developer around 2 years of expertise in
                MERN and MEAN stack development, adept at crafting robust
                software solutions. Proven track record of delivering
                high-quality, scalable applications and thriving in
                collaborative, cross-functional environments. Skilled in
                independent problem-solving, leveraging MongoDB, Express.js,
                Angular, React and Node.js for efficient development. Actively
                seeking opportunities to contribute to dynamic software projects
                and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Mapping */}
      <div className="container">
        <h4 className="mt-5 mb-3" style={{ textDecoration: "underline" }}>
          Skills
        </h4>
        <div className="card-container d-flex flex-wrap justify-content-center">
          {Skills.map((skill) => (
            <div
              key={skill.id}
              className="card m-2"
              style={{
                width: "15rem",
                backgroundImage: "linear-gradient(to right, #000080, #000080)",
                color: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
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
  );
}

export default Home;
