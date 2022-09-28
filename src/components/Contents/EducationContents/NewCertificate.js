import React, { useEffect } from "react";
import classes from "./NewCertificate.module.css";
import reactlogo from "../../../assets/reactlogo.png";
import { SiAmazonaws } from "react-icons/si";
import { FaInfinity } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const NewCertificate = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const thirdCertificateHandler = (event) => {
    event.preventDefault();
    openInNewTab("http://localhost:3000/education");
  };

  const fourthCertificateHandler = (event) => {
    event.preventDefault();
    openInNewTab(
      "https://www.udemy.com/certificate/UC-5a3a1e21-99b2-41cc-b6bf-3dc5470548ba/"
    );
  };

  return (
    <div className={classes.newcertificate}>
      <div className={classes.bigBoxnew} data-aos="fade-right">
        <div className={classes.rightBoxnew}>
          {/* <img src={reactlogo} /> */}
          <div className={classes.awsicons}>
            <SiAmazonaws />
          </div>
          <div
            onClick={thirdCertificateHandler}
            className={classes.rightBox__overlaynew}
          >
            <p>CERTIFICATE</p>
          </div>
        </div>
        <div className={classes.leftBoxnew}>
          <h3>AWS Solution Architect</h3>
          <h4> - Shashi Kumar</h4>
        </div>
      </div>
      <div className={classes.bigBox_2new} data-aos="fade-left">
        <div className={classes.rightBox_2new}>
          {/* <img src={reactlogo} /> */}
          <div className={classes.fullstackicons}>
            <FaInfinity />
          </div>
          <div
            onClick={fourthCertificateHandler}
            className={classes.rightBox_2__overlaynew}
          >
            <p>CERTIFICATE</p>
          </div>
        </div>
        <div className={classes.leftBox_2new}>
          <h3>Full Stack Development</h3>
          <h4> - Shashi Kumar</h4>
        </div>
      </div>
    </div>
  );
};

export default NewCertificate;
