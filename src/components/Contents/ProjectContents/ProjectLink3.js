import classes from "./ProjectLink3.module.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiCodeproject } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiUbuntu } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiPython } from "react-icons/si";

const ProjectLink3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const project3Handler1 = (event) => {
    event.preventDefault();
    openInNewTab("https://github.com/shashiiitp19");
  };
  const project3Handler2 = (event) => {
    event.preventDefault();
    openInNewTab("https://github.com/shashiiitp19");
  };
  const moreProjects = (event) => {
    event.preventDefault();
    openInNewTab("https://github.com/shashiiitp19");
  };

  return (
    <React.Fragment>
      <div className={classes.project}>
        <div className={classes.leftp}>
          <button className={classes.button} onClick={project3Handler1}>
            <div className={classes.top_l}>
              <SiCodeproject />
            </div>
            <div className={classes.heading}>
              <h2>Machine Health Monitoring</h2>
            </div>
            <div className={classes.para}>
              <p>
                This work analyzes tool sound in turning operations(e.g CNC
                Lathe Machine) for early detection of machine health using deep
                learning, hybrid parallel CNN and GRU performs better that
                state-of-art.
              </p>
              <p>Created on 2022-09-20</p>
            </div>

            <div className={classes.icon_s_l}>
              <div className={classes.html}>
                <SiTensorflow />
              </div>
              <div className={classes.css}>
                <SiKeras />
              </div>
              <div className={classes.js}>
                <SiPytorch />
              </div>
              <div className={classes.react}>
                <SiPython />
              </div>
            </div>
          </button>
        </div>

        <div className={classes.rightp}>
          <button className={classes.button_r} onClick={project3Handler2}>
            <div className={classes.top_r}>
              <SiCodeproject />
            </div>
            <div className={classes.heading_r}>
              <h2> Enigma Machine </h2>
            </div>
            <div className={classes.para_r}>
              <p>
                A simulator of Enigma Machine has been designed in CPP to encode
                the text and then decode is back to original text.
              </p>
              <p>Created on 2022-09-20</p>
            </div>

            <div className={classes.icon_s_r}>
              <div className={classes.html}>
                <SiCplusplus />
              </div>
              <div className={classes.css}>
                <SiUbuntu />
              </div>
              {/*<div className={classes.js}>
                <SiJavascript />
              </div>
              <div className={classes.react}>
                <SiReact />
              </div> */}
            </div>
          </button>
        </div>
        <div className={classes.btnproject} onClick={moreProjects}>
          <button>More Projects</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectLink3;
