import React from "react";
import classes from "./HomeSocialIcon.module.css";
import { SocialIcon } from "react-social-icons";

const HomeSocialIcon = () => {
  return (
    <React.Fragment>
      <div className={classes.socialcontainer}>
        <SocialIcon
          url="https://www.linkedin.com/in/shashi-kumar-0680009b"
          target="_blank"
          className={classes.linkedin}
        />
        <SocialIcon
          url="https://www.github.com/shashiiitp19"
          target="_blank"
          className={classes.github}
        />
        <SocialIcon
          url="https://mail.google.com/"
          target="_blank"
          className={classes.google}
        />
        <SocialIcon
          url="https://www.facebook.com/shashi.malhotra1/"
          target="_blank"
          className={classes.facebook}
        />
        <SocialIcon
          url="https://www.instagram.com/kumarshashi.official/"
          target="_blank"
          className={classes.instagram}
        />
        <SocialIcon
          url="https://twitter.com/"
          target="_blank"
          className={classes.twitter}
        />
      </div>
    </React.Fragment>
  );
};

export default HomeSocialIcon;
