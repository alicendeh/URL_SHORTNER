import React from "react";
import { URLUpload, Statistic, Card } from "../../components";
import "./StatisticsSection.style.css";

function StatisticsSection() {
  return (
    <div className="statisticsContainer">
      <URLUpload />
      <Statistic />
      <Card />
    </div>
  );
}

export default StatisticsSection;
