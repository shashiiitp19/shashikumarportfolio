import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import mysign from "../../assets/signature6.png";
import classes from "./MainNavigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Aos from "aos";
import "aos/dist/aos.css";

const MainNavigation = () => {

  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <header className={classes.header} data-aos="fade-down" data-aos-duration="1000">
      <div className={classes.hea}>
        <Link to="/">
          {/* <div className={classes.logo}>Welcome</div> */}
          <img src={mysign} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          {/* <li>
            <button>Logout</button>
          </li> */}
        </ul>
        <div className={classes.hamburger}>
          <a href="#">
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
