import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import classes from "./SocialMediaIcons.module.css";

const LinkedinIcon = (
  <SocialIcon url="https://www.linkedin.com/in/shashi-kumar-0680009b" />
);
const MailIcon = <SocialIcon url="https://www.google.com/" />;
const GitIcon = <SocialIcon url="https://www.github.com/shashiiitp19" />;
const FacebookIcon = (
  <SocialIcon url="https://www.facebook.com/shashi.malhotra1/" />
);
const InstaIcon = (
  <SocialIcon url="https://www.instagram.com/kumarshashi.official/" />
);


const SocialMediaIcon = () => {
  return (
    <div className={classes.icons}>
      <a
        href="https://www.linkedin.com/in/shashi-kumar-0680009b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {LinkedinIcon}
      </a>

      <a href="https://www.github.com/shashiiitp19/" target="_blank">
        {GitIcon}
      </a>

      <a href="https://www.mail.google.com/" target="_blank">
        {MailIcon}
      </a>

      <a href="https://www.facebook.com/shashi.malhotra1/" target="_blank">
        {FacebookIcon}
      </a>

      <a href="https://www.instagram.com/kumarshashi.official/" target="_blank">
        {InstaIcon}
      </a>
    </div>
  );
};

export default SocialMediaIcon;
