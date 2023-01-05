import React, { useCallback } from "react";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import BackgroundAnim from "../components/BackgroundAnim";

function IntroPage() {
  return (
    <>
      <BackgroundAnim />
      <Header />
      <HeroPage />
    </>
  );
}

export default IntroPage;
