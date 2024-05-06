// eslint-disable-next-line no-unused-vars
import React from "react";

import theme_pattern from "../../assets/theme_pattern.svg";
import "./TitleComp.scss";

// eslint-disable-next-line react/prop-types
const TitleComp = ({ title }) => {
  return (
    <div className="titles">
      <h2>{title}</h2>
      <img src={theme_pattern} alt="theme" />
    </div>
  );
};

export default TitleComp;
