import React from "react";
import "./ChartBar.css";

const ChartBar = ({ value, maxValue, dataLabel, max }) => {
  let dataFillHeight = "0%";

  if (maxValue > 0) {
    dataFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner ">
        <div
          className="chart-bar__fill"
          style={{ height: dataFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{dataLabel}</div>
    </div>
  );
};

export default ChartBar;
