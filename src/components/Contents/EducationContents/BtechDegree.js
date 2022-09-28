import React, { useEffect } from "react";
import classes from "./BtechDegree.module.css";
import btechlogo from "../../../assets/btechlogo.png";
import icon from "../../../assets/list_icon.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const BtechDegree = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const websiteAithHandler = (event) => {
    event.preventDefault();
    openInNewTab("https://aith.ac.in/");
  };

  return (
    <div className={classes.degreebtech}>
      <div className={classes.leftdegreebtech} data-aos="fade-right">
        <img src={btechlogo} />
      </div>
      <div className={classes.rightdegreebtech} data-aos="fade-left">
        <div className={classes.degreeheadbtech}>
          <h1>Dr. APJ Abdul Kalam Technical University, Uttar Pradesh</h1>
          <h2>B.Tech in Computer Science</h2>
          <p>2019-2021</p>
        </div>
        <div className={classes.degreecontentbtech}>
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
          <button onClick={websiteAithHandler}>Visit Website</button>
        </div>
      </div>
    </div>
  );
};

export default BtechDegree;
