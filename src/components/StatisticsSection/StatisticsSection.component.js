import React from "react";
import { URLUpload, Statistic } from "../../components";
import "./StatisticsSection.style.css";

function StatisticsSection() {
  return (
    <div className="statisticsContainer">
      <URLUpload />
      <Statistic />
    </div>
  );
}

export default StatisticsSection;
