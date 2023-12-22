import React from "react";
import './About.css'
import img1 from "../Media/Images/gaming_boy.jpg";
import imgProblem from "../Media/Images/games_children.jpg";
import imgSolution2 from "../Media/Images/games_yang1.jpg";
import imgSolution1 from "../Media/Images/games_young_2.jpg";
import imgCommunity from "../Media/Images/community.jpg";
import { Fade } from "react-awesome-reveal";
const About: React.FC = () => {
  return (
    <div className="container marketing">
      {/* START THE FEATURETTES */}
      <hr className="featurette-divider" />
      <Fade delay={1e3} cascade damping={1e-1}>

      <div className="row featurette">
        <div className="col-md-6 order-md-2">
          <img src={img1} alt="Image" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-1">
          <div className="featurette-content">
            <h2 className="featurette-heading fw-normal lh-1">
              {'About Us'}
            </h2>
            <p className="lead">
            Making Games with
            </p>
            <p className="lead">
              Enlightment
            </p>
            <p className="lead">
              Encouragement
            </p>
            <p className="lead">
              Enterainment
            </p>
            <p className="lead">
              Confident
            </p>
          </div>
        </div>
      </div>

      </Fade>
      <hr className="featurette-divider" />
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              The Problem{" "}
              {/* <span className="text-body-secondary">Versitile</span> */}
            </h2>
            <p className="lead problem">
            99% of kid
            </p>
            <p className="lead problem">
            once played games
            </p>
            <br></br>
            <p className="lead problem">
            60% of parents
            </p>
            <p className="lead problem">
            are concerned
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={imgProblem} alt="Image" className="img-fluid" />
          </div>
        </div>
      </Fade>
      <hr className="featurette-divider" />
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="row featurette">
          <div className="col-md-4">
            <h2 className="featurette-heading fw-normal lh-1">
              Our Solution{" "}
            </h2>
            <p className="lead problem">
              Replacing
            </p>
            <p className="lead problem">
              Negative Contents
            </p>
            <p className="lead problem">
              with Positive
            </p>
            <br></br>
            <p className="lead problem">
              Learn with fun
            </p>
          </div>
          <div className="col-md-4">
            <img src={imgSolution1} alt="Image" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={imgSolution2} alt="Image" className="img-fluid" />
          </div>
        </div>
      </Fade>
      <hr className="featurette-divider" />
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="row featurette">
          <div className="col-md-5">
            <h2 className="featurette-heading fw-normal lh-1">
              Our Solution{" "}
            </h2>
            <p className="lead problem">
            Developing games with kids, parents, school teachers and psychologists to iterate the best gameplay functions
            </p>
          </div>
          <div className="col-md-7">
            <img src={imgCommunity} alt="Image" className="img-fluid" />
          </div>
        </div>
      </Fade>
      <hr className="featurette-divider" />
    </div>
  );
};

export default About;
