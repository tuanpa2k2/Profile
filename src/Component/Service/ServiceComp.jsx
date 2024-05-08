// eslint-disable-next-line no-unused-vars
import React from "react";

import services_data from "../../assets/services_data";
import erow_icon from "../../assets/arrow_icon.svg";
import TitleComp from "../Title/TitleComp";
import "./ServiceComp.scss";

const ServiceComp = () => {
  return (
    <div id="service" className="services">
      <div className="services__title">
        <TitleComp title="Dịch vụ " />
      </div>
      <div className="services__container">
        {services_data.map((data, key) => {
          return (
            <div className="services__format" key={key}>
              <div className="services__name">
                <span>{data.s_no}</span>
                <span className="name">{data.s_name}</span>
              </div>
              <p>{data.s_desc}</p>
              <div className="services__readmore">
                <p>read more</p>
                <img src={erow_icon} alt="erow-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceComp;
