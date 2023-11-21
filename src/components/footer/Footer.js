import React, { useEffect, useRef } from "react";
import "../../styles/footer-styles.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import gsap from "gsap";

export default function Footer() {
  const footer = useRef();

  useEffect(() => {
    if (footer.current) {
      gsap.to(footer.current, {
        delay: 1,
        opacity: 1,
        ease: "power2.inOut",
      });
    }
  });

  return (
    <>
      <div ref={footer} className="footer-wrapper">
        <div className="button-styles">
          <a
            href="https://www.linkedin.com/in/justin-hartsink-69184b16/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaLinkedin />{" "}
          </a>
          <a
            href="https://github.com/ryuk878"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaGithub />{" "}
          </a>
          <a
            href="mailto:j.hartsink@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaMailBulk />{" "}
          </a>
        </div>
      </div>
    </>
  );
}
