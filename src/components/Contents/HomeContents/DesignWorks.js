import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./DesignWorks.module.css";
import design from "../../../assets/design.png";
import worklaptop from "../../../assets/worklaptop.png";

import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiInkscape } from "react-icons/si";
import { SiSketch } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { SiDocker } from "react-icons/si";
// import { SiKubernetes } from "react-icons/si";

const DesignWorks = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <React.Fragment>
      {/* <div data-aos="fade-down" className={classes.workhead}>
        <h1>What I Do ?</h1>
      </div> */}
      <div className={classes.hboxdesign}>
        <div data-aos="fade-right" className={classes.hleftBoxdesign}>
          <img className={classes.man} src={design} />
          {/* <img className={classes.lappy} src={worklaptop} /> */}
        </div>
        <div
          className={classes.hrightBoxdesign}
          // data-aos="fade-left"
          // data-aos-easing="ease-in-out"
          // data-aos-anchor-placement="top-bottom"
        >
          <div className={classes.head1design} data-aos="fade-left" data-aos-duration="1000">
            <h2>UI/UX Design</h2>
          </div>
          <div className={classes.head2design} data-aos="fade-left" data-aos-duration="1500">
            <div className={classes.adobeillu} data-hover="Adobe Illustrator">
              {/* <FontAwesomeIcon icon={faHtml5} /> */}
              <SiAdobeillustrator />
            </div>
            <div className={classes.figma} data-hover="Figma">
              {/* <FontAwesomeIcon icon={faCss3} /> */}
              <SiFigma />
            </div>
            <div className={classes.adobexd} data-hover="Adobe XD">
              {/* <FontAwesomeIcon icon={faJs} /> */}
              <SiAdobexd />
            </div>
            <div className={classes.ink} data-hover="Ink Scape">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              <SiInkscape />
            </div>
            <div className={classes.sketch} data-hover="Sketch">
              {/* <FontAwesomeIcon icon={faNodeJs} /> */}
              <SiSketch />
            </div>
          </div>
          <div data-aos="fade-left" className={classes.fchilddesign}>
            <p>
              ⚡Designing highly attractive user interface for mobile and web
              applications
            </p>
            <p>⚡Customizing logo designs and building logos from scratch</p>
            <p>
              ⚡Creating the flow of application functionalities to optimize
              user experience
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DesignWorks;
