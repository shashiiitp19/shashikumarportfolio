import React from "react";
import Myprojects from "../components/Contents/ProjectContents/Myprojects";
import ProjectLink from "../components/Contents/ProjectContents/ProjectLink";
import ProjectLink2 from "../components/Contents/ProjectContents/ProjectLink2";
import ProjectLink3 from "../components/Contents/ProjectContents/ProjectLink3";
import Publication from "../components/Contents/ProjectContents/Publications";
import FooterTag from "../components/Layout/FooterTag";

const Projects = () => {
  return (
    <React.Fragment>
      <Myprojects />
      <ProjectLink />
      <ProjectLink2 />
      <ProjectLink3 />
      {/* <Publication /> */}
      <FooterTag />
    </React.Fragment>
  );
};

export default Projects;
