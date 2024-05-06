// eslint-disable-next-line no-unused-vars
import React from "react";

import "./NavbarComp.scss";

const NarbarComp = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>my cv</span>
      </div>
      <ul className="nav_menu">
        <li>Trang chủ</li>
        <li>Giới thiệu</li>
        <li>Kĩ năng</li>
        <li>Dự án</li>
        <li>Liên hệ</li>
      </ul>
      <div className="nav_connect">Kết nối với tôi</div>
    </div>
  );
};

export default NarbarComp;
