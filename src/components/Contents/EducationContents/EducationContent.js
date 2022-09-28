import classes from "./EducationContent.module.css";
import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import degree from '../../../assets/degree21.png';
import { Icon } from "@iconify/react";
import { SocialIcon } from "react-social-icons";
import { SiCodechef } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
import { SiHackerearth } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiAlpinelinux } from "react-icons/si";
import { SiStylelint } from "react-icons/si";

import CollegeDegrees from "./CollegeDegrees";
import Certification from "./Certification";
import BtechDegree from "./BtechDegree";

import Aos from "aos";
import "aos/dist/aos.css";
import NewCertificate from "./NewCertificate";

const Iicon = (
  <SocialIcon url="https://www.interviewbit.com/profile/Shashi_Kumar_" />
);

const EducationContent = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className={classes.headerbox} data-aos="fade-up">
        <div className={classes.leftdegree}>
          <img src={degree} />
        </div>
        <div>
          <div className={classes.rightdegree}>
            <h2>Education</h2>
            <h3>Basic Qualification and Certifications</h3>
            <div className={classes.icons}>
              <div className={classes.ib} data-hover="InterviewBit">
                <a
                  href="https://www.interviewbit.com/profile/Shashi_Kumar_"
                  target="_blank"
                >
                  <SiStylelint />
                </a>
              </div>
              <div className={classes.cc} data-hover="CodeChef">
                <a
                  href="https://www.codechef.com/users/shashi_k"
                  target="_blank"
                >
                  <SiCodechef />
                </a>
              </div>
              <div className={classes.hr} data-hover="HackerRank">
                <a
                  href="https://www.hackerrank.com/shashimalhotra01"
                  target="_blank"
                >
                  <SiHackerrank />
                </a>
              </div>
              <div className={classes.he} data-hover="HackerEarth">
                <a
                  href="https://www.hackerearth.com/@sk.iitp19"
                  target="_blank"
                >
                  <SiHackerearth />
                </a>
              </div>
              <div className={classes.lc} data-hover="LeetCode">
                <a href="https://leetcode.com/user6355mQ/" target="_blank">
                  <SiLeetcode />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CollegeDegrees />
      <BtechDegree />
      <Certification />
      <NewCertificate />
    </div>
  );
};

export default EducationContent;
