// eslint-disable-next-line no-unused-vars
import React from "react";

import { AiOutlineDoubleRight } from "react-icons/ai";
import "./HeroComp.scss";
import { useNavigate } from "react-router-dom";

const HeroComp = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <h2>Hii everyone,</h2>
      <div>
        <h1>
          Mình là <span>Phí Anh Tuấn</span>,
        </h1>
        <h1>một freelancer thích mọi thứ...</h1>
      </div>
      <div className="abcd">
        <p>Không có con đường dẫn đến thành công mà không có trông gai và thử thách...</p>
        <p>Hãy tin rằng bạn có thể, và bạn đã hoàn thành nửa con đường!</p>
      </div>
      <div className="button__hero" onClick={() => navigate("/profile")}>
        <span>Tìm hiểu thêm ...</span>
        <AiOutlineDoubleRight />
      </div>
    </div>
  );
};

export default HeroComp;
