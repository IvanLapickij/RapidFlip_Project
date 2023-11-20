import React from "react";
import img1 from "../Media/Images/gaming_boy.jpg";
import img2 from "../Media/Images/adventure.jpg";
import img3 from "../Media/Images/vr_girl.jpg";
import img4 from "../Media/Images/LOGO1.jpg";
import { Fade } from "react-awesome-reveal";
const About: React.FC = () => {
  return (
    <div className="container marketing">
      <div className="d-flex justify-content-center align-items-center">
        <img src={img4} alt="Image" className="img-fluid" />
      </div>
      <h1 id="About">About</h1>
      {/* START THE FEATURETTES */}
      <hr className="featurette-divider" />
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1"> </h2>
            <p className="lead">
              Many young people play video games, but concerns about their
              impact on stress and mental health exist. Encouraging mindful game
              choices, awareness, and support for mental health is essential,
              and
              <span className="text-warning">
                {" "}
                ongoing research can help guide responsible gaming habits.
              </span>
            </p>
          </div>
          <div className="col-md-5">
            <img src={img1} alt="Image" className="img-fluid" />
          </div>
        </div>
      </Fade>
      <hr className="featurette-divider" />
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Our Solution{" "}
              {/* <span className="text-body-secondary">Versitile</span> */}
            </h2>
            <p className="lead">
              We invite psychologists, elementary school teachers, and game
              lovers to join our team, and interview gamers to explore effective
              game mechanics that combine learning with enjoyment,{" "}
              <span className="text-warning">
                to bring positive change to the gaming community.
              </span>
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={img2} alt="Image" className="img-fluid" />
          </div>
        </div>
      </Fade>
      <hr className="featurette-divider" />
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              To make difference{" "}
            </h2>
            <p className="lead">
              There are very few developers working on games mixing
              entertainment with education. And{" "}
              <span className="text-warning">
                we found it’s a great opportunity to work on them in Ireland.
              </span>
            </p>
          </div>
          <div className="col-md-5">
            <img src={img3} alt="Image" className="img-fluid" />
          </div>
        </div>
      </Fade>
      <hr className="featurette-divider" />
    </div>
  );
};

export default About;
