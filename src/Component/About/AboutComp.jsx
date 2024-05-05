// eslint-disable-next-line no-unused-vars
import React from "react";

import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/default.jpg";
import "./AboutComp.scss";

const AboutComp = () => {
  return (
    <div className="container_about">
      <div className="about_title">
        <span>About me</span>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about_sections">
        <div className="about_left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about_right">
          <div className="about_para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, reiciendis repudiandae dolorem, in provident
              praesentium optio repellat, consequatur adipisci nam dolores tempore at!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla laborum eligendi molestiae earum
            </p>
          </div>
          <div className="about_skills">
            <div className="about_skill">
              <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about_skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about_skill">
              <p>Javascript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about_skill">
              <p>Github</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
