import myimage from "../../../assets/img666.jpg";
import wall from "../../../assets/wall.jpg";
import React, { useEffect } from "react";
import blog from "../../../assets/blogimg3.png";
import home from "../../../assets/home.png";
import AddressMap from "./AddressMap";
import classes from "./Mycontact.module.css";
import HomeSocialIcon from "../HomeContents/HomeSocialIcon";
import Aos from "aos";
import "aos/dist/aos.css";
// import FooterTag from "../Layout/FooterTag";

//const heartemoji = &#10084;
const Mycontacts = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const ResumeHandler = (event) => {
    event.preventDefault();
    openInNewTab(
      "https://drive.google.com/file/d/1SY8BwlcYRUVYLJh3tdbTvqMQQx74Dlfm/view?usp=sharing"
    );
  };
  const MapHandler = (event) => {
    event.preventDefault();
    openInNewTab(
      "https://www.google.com/maps/place/Rajesultanpur,+Uttar+Pradesh+224176/@26.3022377,83.0744878,16.82z/data=!4m5!3m4!1s0x39910881d692e6d3:0xfe6d63fc2c67f4f1!8m2!3d26.3034311!4d83.0784157"
    );
  };
  const BlogHandler = (event) => {
    event.preventDefault();
    openInNewTab(
      "https://www.fullstacklabs.co/blog"
    );
  };

  return (
    <div className={classes.contactgrid}>
      {/* <img src={wall.jpg} /> */}
      <div className={classes._grid} data-aos="fade-up">
        <div className={classes.myimg}>
          <img src={myimage} />
        </div>
      </div>
      <div className={classes._grid} data-aos="fade-up">
        <div className={classes.tr_grid}>
          <h2>Contact Me</h2>
          <p>
            I am available on almost every social media. You can message me, I
            will reply within 24 hours. I can help you with ML, AI, React,
            Android, Cloud and Opensource Development.
          </p>
          <div className={classes.tr_grid__}>
            <HomeSocialIcon />
          </div>
          <button onClick={ResumeHandler}>See My Resume</button>
        </div>
      </div>
      <div className={classes._grid} data-aos="fade-right">
        <div className={classes.blog_grid}>
          <h2>Blogs</h2>
          <p>
            For individual fundamental empowerment, I like to write powerful
            lessons that create impact on each of the reader individually to
            change the core of their character.
          </p>
          <button onClick={BlogHandler}>Visit My Blogs</button>
        </div>
      </div>

      <div className={classes._grid} data-aos="fade-left">
        <div className={classes.blog1}>
          <img src={blog} />
        </div>
        {/* </div> */}
      </div>
      <div className={classes._grid} data-aos="fade-up">
        <div className={classes.contact_grid}>
          <img src={home} />
        </div>
      </div>
      <div className={classes._grid} data-aos="fade-up">
        <div className={classes.contact__grid}>
          <h2>Address</h2>
          <p>
            T.A. -Rajesultanpur, Akbarpur, Dist. -Ambedkar Nagar, Uttar Pradesh
            - 224176
          </p>
          <div className={classes.contact__grid__}>
            <h2>Phone Number</h2>
            <p>+91-7238855177</p>
          </div>
          <button onClick={MapHandler}>Visit on Google Maps</button>
        </div>
      </div>
      {/* <div className={classes.contact}>
        <div className={classes.img}>
          <h1>Contact Me</h1>
          <p>
            I am available on almost every social media. You can message me, I
            will reply within 24 hours. I can help you with ML, AI, React,
            Android, Cloud and Opensource Development.
          </p>
          <img src={myimage} />
          <SocialMediaIcons />
          <button onClick={ResumeHandler}>See My Resume</button>
        </div>
      </div>
      <AddressMap /> */}
    </div>
  );
};

export default Mycontacts;
