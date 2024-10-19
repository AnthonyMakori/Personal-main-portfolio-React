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
      <div className="f-content">
        <span>anthonymakori2@gmail.com</span>
        <div class="f-icons">
 
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-instagram"></i> <Insta color="white" size={"3rem"} />
  </a>

  
  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-github"></i> <Gitub color="white" size={"3rem"} />
  </a>

  
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-facebook"></i> <Facebook color="white" size={"3rem"} />
  </a>
</div>

        
      </div>
    </div>
  );
};

export default Footer;
