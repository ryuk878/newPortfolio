import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "../../styles/style-navbar.css";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const Close = () => setClick(false);
  const handleClick = () => setClick(!click);
  const navbar = useRef();

  useEffect(() => {
    if (navbar.current) {
      gsap.to(navbar.current, {
        delay: 1,
        opacity: 1,
        ease: "power2.inOut",
      });
    }
  });

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav ref={navbar} className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            Justin.Hartsink
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/Home"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Projects
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
