import React, {useEffect} from "react";
import classes from "./Myproject.module.css";
import projectimg from "../../../assets/proj2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectLink from "./ProjectLink";

const Myprojects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div className={classes.rowhead} data-aos="fade-up">
        <div className={classes.leftcolumn}>
          <img src={projectimg} />
        </div>
        <div className={classes.rightcolumn}>
          <h1>Projects</h1>
          <p>
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create the dynamic Web Apps(SPA) including
            Frontend &#38; Backend and also the Deep Learning projects that
            solves real world problem and deploy them to web applications using
            cloud infrastructure.
          </p>
        </div>
      </div>
      {/* <ProjectLink /> */}
    </React.Fragment>
  );
};

export default Myprojects;
