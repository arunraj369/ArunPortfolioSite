import React from "react";
import Header from "../Header/Header";
import Flipkart from "../assets/flipkart.jpg";
import Netflix from "../assets/Netflix.jpg";
import "./Project.css";
function Projects() {
  const projects_details = [
    {
      id: 1,
      Project_name: "Netflix Clone",
      Tech_used: "Angular,Mock API, HTML ,CSS",
      Url: "www.flipkart.com",
      Git_url: "www.git.com",
      Image_link: Netflix,
      Detail:
        "A Netflix app to watch movies we can see popular movies in this app  ",
    },
    {
      id: 2,
      Project_name: "Flipkart Clone",
      Tech_used: "Angular,Mock API, HTML ,CSS",
      Url: "www.flipkart.com",
      Git_url: "www.git.com",
      Image_link: Flipkart,
      Detail:
        "Flipkart app is used to purchase product and Add product in cart ",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container" style={{ height: "100%" }}>
        {/* <h1 style={{ textAlign: "center" }}>Projects</h1> */}
        <div className="">
          {Object.values(projects_details).map((Project_data, index) => (
            <div
              key={index.id}
              // className="d-flex flex-row "
              className="align-self-start"
              style={{
                marginLeft: "10%",
                // backgroundColor: "red",
                marginBottom: "2%",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  marginTop: "2%",
                  width: "30%",
                  // backgroundColor: "blue",
                }}
              >
                <h6 style={{ color: "#4F7396" }}>{Project_data.Tech_used}</h6>
                <h5>{Project_data.Project_name}</h5>
                <p style={{ color: "#4F7396" }}>{Project_data.Detail}</p>

                {/* <h6>Technology used</h6> */}

                <div className="d-flex flex-column ">
                  <a
                    href={Project_data.Url}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>

                  <a
                    href={Project_data.Git_url}
                    className="btn btn-primary mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on github
                  </a>
                </div>
              </div>
              <img
                src={Project_data.Image_link}
                style={{
                  width: "40%",
                  height: "40%",
                  marginLeft: "10%",
                  marginBottom: "6%",
                }}
                alt="No img"
              />
              {/* <div
             
                style={{ marginLeft: "10%", marginTop: "2%" }}
              >
              
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
