import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./HomeWorks.module.css";
import { useState } from "react";
// import icon from "../../../assets/list_icon.svg";
import fullstack from "../../../assets/fullstack.png";
// import worklaptop from "../../../assets/worklaptop.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
// import { faCss3 } from "@fortawesome/free-brands-svg-icons";
// import { faJs } from "@fortawesome/free-brands-svg-icons";
// import { faReact } from "@fortawesome/free-brands-svg-icons";
// import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
// import { faNpm } from "@fortawesome/free-brands-svg-icons";
// import { faYarn } from "@fortawesome/free-brands-svg-icons";

import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { SiYarn } from "react-icons/si";




const HomeWorks = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <React.Fragment>
      <div data-aos="fade-right" data-aos-duration="800" className={classes.workhead}>
        <h1>What I Do ?</h1>
      </div>
      <div className={classes.hbox}>
        <div data-aos="fade-right" className={classes.hleftBox}>
          <img className={classes.man} src={fullstack} />
          {/* <img className={classes.lappy} src={worklaptop} /> */}
        </div>
        <div
          className={classes.hrightBox}
          // data-aos="fade-left"
          // data-aos-easing="ease-in-out"
          // data-aos-anchor-placement="top-bottom"
        >
          <div className={classes.head1} data-aos="fade-left" data-aos-duration="1000">
            <h2>Full Stack Development</h2>
          </div>
          <div className={classes.head2} data-aos="fade-left" data-aos-duration="1500" >
            <div className={classes.html} data-hover="HTML5">
              {/* <FontAwesomeIcon icon={faHtml5} /> */}
              <SiHtml5 />
            </div>
            <div className={classes.css} data-hover="CSS3">
              {/* <FontAwesomeIcon icon={faCss3} /> */}
              <SiCss3 />
            </div>
            <div className={classes.script} data-hover="JavaScript">
              {/* <FontAwesomeIcon icon={faJs} /> */}
              <SiJavascript />
            </div>
            <div className={classes.react} data-hover="ReactJS">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              <SiReact />
            </div>
            <div className={classes.node} data-hover="NodeJS">
              {/* <FontAwesomeIcon icon={faNodeJs} /> */}
              <FaNodeJs />
            </div>
            <div className={classes.npm} data-hover="NPM">
              {/* <FontAwesomeIcon icon={faNpm} /> */}
              <SiNpm />
            </div>
            <div className={classes.yarn} data-hover="Yarn">
              {/* <FontAwesomeIcon icon={faYarn} /> */}
              <SiYarn />
            </div>
          </div>
          <div data-aos="fade-left" className={classes.fchild}>
            <p>⚡Building responsive website's Front-end using React-Redux</p>
            <p>⚡Creating application Back-end in Node, Express & Flask</p>
            <p>
              ⚡Developing mobile applications using Flutter, React Native and
              solo android apps using Kotlin
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeWorks;
