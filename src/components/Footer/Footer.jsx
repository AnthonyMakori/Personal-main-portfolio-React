import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content flex flex-col items-center">
        <span>anthonymakori2@gmail.com</span>
        <div className="f-icons flex space-x-8 mt-4">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125"
          >
            <Insta color="white" size={"3rem"} />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125"
          >
            <Gitub color="white" size={"3rem"} />
          </a>

          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125"
          >
            <Facebook color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
