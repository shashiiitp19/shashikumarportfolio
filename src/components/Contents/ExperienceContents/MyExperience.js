import classes from "./MyExperience.module.css";
import researchimg from "../../../assets/res1.png";
import experience from "../../../assets/exper1.png";
import CompanyList from "./CompanyList";
import InternshipList from "./InternshipList";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MyExperience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [showCompany, setShowCompany] = useState(false);
  const [showIntern, setShowIntern] = useState(false);

  const btnWorkHandler = (event) => {
    setShowCompany(!showCompany);
  };

  const btnInternHandler = () => {
    setShowIntern(!showIntern);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const publicationHandler = (event) => {
    event.preventDefault();
    openInNewTab(
      "https://link.springer.com/chapter/10.1007/978-3-031-11349-9_14"
    );
  };

  return (
    <div className={classes.projects}>
      <div className={classes.row} data-aos="fade-up">
        <div className={classes.column}>
          <img src={experience} />
        </div>
        <div className={classes.heading}>
          <h1>Experience</h1>
          <h2>Work and Internships</h2>
          <p>
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create the dynamic Web Apps(SPA) including
            Frontend &#38; Backend and also the Deep Learning projects that
            solves real world problem and deploy them to web applications using
            cloud infrastructure.
          </p>
        </div>
      </div>
      <div className={classes.jobs}>
        <button onClick={btnWorkHandler} className={classes.btnWork}>
          WORK
        </button>
        {showCompany && <CompanyList />}
        {/* <div className={classes.company}>
            <p>Icici bank</p>
            <p>Quantiphi Inc.</p>
        </div> */}
        <button onClick={btnInternHandler} className={classes.btnIntern}>
          INTERNSHIP
        </button>
        {showIntern && <InternshipList />}
      </div>

      <div className={classes.research}>
        <h2 data-aos="fade-right" data-aos-duration="1000">Research Work</h2>
        <h3 data-aos="fade-left"data-aos-duration="1000">
          ❝Attention-Based Deep Autoencoder for Hyperspectral Image Denoising❞
        </h3>
        <div className={classes.researchl} data-aos="fade-right">
          <h3>Abstract</h3>
          <p>
            Hyperspectral Image (HSI) denoising is a crucial pre-processing task
            due to its widespread applications in areas that include geology,
            medicine, agriculture, surveillance, and the food industry.
            Denoising HSI data improves high level vision tasks like
            classification, object tracking, and video surveillance. In this
            work, we propose a novel attention-based deep auto-encoder for HSI
            denoising which learns a mapping from noisy observation to clean the
            data. To exploit the spatial-spectral information present in HSI
            data, 3D symmetric convolution and deconvolution are used.
          </p>
        </div>
        <div className={classes.researchr} data-aos="fade-left">
          <img src={researchimg} />
        </div>
        {/* <div className={classes.researchbutton}> */}
        <button onClick={publicationHandler}>View Publication</button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MyExperience;
