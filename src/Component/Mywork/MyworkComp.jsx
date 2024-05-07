// eslint-disable-next-line no-unused-vars
import React from "react";
import mywork_data from "../../assets/mywork_data.js";
import TitleComp from "../Title/TitleComp";
import erow_icon from "../../assets/arrow_icon.svg";

import "./MyworkComp.scss";

const MyworkComp = () => {
  return (
    <div className="myworks">
      <TitleComp title="My last work" />
      <div className="mywork__container">
        {mywork_data.map((data, key) => {
          return <img key={key} src={data.w_img} alt="w_img" />;
        })}
      </div>
      <div className="mywork__showmore">
        <p>READ MORE</p>
        <img src={erow_icon} alt="erow-icon" />
      </div>
    </div>
  );
};

export default MyworkComp;
