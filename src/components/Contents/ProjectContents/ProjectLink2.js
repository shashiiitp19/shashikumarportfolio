import classes from "./ProjectLink2.module.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiCodeproject } from "react-icons/si";

import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiPython } from "react-icons/si";

const ProjectLink2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const project2Handler1 = (event) => {
    event.preventDefault();
    openInNewTab("https://github.com/shashiiitp19");
  };
  const project2Handler2 = (event) => {
    event.preventDefault();
    openInNewTab("https://github.com/shashiiitp19");
  };

  return (
    <div className={classes.project}>
      <div className={classes.leftp}>
        <button className={classes.button} onClick={project2Handler1}>
          <div className={classes.top_l}>
            <SiCodeproject />
          </div>
          <div className={classes.heading}>
            <h2>Hyperspectral Image Denoising</h2>
          </div>
          <div className={classes.para}>
            <p>
              Attention network along with CNN Auto-Encoder is used as
              architecture & model is trained on clean-noisy pairs of HSI
              chunks.
            </p>
            <p>Created on 2022-09-20</p>
          </div>

          <div className={classes.icon_s_l}>
            <div className={classes.tf}>
              <SiTensorflow />
            </div>
            <div className={classes.keras}>
              <SiKeras />
            </div>
            <div className={classes.torch}>
              <SiPytorch />
            </div>
            <div className={classes.python}>
              <SiPython />
            </div>
          </div>
        </button>
      </div>

      <div className={classes.rightp}>
        <button className={classes.button_r} onClick={project2Handler2}>
          <div className={classes.top_r}>
            <SiCodeproject />
          </div>
          <div className={classes.heading_r}>
            <h2>User Input & List rendering</h2>
          </div>
          <div className={classes.para_r}>
            <p>
              User's details will be shown on the page as a list with React
              Concepts.
            </p>
            <p>Created on 2022-09-20</p>
          </div>

          <div className={classes.icon_s_r}>
            <div className={classes.html}>
              <SiHtml5 />
            </div>
            <div className={classes.css}>
              <SiCss3 />
            </div>
            <div className={classes.js}>
              <SiJavascript />
            </div>
            <div className={classes.react}>
              <SiReact />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectLink2;
