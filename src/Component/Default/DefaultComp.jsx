import ContactComp from "../Contact/ContactComp";
import NavbarComp from "../Navbar/NavbarComp";
import FooterComp from "../Footer/FooterComp";
import HeroComp from "../Hero/HeroComp";
import AboutComp from "../About/AboutComp";
import ServiceComp from "../Service/ServiceComp";
import MyworkComp from "../Mywork/MyworkComp";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const DefaultComp = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div>
      <NavbarComp isMenu isIcon />
      <HeroComp />
      <AboutComp />
      <ServiceComp />
      <MyworkComp />
      <ContactComp />
      <FooterComp />
    </div>
  );
};

export default DefaultComp;
