/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

import NavbarComp from "../../Component/Navbar/NavbarComp";
import FooterComp from "../../Component/Footer/FooterComp";

const DefaultPage = ({ children }) => {
  return (
    <div>
      <NavbarComp />
      {children}
      <FooterComp />
    </div>
  );
};

export default DefaultPage;
