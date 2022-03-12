import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointsTotalValues = dataPoints.map(dataPoint => dataPoint.value);
  const maxTotalValue = Math.max(...dataPointsTotalValues);

  return (
    <div className="chart">
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={maxTotalValue}
          dataLabel={dataPoint.label}
          max={null}
        />
      ))}
    </div>
  );
};

export default Chart;
