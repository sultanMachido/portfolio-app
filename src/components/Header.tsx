import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <section className="flex items-baseline justify-between text-sky-500 w-full">
      <h1
        className="pt-4 pl-10"
        style={{
          fontFamily: "Rochester",
          fontWeight: "bold",
          color: "#4EAF9E",
          fontSize: "44px",
        }}
      >
        Opeoluwa
      </h1>
    </section>
  );
}

export default Header;
