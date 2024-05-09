// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaUserSecret, FaFacebook, FaTiktok } from "react-icons/fa";
import { MdOutlinePhoneInTalk, MdLocationPin } from "react-icons/md";

import "./FooterComp.scss";

const FooterComp = () => {
  return (
    <div className="footers">
      <div className="footer__top">
        <div className="footer__top__left">
          <h2>Snake AT</h2>
          <p>Cảm ơn bạn đã ghé thăm. Chúc bạn và gia đình luôn luôn bình an và hạnh phúc 🥰</p>
        </div>
        <div className="footer__top__right">
          <div className="abcd">
            <input type="text" name="email" id="email" placeholder="Enter your email..." />
            <FaUserSecret />
          </div>
          <button>Send</button>
        </div>
      </div>
      <hr />
      <div className="footer__bottom">
        <div className="footer__bottom_left">
          <p>@ 2024 Snake AT. All rights reserved.</p>
        </div>
        <div className="footer__bottom_right">
          <MdOutlinePhoneInTalk />
          <FaFacebook />
          <FaTiktok />
          <MdLocationPin />
          <FaUserSecret />
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
