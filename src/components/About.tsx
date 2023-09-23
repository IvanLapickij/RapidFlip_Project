import React from "react";
import img1 from "../Media/Images/gaming_boy.jpg";
import img2 from "../Media/Images/adventure.jpg";
import img3 from "../Media/Images/vr_girl.jpg";
import { Fade } from "react-awesome-reveal";
const About: React.FC = () => {
  return (
    <div className="container marketing">
      <h1 id="About">About Us</h1>
      {/* START THE FEATURETTES */}
      <hr className="featurette-divider" />
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Welcome to Rapid Flip{" "}
            </h2>
            <p className="lead">
              In our game, players become fearless pilots navigating advanced
              aircraft in a high-stakes alternate reality. With stunning visuals
              and immersive gameplay, prepare for thrilling aerial missions,
              dogfights, and a captivating storyline..
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
              Discover the Charms of Ireland{" "}
              <span className="text-body-secondary">Versitile</span>
            </h2>
            <p className="lead">
              Customize your aircraft and tackle missions in diverse landscapes,
              forging alliances, uncovering secrets, and confronting formidable
              foes. Your choices shape the narrative as you hone your piloting
              skills in various scenarios.
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
              Treasures Await{" "}
            </h2>
            <p className="lead">
              Beyond the cockpit, explore a dynamic world, interact with ground
              crews, and witness the impact of your actions. The game offers
              dramatic moments, camaraderie, and personal growth as you
              transform from a novice pilot to a legendary ace. It's an
              unforgettable journey of heroism in the skies.
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
