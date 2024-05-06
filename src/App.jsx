// eslint-disable-next-line no-unused-vars
import React from "react";
import NavbarComp from "./Component/Navbar/NavbarComp";
import HeroComp from "./Component/Hero/HeroComp";
import AboutComp from "./Component/About/AboutComp";
import ServiceComp from "./Component/Service/ServiceComp";

const App = () => {
  return (
    <div>
      <NavbarComp />
      <HeroComp />
      <AboutComp />
      <ServiceComp />
    </div>
  );
};

export default App;
