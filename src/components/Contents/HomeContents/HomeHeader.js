import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./HomeHeader.module.css";
import bg1 from "../../../assets/bg1.jpg";
import homeimg from "../../../assets/home_img.png";
import HomeSocialIcon from "./HomeSocialIcon";
// import SocialMediaIcon from "../SocialMediaIcons";
import HomeWorks from "./HomeWorks";
import WorksAI from "./WorksAI";
import CloudWorks from "./CloudWorks";
import DesignWorks from "./DesignWorks";

const HomeHeader = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const githubHandler = (event) => {
    event.preventDefault();
    openInNewTab('https://github.com/shashiiitp19');
  }

  return (
    <React.Fragment>
      <div className={classes.mainpage}>
        <div data-aos="fade-up" className={classes.headerbox}>
          <div className={classes.headerrightBox}>
            <img src={homeimg} />
          </div>
          <div className={classes.headerleftBox}>
            <h1>Shashi Kumar</h1>
            <h2>( calm_shashi )</h2>
            <p>
              A passionate individual who always thrive to work on end to end
              products which develop sustainable and scalable social and
              technical systems to create impact.
            </p>
            <HomeSocialIcon />
            <button onClick={githubHandler}>⭐ Star Me On Github</button>
          </div>
        </div>
        <HomeWorks />
        <WorksAI />
        <CloudWorks />
        <DesignWorks />
      </div>
    </React.Fragment>
  );
};

export default HomeHeader;
