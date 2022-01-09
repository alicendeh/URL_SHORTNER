import React from "react";
import {
  icon_brand_recognition,
  icon_detailed_records,
  icon_fully_customizable,
} from "../../assets/images";
import style from "./Card.style.module.css";

const DATA_SET = [
  {
    iconName: icon_brand_recognition,
    title: "Brand Recognition",
    body: "Bost your brand recogition with each click. Generic links dont mean a thing. Branded links help install confidence in your content",
  },
  {
    iconName: icon_detailed_records,
    title: "Detailed Records",
    body: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions",
  },
  {
    iconName: icon_fully_customizable,
    title: "Fully Customizable",
    body: "Improve brand awarness and content discoverability through customizable links, supercharging audience engagment",
  },
];

function Card() {
  return (
    <div className={style.main}>
      <div className={style.cardContainer1}>
        <div className={style.lineCont}>
          <div className={style.line}></div>
        </div>
        <div className={style.cardContent}>
          {DATA_SET.map((data, index) => (
            <div
              className={style.cont}
              style={{
                marginTop: index * 40,
                marginBottom: index * -40,
              }}
            >
              <div className={style.iconContainer}>
                <img src={data.iconName} width="35" />
              </div>
              <p className={style.title}> {data.title} </p>
              <p className={style.body}> {data.body} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
