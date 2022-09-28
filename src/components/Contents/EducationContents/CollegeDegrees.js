import React, { useEffect } from "react";
import classes from "./CollegeDegrees.module.css";
import iitlogo2 from "../../../assets/iitlogo2.png";
import icon from "../../../assets/list_icon.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const CollegeDegrees = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const websitePatnaHandler = (event) => {
    event.preventDefault();
    openInNewTab("https://www.iitp.ac.in/");
  };

  return (
    <div className={classes.degree}>
      <div className={classes.title} data-aos="fade-right" data-aos-duration="1000">
        <h2>Degrees Recieved</h2>
      </div>
      <div className={classes.leftdegree} data-aos="fade-right">
        <img src={iitlogo2} />
      </div>
      <div className={classes.rightdegree} data-aos="fade-left">
        <div className={classes.degreehead}>
          <h1>Indian Institute of Technology, Patna</h1>
          <h2>M.Tech in Computer Science</h2>
          <p>2019-2021</p>
        </div>
        <div className={classes.degreecontent}>
          <p>
            ⚡I have studied basic Software engineering subjects like DS,
            Algorithms, AI etc.
          </p>
          <p>
            ⚡Apart from this, I have done courses on Deep Learning, Data
            Science, Cloud Computing and Full Stack Development.
          </p>
          <p>
            ⚡Recieved fellowship issued by Ministry of Human Resource
            Development (MHRD), Govt. of India.
          </p>
          <button onClick={websitePatnaHandler}>Visit Website</button>
        </div>
      </div>
    </div>
  );
};

export default CollegeDegrees;
