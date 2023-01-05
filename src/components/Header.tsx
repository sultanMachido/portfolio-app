import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <section className="flex justify-between text-sky-500 w-full absolute">
      <h1 className="pt-4 pl-4">Logo</h1>
      <Nav />
    </section>
  );
}

export default Header;
