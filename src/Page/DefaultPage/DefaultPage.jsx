/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

import NavbarComp from "../../Component/Navbar/NavbarComp";
import FooterComp from "../../Component/Footer/FooterComp";
import { useLocation } from "react-router-dom";

const DefaultPage = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div>
      <NavbarComp />
      {children}
      <FooterComp />
    </div>
  );
};

export default DefaultPage;
