// eslint-disable-next-line no-unused-vars
import React from "react";

import profile_img from "../../assets/default.jpg";
import "./AboutComp.scss";
import TitleComp from "../Title/TitleComp";

const AboutComp = () => {
  return (
    <div className="container_about">
      <TitleComp title="About me" />
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
              Ngay mùa đầu nắm quyền tại Jeonbuk, ông Kim đã lên ngôi ở K-League. Tuy nhiên, điều đó không được đánh giá
              cao, bởi ông chỉ đơn thuần là tiếp quản đội hình mạnh của Jeonbuk và kế thừa lối chơi được xây dựng từ
              người tiền nhiệm như Jose Morais hay Choi
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
