import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./CloudWorks.module.css";
import cloud from "../../../assets/cloud.png";
import worklaptop from "../../../assets/worklaptop.png";

import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";

const CloudWorks = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <React.Fragment>
      {/* <div data-aos="fade-down" className={classes.workhead}>
        <h1>What I Do ?</h1>
      </div> */}
      <div className={classes.hboxcloud}>
        <div data-aos="fade-right" className={classes.hleftBoxcloud}>
          <img className={classes.man} src={cloud} />
          {/* <img className={classes.lappy} src={worklaptop} /> */}
        </div>
        <div
          className={classes.hrightBoxcloud}
          // data-aos="fade-left"
          // data-aos-easing="ease-in-out"
          // data-aos-anchor-placement="top-bottom"
        >
          <div className={classes.head1cloud} data-aos="fade-left" data-aos-duration="1000">
            <h2>Cloud Infra-Architecture</h2>
          </div>
          <div className={classes.head2cloud} data-aos="fade-left" data-aos-duration="1500">
            <div className={classes.aws} data-hover="AWS">
              {/* <FontAwesomeIcon icon={faHtml5} /> */}
              <FaAws />
            </div>
            <div className={classes.gc} data-hover="GCP">
              {/* <FontAwesomeIcon icon={faCss3} /> */}
              <SiGooglecloud />
            </div>
            <div className={classes.az} data-hover="Azure">
              {/* <FontAwesomeIcon icon={faJs} /> */}
              <SiMicrosoftazure />
            </div>
            <div className={classes.fb} data-hover="Firebase">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              <SiFirebase />
            </div>
            <div className={classes.ps} data-hover="PostgreSQL">
              {/* <FontAwesomeIcon icon={faNodeJs} /> */}
              <SiPostgresql />
            </div>
            <div className={classes.md} data-hover="MongoDB">
              {/* <FontAwesomeIcon icon={faNpm} /> */}
              <SiMongodb />
            </div>
            <div className={classes.dc} data-hover="Docker">
              {/* <FontAwesomeIcon icon={faYarn} /> */}
              <SiDocker />
            </div>
            <div className={classes.kn} data-hover="Kubernetes">
              {/* <FontAwesomeIcon icon={faYarn} /> */}
              <SiKubernetes />
            </div>
          </div>
          <div data-aos="fade-left" className={classes.fchildcloud}>
            <p>⚡Experience working on multiple cloud platforms</p>
            <p>⚡Deploying deep learning models on cloud to use on devices</p>
            <p>
              ⚡Hosting and maintaining websites on virtual machine instances
              along with integration of databases on GCP and AWS
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CloudWorks;
