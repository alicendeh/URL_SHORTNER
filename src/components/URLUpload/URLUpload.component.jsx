import React from "react";
import { bg_shorten_desktop } from "../../assets/images";
import { Button } from "../../components";
import "./URLUpload.style.css";

function URLUpload() {
  return (
    <div className="mainDiv">
      <div className="imgBackground">
        <div className="mainContainer">
          <img src={bg_shorten_desktop} alt="" className="imgView" />
          <div className="inputContainer">
            <input placeholder="shorten a link here..." className="input" />
            {/* <Button
              mys={{
                width: "70%",
              }}
              className="extra"
              title="Shorten It!"
              br="7px"
              width="150px"
            /> */}
            <button className="myBtn">Shorten It!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default URLUpload;
