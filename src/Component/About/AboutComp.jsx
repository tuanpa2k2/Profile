// eslint-disable-next-line no-unused-vars
import React from "react";

import { TbHandClick } from "react-icons/tb";
import TitleComp from "../Title/TitleComp";
import profile_img from "../../assets/default.jpg";
import "./AboutComp.scss";

const AboutComp = () => {
  return (
    <div id="about" className="container_about">
      <TitleComp title="Kĩ năng" />
      <div className="about_sections">
        <div className="about_left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about_right">
          <div className="about_para">
            <p>
              Nhiều người kỳ vọng HLV Kim Sang-sik sẽ mang làn gió mới đến cho đội tuyển VN, nhưng ít ai biết rằng chính
              ông Kim cũng rất cần thành công tại VN để tạo cú hích cho sự nghiệp huấn luyện.
            </p>
            <p>
              Nhiều người kỳ vọng HLV Kim Sang-sik sẽ mang làn gió mới đến cho đội tuyển VN, nhưng ít ai biết rằng chính
              ông Kim cũng rất cần thành công tại VN để tạo cú hích cho sự nghiệp huấn luyện.
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
          <div className="btn__showmore">
            <button>Show more</button>
            <TbHandClick />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
