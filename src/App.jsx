// eslint-disable-next-line no-unused-vars
import React from "react";
import NavbarComp from "./Component/Navbar/NavbarComp";
import HeroComp from "./Component/Hero/HeroComp";
import AboutComp from "./Component/About/AboutComp";
import ServiceComp from "./Component/Service/ServiceComp";
import MyworkComp from "./Component/Mywork/MyworkComp";
import ContactComp from "./Component/Contact/ContactComp";
import FooterComp from "./Component/Footer/FooterComp";

const App = () => {
  return (
    <div>
      <NavbarComp />
      <HeroComp />
      <AboutComp />
      <ServiceComp />
      <MyworkComp />
      <ContactComp />
      <FooterComp />
    </div>
  );
};

export default App;
