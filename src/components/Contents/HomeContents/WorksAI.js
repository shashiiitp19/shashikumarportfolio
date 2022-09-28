import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./WorksAI.module.css";
import machine from "../../../assets/ml3.png";
import worklaptop from "../../../assets/worklaptop.png";

import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const WorksAI = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <React.Fragment>
      {/* <div data-aos="fade-down" className={classes.workhead}>
        <h1>What I Do ?</h1>
      </div> */}
      <div className={classes.hboxai}>
        <div data-aos="fade-right" className={classes.hleftBoxai}>
          <img className={classes.man} src={machine} />
          {/* <img className={classes.lappy} src={worklaptop} /> */}
        </div>
        <div
          className={classes.hrightBoxai}
          // data-aos="fade-left"
          // data-aos-easing="ease-in-out"
          // data-aos-anchor-placement="top-bottom"
        >
          <div className={classes.head1ai} data-aos="fade-left" data-aos-duration="1000">
            <h2>Data Science & ML-AI</h2>
          </div>
          <div className={classes.head2ai} data-aos="fade-left" data-aos-duration="1500">
            <div className={classes.tf} data-hover="Tensorflow">
              {/* <FontAwesomeIcon icon={faHtml5} /> */}
              <SiTensorflow />
            </div>
            <div className={classes.keras} data-hover="Keras">
              {/* <FontAwesomeIcon icon={faCss3} /> */}
              <SiKeras />
            </div>
            <div className={classes.torch} data-hover="Pytorch">
              {/* <FontAwesomeIcon icon={faJs} /> */}
              <SiPytorch />
            </div>
            <div className={classes.python} data-hover="Python">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              <SiPython />
            </div>
            <div className={classes.colab} data-hover="Googlecolab">
              {/* <FontAwesomeIcon icon={faNodeJs} /> */}
              <SiGooglecolab />
            </div>
            <div className={classes.scikit} data-hover="Scikitlearn">
              {/* <FontAwesomeIcon icon={faNpm} /> */}
              <SiScikitlearn />
            </div>
            {/* <div className={classes.ai} data-hover="AI">
              <FontAwesomeIcon icon={faYarn} />
              <GiArtificialIntelligence />
            </div> */}
          </div>
          <div data-aos="fade-left" className={classes.fchildai}>
            <p>
              ⚡Developing highly scalable models for various deeplearning and
              statistical use cases
            </p>
            <p>
              ⚡Experience of working with Computer Vision & Image Processing
              with Research publications
            </p>
            <p>⚡Experience of working on Audio and Images data</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorksAI;
