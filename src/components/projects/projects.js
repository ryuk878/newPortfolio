import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ProjectData from "../../Data/project-data";
import "../../styles/project-styles.css";
import gsap from "gsap";

export default function Project() {
  const [db] = useState(ProjectData);
  const projects = useRef();

  useEffect(() => {
    if (projects.current) {
      gsap.to(projects.current, {
        delay: 1,
        opacity: 1,
        ease: "power2.inOut",
      });
    }
  });

  return (
    <>
      <div className="project-wrapper" ref={projects}>
        {db.map(({name,href,img,title, alt}) => (
          <div key={name} className="title">
            <div className="img">
              <a target={"_blank"} href={href} rel="noreferrer">
                <img src={img} alt={alt}></img>
              </a>
              <p>{title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
