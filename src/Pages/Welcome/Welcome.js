import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../../styles/welcome-styles.css";
import { NavLink } from "react-router-dom";

function Welcome() {
  const loader1 = useRef();
  const TextReveal = useRef();

  useEffect(() => {
    gsap.from(loader1.current, {
      delay: 0.7,
      duration: 1.75,
      y: "-100%",
      ease: "power1.easeOut",

      opacity: 0,
    });
  });
  useEffect(() => {
    gsap.to(TextReveal.current, {
      delay: 2.3,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });
  });
  return (
    <>
      <div className="content-wrapper">
        <div className="background-drop" ref={loader1}>
          <NavLink className="Text" to="/Home" ref={TextReveal}>
            Welcome
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Welcome;
