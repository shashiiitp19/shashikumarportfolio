import classes from "./ProjectLink.module.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiCodeproject } from "react-icons/si";
const ProjectLink = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const project1Handler1 = (event) => {
    event.preventDefault();
    openInNewTab("https://github.com/shashiiitp19");
  };
  const project1Handler2 = (event) => {
    event.preventDefault();
    openInNewTab("https://github.com/shashiiitp19");
  };

  return (
    <div className={classes.project}>
      <div className={classes.leftp}>
        <button className={classes.button} onClick={project1Handler1}>
          <div className={classes.top_l}>
            <SiCodeproject />
          </div>
          <div className={classes.heading}>
            <h2>professionalPortfolio</h2>
          </div>
          <div className={classes.para}>
            <p>
              The complete portfolio website hosted using github pages
              (gh-pages). Visit the website here :
            </p>
            <p>Created on 2022-09-20</p>
          </div>

          <div className={classes.icon_s_l}>
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

      <div className={classes.rightp}>
        <button className={classes.button_r} onClick={project1Handler2}>
          <div className={classes.top_r}>
            <SiCodeproject />
          </div>
          <div className={classes.heading_r}>
            <h2>Food Ordering App</h2>
          </div>
          <div className={classes.para_r}>
            <p>
              This web app is designed with core concepts of React & JavaScript.
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

export default ProjectLink;
