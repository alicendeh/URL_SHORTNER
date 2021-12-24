import React from "react";
import { Header, Hero, StatisticsSection } from "../../components";
import "./LandingPage.style.css";

function LandingPage() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <Header />
          <Hero />
        </div>
      </div>
      <StatisticsSection />
    </div>
  );
}

export default LandingPage;
