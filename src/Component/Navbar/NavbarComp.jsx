/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import "./NavbarComp.scss";

const NarbarComp = () => {
  const [menuActive, setMenuActive] = useState("");
  const [scrolled, setScrolled] = useState(false); // scrolled add className 'sticky-header'
  console.log("scroll: ", scrolled);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavbar);
  }, []);

  const handleScrollNavbar = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div className={`navbar ${scrolled ? "sticky-header" : ""}`}>
      <div className="logo" onClick={() => setMenuActive("")}>
        <span>my cv</span>
      </div>
      <ul className="nav_menu">
        <li onClick={() => setMenuActive("home")} className={`${menuActive === "home" ? "actives" : ""}`}>
          Trang chủ
        </li>
        <li onClick={() => setMenuActive("about")} className={`${menuActive === "about" ? "actives" : ""}`}>
          Giới thiệu
        </li>
        <li onClick={() => setMenuActive("skill")} className={`${menuActive === "skill" ? "actives" : ""}`}>
          Kĩ năng
        </li>
        <li onClick={() => setMenuActive("project")} className={`${menuActive === "project" ? "actives" : ""}`}>
          Dự án
        </li>
        <li onClick={() => setMenuActive("contact")} className={`${menuActive === "contact" ? "actives" : ""}`}>
          Liên hệ
        </li>
      </ul>
      <div className="nav_connect">Kết nối với tôi</div>
    </div>
  );
};

export default NarbarComp;
