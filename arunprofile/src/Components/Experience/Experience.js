import React from "react";
import Header from "../Header/Header";
// import Ex from "./Experience.css";
// import AvatarEditor from "react-avatar-editor";
import logo from "../assets/Aruncrop.png";
import bag from "../assets/bag.png";
import line from "../assets/line.png";
import degree from "../assets/degree.png";
import certificate from "../assets/certificate.png";

function Experience() {
  const Experience_data = [
    {
      id: 1,

      Role: "Frontend Developer",
      Date: "Aug-2022 to Sep -2023 ",
      Location: "Salem,Tamilnadu",
    },
    {
      id: 2,

      Role: "Backend Developer",
      Date: "Sep -2023 to Dec-2023",
      Location: "Salem,Tamilnadu",
    },
    {
      id: 3,

      Role: "Fullstack Developer",
      Date: "Dec-2023 to Till now ",
      Location: "Salem,Tamilnadu",
    },
  ];

  const Education = [
    {
      id: 1,
      Degree: "BE - Mechanical Engineering",
      Date: "Jun-2016 to Mar -2019 ",
      Location: "Salem,Tamilnadu",
    },
    {
      id: 2,
      Degree: "Diploma in Mechanical Engineering",
      Date: "Jun-2012 to Mar -2016 ",
      Location: "Salem,Tamilnadu",
    },
    {
      id: 3,
      Degree: "Bala bharathi matriculation higher secondary school",
      Date: "Jun-2009 to Mar -2012 ",
      Location: "Salem,Tamilnadu",
    },
  ];

  const Certification = [
    {
      id: 1,
      Name: "MERN stack developer",
      year: 2022,
    },
    {
      id: 2,
      Name: "Mendix Begginer",
      year: 2022,
    },
  ];

  function downloadResume() {
    // Specify the file URL you want to download
    var resumeUrl = "../assests/resume.pdf";

    // Create a temporary anchor element
    var link = document.createElement("a");
    link.href = resumeUrl;

    // Set the download attribute and trigger a click event
    link.download = "resume.pdf";
    link.click();
    alert("downloading");
  }

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
            marginBottom: "5%",
          }}
        >
          𝕰𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖊
        </h2>
        <div className="d-flex flex-row" style={{ marginLeft: "7%" }}>
          {/* <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "100px",
              height: "100px",
            }}
          >
            <AvatarEditor
              image={logo}
              width={100}
              height={100}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={1.2}
              rotate={0}
            />
          </div> */}
          <img
            src={logo}
            alt="description_of_your_image"
            style={{ borderRadius: "50%", width: "140px", height: "140px" }}
          />

          <div className="d-flex flex-column ml-4">
            <h1 style={{ display: "inline-block" }}>Arunraj V</h1>
            <p style={{ display: "inline-block", color: "#4F7396" }}>
              Front-end Developer
            </p>
            {/* <button type="button" className="btn btn-primary">
              Resume
            </button> */}
            <button
              type="button"
              class="btn btn-primary"
              onclick={downloadResume}
            >
              Resume
            </button>
          </div>

          <div className="justify-content-end"></div>
        </div>

        {/* Experience */}
        <div className="mt-5" style={{ marginLeft: "7%", marginTop: "2%" }}>
          <h4 style={{ marginBottom: "2%" }}>Experience</h4>
          <div>
            {Object.values(Experience_data).map((Exdata, index) => (
              <div key={index.id} className="d-flex flex-row">
                <div className="d-flex flex-column">
                  <img
                    src={bag}
                    alt="No icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      display: "inline-block",
                    }}
                  />
                  <img
                    src={line}
                    alt="No icon"
                    style={{
                      width: "20px",
                      height: "30px",
                      display: "inline-block",
                    }}
                  />
                </div>
                <div className="ml-3">
                  <h6>{Exdata.Role}</h6>
                  <div className="d-flex flex-row" style={{ color: "#4F7396" }}>
                    <p>{Exdata.Date} </p>
                    <p className="ml-2">, {Exdata.Location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Education code */}
        <div style={{ marginLeft: "7%", marginTop: "2%" }}>
          <h4 style={{ marginBottom: "2%" }}>Education</h4>
          <div>
            {Object.values(Education).map((edu, index) => (
              <div key={index.id} className="d-flex flex-row">
                <div
                  className="d-flex flex-column"
                  style={{ display: "inline" }}
                >
                  <img
                    src={degree}
                    alt="No icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      display: "inline-block",
                    }}
                  />
                  <img
                    src={line}
                    alt="No icon"
                    style={{
                      width: "20px",
                      height: "30px",
                      display: "inline-block",
                    }}
                  />
                </div>
                <div className="ml-3">
                  <h6>{edu.Degree}</h6>
                  <div className="d-flex flex-row" style={{ color: "#4F7396" }}>
                    <p>{edu.Date} </p>
                    <p className="ml-2">, {edu.Location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Certification code */}
        <div style={{ marginLeft: "7%", marginTop: "2%" }}>
          <h4 style={{ marginBottom: "2%" }}>Certification</h4>
          <div>
            {Object.values(Certification).map((cer, index) => (
              <div key={index.id} className="d-flex flex-row">
                <div className="d-flex flex-column">
                  <img
                    src={certificate}
                    alt="No icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      display: "inline-block",
                    }}
                  />
                  <img
                    src={line}
                    alt="No icon"
                    style={{
                      width: "20px",
                      height: "30px",
                      display: "inline-block",
                    }}
                  />
                </div>
                <div className="ml-3">
                  <h6>{cer.Name}</h6>
                  <p style={{ color: "#4F7396" }}>{cer.year} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
