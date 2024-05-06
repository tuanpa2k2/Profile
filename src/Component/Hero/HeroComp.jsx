// eslint-disable-next-line no-unused-vars
import React from "react";

import profile_hero from "../../assets/default.jpg";
import "./HeroComp.scss";

const HeroComp = () => {
  return (
    <div className="hero">
      <div className="img_hero">
        <img src={profile_hero} alt="hero" />
      </div>
      <h1>
        Mình tên<span> Phí Anh Tuấn</span>, biệt danh: <strong>Snake</strong> 🐍
      </h1>
      <p>
        Nhiều người kỳ vọng HLV Kim Sang-sik sẽ mang làn gió mới đến cho đội tuyển VN, nhưng ít ai biết rằng chính ông
        Kim cũng rất cần thành công tại VN để tạo cú hích cho sự nghiệp huấn luyện.
      </p>
    </div>
  );
};

export default HeroComp;
