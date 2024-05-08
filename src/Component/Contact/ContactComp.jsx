// eslint-disable-next-line no-unused-vars
import React from "react";

import { MdOutgoingMail, MdOutlinePhoneInTalk, MdLocationPin } from "react-icons/md";
import TitleComp from "../Title/TitleComp";
import "./ContactComp.scss";

const ContactComp = () => {
  return (
    <div id="contact" className="contact">
      <TitleComp title="Kết nối và liên hệ" />
      <div className="contact__container">
        <div className="contact__left">
          <h2>Liên hệ với tôi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum consectetur tenetur ipsum labore soluta.
            Obcaecati, velit.
          </p>
          <div className="group__icon">
            <MdOutgoingMail /> <p>tuanpa2k2@gmail.com</p>
          </div>
          <div className="group__icon">
            <MdOutlinePhoneInTalk /> <p>036 526 9311</p>
          </div>
          <div className="group__icon">
            <MdLocationPin /> <p>Hà Nội</p>
          </div>
        </div>
        <form className="contact__right">
          <label>Your name</label>
          <input name="name" type="text" placeholder="Enter your name..." />

          <label>Your email</label>
          <input name="email" type="email" placeholder="Enter your email..." />

          <label> Write your message</label>
          <textarea name="message" id="" placeholder="Enter your message..." />

          <button>Send mail</button>
        </form>
      </div>
    </div>
  );
};

export default ContactComp;
