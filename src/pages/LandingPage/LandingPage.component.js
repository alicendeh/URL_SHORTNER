import React from "react";
import { Header, Hero, StatisticsSection, Footer } from "../../components";
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
      <Footer />
    </div>
  );
}

export default LandingPage;
