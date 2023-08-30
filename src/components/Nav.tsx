import React, { useRef, useEffect } from "react";
import { useScrollPosition } from "../hook/scrollPosition";

type NavObj = {
  title: string;
  link: string;
};

const navList: NavObj[] = [
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Portfolio",
    link: "#portfolio",
  },
  {
    title: "Articles",
    link: "#articles",
  },
];

function Nav() {
  const navLink = useRef(null);
  const { scrollPosition } = useScrollPosition([
    "skills",
    "portfolio",
    "articles",
  ]);
  if (scrollPosition) {
    console.log(scrollPosition, "id location");
  }

  return (
    <div className="fixed h-screen w-[5%] shadow-md">
      <ul className="block w-full p-[10px]">
        {navList.map((list, index) => (
          <li key={index} className="pb-[20px]">
            <a
              href={list.link}
              ref={navLink}
              id={list.title}
              className={`pr-[10px] text-md transform rotate-270 text-black hover:border-b-2 hover:border-secondaryColor ${
                list.link === scrollPosition
                  ? `border-r-2 border-secondaryColor`
                  : ""
              }`}
              style={
                list.link === scrollPosition
                  ? { writingMode: "vertical-rl" }
                  : { writingMode: "vertical-lr" }
              }
            >
              {list.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
