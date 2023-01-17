import React, { useEffect } from "react";
import { gsap } from "gsap";
import DevIllustration from "../images/dev.png";

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
    <div className=" flex justify-around  z-10 relative mt-20">
      <div>
        <p
          id="first-paragraph"
          className="text-white text-left pl-10 text-xl pt-40"
          style={{
            fontFamily: "Rochester",
            fontSize: "35px",
            fontWeight: "bold",
            color: "#4EAF9E",
          }}
        >
          hi, i'm opeoluwa
        </p>
        <h1
          className="pl-10 p-[0px] text-white"
          style={{ fontSize: "90px", fontWeight: "bold" }}
        >
          SOFTWARE
          <span className="text-secondaryColor">ENGINEER</span>
        </h1>
        <p id="second-paragraph" className="text-white px-10 text-lg">
          I am a Software Engineer with over 3 years of experience working with
          technologies like <br /> React,Typescript,Node JS,React Native,
        </p>
      </div>
      <div className="pt-10">
        <img src={DevIllustration} alt="" />
      </div>
    </div>
  );
}

export default HeroPage;
