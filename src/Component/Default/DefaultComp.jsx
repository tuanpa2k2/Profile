import ContactComp from "../Contact/ContactComp";
import NavbarComp from "../Navbar/NavbarComp";
import FooterComp from "../Footer/FooterComp";
import HeroComp from "../Hero/HeroComp";
import AboutComp from "../About/AboutComp";
import ServiceComp from "../Service/ServiceComp";
import MyworkComp from "../Mywork/MyworkComp";

// eslint-disable-next-line react/prop-types
const DefaultComp = () => {
  return (
    <div>
      <NavbarComp isMenu />
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
