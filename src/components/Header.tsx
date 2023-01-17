import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <section className="flex justify-between text-sky-500 w-full">
      <h1
        className="pt-4 pl-8"
        style={{
          fontFamily: "Rochester",
          fontWeight: "bold",
          color: "#4EAF9E",
          fontSize: "44px",
        }}
      >
        Opeoluwa
      </h1>
      <Nav />
    </section>
  );
}

export default Header;
