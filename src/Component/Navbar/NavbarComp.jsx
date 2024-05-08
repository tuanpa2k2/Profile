/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./NavbarComp.scss";

const NarbarComp = () => {
  const [menuActive, setMenuActive] = useState("");
  const [scrolled, setScrolled] = useState(false); // scrolled add className 'sticky-header'
  console.log(menuActive);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavbar);
  }, []);

  const handleScrollNavbar = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div className={`navbar ${scrolled ? "sticky-header" : ""}`}>
      <div className="logo">
        <span>my cv</span>
      </div>
      <ul className="nav_menu">
        <li onClick={() => setMenuActive("skill")} className={`${menuActive === "skill" ? "actives" : ""}`}>
          <AnchorLink className="anchor-link" offset={90} href="#about">
            Kĩ năng
          </AnchorLink>
        </li>
        <li onClick={() => setMenuActive("about")} className={`${menuActive === "about" ? "actives" : ""}`}>
          <AnchorLink className="anchor-link" offset={90} href="#service">
            Dịch vụ
          </AnchorLink>
        </li>
        <li onClick={() => setMenuActive("project")} className={`${menuActive === "project" ? "actives" : ""}`}>
          <AnchorLink className="anchor-link" offset={90} href="#mywork">
            Dự án
          </AnchorLink>
        </li>
        <li onClick={() => setMenuActive("contact")} className={`${menuActive === "contact" ? "actives" : ""}`}>
          <AnchorLink className="anchor-link" offset={90} href="#contact">
            Liên hệ
          </AnchorLink>
        </li>
      </ul>
      <div className="nav_connect">Kết nối với tôi</div>
    </div>
  );
};

export default NarbarComp;
