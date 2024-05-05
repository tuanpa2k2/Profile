// eslint-disable-next-line no-unused-vars
import React from "react";

import profile_hero from "../../assets/default.jpg";
import "./HeroComp.scss";

const HeroComp = () => {
  return (
    <>
      <div className="hero">
        <div className="img_hero">
          <img src={profile_hero} alt="hero" />
        </div>
        <h1>
          Mình tên<span> Phí Anh Tuấn</span>, biệt danh: <strong>Snake</strong> 🐍
        </h1>
        <p>
          Error dolorum neque ea similique, labore cumque necessitatibus voluptatem excepturi iure minus veritatis,
          porro blanditiis voluptas beatae illum.
        </p>
      </div>
      <hr />
    </>
  );
};

export default HeroComp;
