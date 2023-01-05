import React, { useEffect } from "react";
import { gsap } from "gsap";

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
    <div className="bg-sky-500 h-screen flex justify-around pt-10">
      <div>
        <p id="first-paragraph" className="text-white text-center text-4xl">
          Hi, I'm Opeoluwa!
        </p>
        <p id="second-paragraph" className="text-white pt-4">
          I am a Software Engineer with over 3 years of experience working with
          technologies like React,Typescript,Node JS,React Native,
        </p>
      </div>
    </div>
  );
}

export default HeroPage;
