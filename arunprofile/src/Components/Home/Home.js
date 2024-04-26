import React from "react";
import Header from "../Header/Header";
import arunimg from "../assets/Arunphoto.jpg";

function Home() {
  const Skills = [
    {
      id: 0,
      name: "Full Stack Development",
      Details: `
      Experienced in full-stack development with expertise in both MERN and MEAN  stacks, capable of delivering end-to-end solutions.`,
    },
    {
      id: 1,
      name: "UI/UX Program",
      Details: `Proficient in design utilizing Figma and AI tools for comprehensive and innovative design solutions.`,
    },
    {
      id: 2,
      name: "JavaScript",
      Details: `Experienced in JavaScript (ES6) for front-end and back-end development, adept at creating interactive and responsive web applications. `,
    },
    {
      id: 3,
      name: "Python",
      Details: `Skilled in Python for software development, with expertise in building applications for web `,
    },
    {
      id: 4,
      name: "React.js",
      Details: `Proficient in React.js for front-end development, specializing in building modern and responsive user interfaces. Experienced in leveraging React.js libraries and tools to develop dynamic and efficient web applications.`,
    },
    {
      id: 5,
      name: "Angular",
      Details: `Skilled in Angular for front-end development, adept at creating robust and scalable single-page applications (SPAs). Experienced in utilizing Angular libraries and tools to build dynamic and interactive web interfaces`,
    },
    {
      id: 6,
      name: "Node.js",
      Details: `Experienced in Node.js for back-end development, specializing in building scalable and efficient server-side applications. Proficient in leveraging Node.js frameworks like Express.js to create RESTful APIs and handle server-side logic.`,
    },
    {
      id: 7,
      name: "SQL",
      Details: `Skilled in SQL for database management and querying, proficient in designing and optimizing relational databases. Experienced in writing complex SQL queries to retrieve and manipulate data efficiently, ensuring robust and scalable data-driven applications.`,
    },
    {
      id: 8,
      name: "MongoDB",
      Details: `Experienced in MongoDB for NoSQL database management, adept at designing and implementing scalable and flexible data solutions. Proficient in leveraging MongoDB's document-based model to store and retrieve data efficiently, enabling high-performance and dynamic applications.`,
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
              <p className="text-muted" style={{ textAlign: "left" }}>
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
                <h5
                  className="card-title"
                  style={{ textDecoration: "underline" }}
                >
                  {skill.name}
                </h5>
                <p className="card-text" style={{ textAlign: "left" }}>
                  {skill.Details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
