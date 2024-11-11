import React, { useContext, useState, useEffect } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Developer roles list
  const roles = [
    "Software Developer",
    "Web Developer",
    "Mobile Developer",
    "Blockchain Developer",
    "UI/UX Designer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [prevRole, setPrevRole] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setPrevRole(currentRole);
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);

    return () => clearInterval(roleInterval);
  }, [currentRole, roles.length]);

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
          <span style={{ color: "#2563EB" }}>Anthony Makori</span>

          {/* Role animation */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <span style={{ color: darkMode ? "white" : "black", fontSize: "24px" }}>I am an experienced </span>
            <motion.span
              key={currentRole}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ color: "#2563EB", fontWeight: "bold", fontSize: "24px", marginLeft: "10px" }} 
            >
              {roles[currentRole]}
            </motion.span>
          </div>
        </div>

        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="Github" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="Vector 1" />
        <img src={Vector2} alt="Vector 2" />
        <img src={boy} alt="profile" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="Glasses Emoji"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
         <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
            style={{ marginTop: "20px" }} 
          >
            <FloatinDiv img={crown} text1="Web" text2="Developer" />
          </motion.div>
          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
            style={{ marginTop: "20px" }}  
          >
            <FloatinDiv img={crown} text1="Software" text2="Developer" />
          </motion.div>
          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
            style={{ marginTop: "20px" }}  
          >
            <FloatinDiv img={crown} text1="Mobile" text2="Developer" />
          </motion.div>
          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
            style={{ marginTop: "20px" }} 
          >
            <FloatinDiv img={crown} text1="BlockChain" text2="Developer" />
          </motion.div>

        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
