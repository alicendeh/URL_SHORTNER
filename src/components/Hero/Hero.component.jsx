import React from "react";
import "./Hero.style.css";
import { Button } from "../../components";
import { illustration_working } from "../../assets/images";

function Hero() {
  return (
    <div>
      <section>
        <div className="leftSection">
          <p className="title"> More than just shorter links</p>
          <p className="slogan">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <Button width="120px" title={"Get Started"} />
        </div>
        <div className="rightSection">
          <img src={illustration_working} className="img" />
        </div>
      </section>
      <div className="other">
        <div className="rightSection">
          <img src={illustration_working} className="img" />
        </div>
        <div className="leftSection">
          <p className="title"> More than just shorter links</p>
          <p className="slogan">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <Button width="140px" title={"Get Started"} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
