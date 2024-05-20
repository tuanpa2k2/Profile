/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./NavbarComp.scss";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NarbarComp = ({ isMenu = false, isIcon = false }) => {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false); // scrolled add className 'sticky-header'

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
      <div className="logo" onClick={() => navigate("/")}>
        <span>my cv</span>
      </div>
      {isMenu && (
        <ul className={isMobile ? "nav_link_mobile" : "nav_menu"} onClick={() => setIsMobile(false)}>
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
      )}
      <div className="nav_connect">
        <AnchorLink className="anchor-link" offset={90} href="#contact">
          Kết nối với tôi
        </AnchorLink>
      </div>
      {isIcon && (
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <IoMdClose /> : <HiMenu />}
        </button>
      )}
    </div>
  );
};

export default NarbarComp;
