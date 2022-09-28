import React, { useEffect } from "react";
import classes from "./Certification.module.css";
import reactlogo from "../../../assets/reactlogo.png";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";

const Certification = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const firstCertificateHandler = (event) => {
    event.preventDefault();
    openInNewTab(
      "https://www.udemy.com/certificate/UC-5a3a1e21-99b2-41cc-b6bf-3dc5470548ba/"
    );
  };

  const secondCertificateHandler = (event) => {
    event.preventDefault();
    openInNewTab("http://localhost:3000/education");
  };

  return (
    <div className={classes.certificate}>
      <div data-aos="fade-left" data-aos-duration="1000">
        <h2>Certification</h2>
      </div>
      <div className={classes.bigBox} data-aos="fade-right">
        <div className={classes.rightBox}>
          {/* <img src={reactlogo} /> */}
          <div className={classes.reacticon}>
            <SiReact />
          </div>
          <div
            onClick={firstCertificateHandler}
            className={classes.rightBox__overlay}
          >
            <p>CERTIFICATE</p>
          </div>
        </div>
        <div className={classes.leftBox}>
          <h3>React - The Complete Guide</h3>
          <h4> - Maximilian Schwarzmüller</h4>
        </div>
      </div>
      <div className={classes.bigBox_2} data-aos="fade-left">
        <div className={classes.rightBox_2}>
          {/* <img src={reactlogo} /> */}
          <div className={classes.jsicon}>
            <SiJavascript />
          </div>
          <div
            onClick={secondCertificateHandler}
            className={classes.rightBox_2__overlay}
          >
            <p>CERTIFICATE</p>
          </div>
        </div>
        <div className={classes.leftBox_2}>
          <h3>Java Script - The Complete Guide</h3>
          <h4> - Maximilian Schwarzmüller</h4>
        </div>
      </div>
    </div>
  );
};

export default Certification;
