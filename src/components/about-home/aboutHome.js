import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../styles/about-styles.css";

export default function AboutHome() {
  const aboutHome = useRef();

  useEffect(() => {
    if (aboutHome.current) {
      gsap.to(aboutHome.current, {
        delay: 13.5,
        opacity: 1,
        ease: "power2.inOut",
      });
    }
  });

  return (
    <>
      <section ref={aboutHome} className="about-wrapper">
        <p>I am 35 years old, based in the Netherlands.</p>
        <p>I love webdevelopment, photography, gaming and gadgets.</p>
      </section>
    </>
  );
}
