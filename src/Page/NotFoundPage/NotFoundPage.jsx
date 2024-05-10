// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

import img from "../../assets/404-robot.jpg";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper-notFound">
      <div className="content">
        <span>OOPS!</span>
        <h3>Không tìm thấy trang web của bạn! Vui lòng kiểm tra lại đường dẫn</h3>
        <button onClick={() => navigate("/")}>Back Home</button>
      </div>
      <div className="image">
        <img src={img} alt="not-found" />
      </div>
    </div>
  );
};

export default NotFoundPage;
