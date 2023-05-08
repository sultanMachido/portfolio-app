import React, { useRef, useEffect } from "react";

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

  return (
    <div className="hidden md:flex w-6/12">
      <ul className="flex justify-around w-full pt-4">
        {navList.map((list, index) => (
          <li key={index}>
            <a
              href={list.link}
              ref={navLink}
              id={list.title}
              className="text-lg text-white hover:border-b-2 hover:border-secondaryColor"
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
