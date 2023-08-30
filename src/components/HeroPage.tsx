import React, { useEffect } from "react";
import { gsap } from "gsap";
import DevIllustration from "../images/dev.png";
import style from "./styles/HeroPage.module.css";
import ContactLinks from "./ContactLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function HeroPage() {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      document.getElementById("first-paragraph"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
    );
    timeline.fromTo(
      document.getElementById("second-paragraph"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
    );
  }, []);

  return (
    <div className=" flex justify-around  z-10 relative md:mt-20">
      <div>
        <h1
          className="pt-4 pl-10 text-center"
          style={{
            fontFamily: "Rochester",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          hi I'm
        </h1>
        <h1
          className={`text-center text-[36px] md:text-[90px] pl-10 p-[0px] text-secondaryColor bold font-bold`}
        >
          ADESINA OPEOLUWA
        </h1>
        <p
          id="second-paragraph"
          className="text-center px-10 font-bold text-lg"
        >
          FRONTEND. BACKEND. MOBILE APP DEVELOPMENT
        </p>
        <ContactLinks />
        <button className="shadow-md block mx-auto mt-10 w-[350px] h-[50px] bg-[lightblue] rounded-[50px]">
          <FontAwesomeIcon icon={faDownload} />
          Download My Resume
        </button>
      </div>
    </div>
  );
}

export default HeroPage;
