// eslint-disable-next-line no-unused-vars
import React from "react";

import { AiOutlineDoubleRight } from "react-icons/ai";
import "./HeroComp.scss";

const HeroComp = () => {
  return (
    <div className="hero">
      <h2>Hii everyone,</h2>
      <div>
        <h1>
          Mình là <span>Phí Anh Tuấn</span>,
        </h1>
        <h1>một freelancer thích mọi thứ...</h1>
      </div>
      <p>
        Nhiều người kỳ vọng HLV Kim Sang-sik sẽ mang làn gió mới đến cho đội tuyển VN, nhưng ít ai biết rằng chính ông
        Kim cũng rất cần thành công tại VN để tạo cú hích cho sự nghiệp huấn luyện.
      </p>
      <div className="button__hero">
        <span>Tìm hiểu thêm ...</span>
        <AiOutlineDoubleRight />
      </div>
    </div>
  );
};

export default HeroComp;
