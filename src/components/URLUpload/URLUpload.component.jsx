import axios from "axios";
import React, { useState, useEffect } from "react";
import { bg_shorten_desktop } from "../../assets/images";
import "./URLUpload.style.css";
import LinesEllipsis from "react-lines-ellipsis";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { loading } from "../../assets/images";

function URLUpload() {
  const [link, setlink] = useState("");
  const [isEmpty, setisEmpty] = useState(false);
  const [shortenedLink, setshortenedLink] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    let exists = localStorage.getItem("EXISTS");
    let links = JSON.parse(localStorage.getItem("LINKS"));

    if (exists === null) {
      setshortenedLink([]);
    } else {
      setshortenedLink([...links]);
    }
  }, []);

  useEffect(() => {
    console.log(isLoading, "STATE");
  }, [isLoading]);

  const shortenLink = async () => {
    if (link === "") {
      setisEmpty(true);
    } else {
      setisLoading(true);

      let res = await axios.get(`
        https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html
        `);

      await setshortenedLink([
        ...shortenedLink,
        {
          fullLink: link,
          shortenedLink: res.data.result.short_link,
        },
      ]);

      localStorage.setItem(
        "LINKS",
        JSON.stringify([
          ...shortenedLink,
          {
            fullLink: link,
            shortenedLink: res.data.result.short_link,
          },
        ])
      );
      if (res.data) {
        localStorage.setItem("EXISTS", true);
        setisLoading(false);
      }
    }
  };

  const onChange = (e) => {
    setlink(e.target.value);
  };

  return (
    <div className="mainDiv">
      <div className="imgBackground">
        <div className="mainContainer">
          <img src={bg_shorten_desktop} alt="" className="imgView" />
          <div className="inputContainer">
            <input
              onChange={onChange}
              value={link}
              placeholder="shorten a link here..."
              className={isEmpty ? `placeholdered` : "input"}
            />
            {isEmpty && <i className="noLink">Please add a link</i>}

            <button className="myBtn" onClick={shortenLink}>
              {isLoading ? (
                <img src={loading} width="70" height="80" />
              ) : (
                " Shorten It!"
              )}
            </button>
          </div>
        </div>
      </div>
      {shortenedLink.length > 0 && (
        <div className="shotenLinkContainer">
          {shortenedLink.map((data, index) => (
            <div className="whiteContainer" key={index}>
              <div className="fullContainer">
                <p className="full">
                  <LinesEllipsis
                    text={data.fullLink}
                    maxLine="1"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </p>
              </div>
              <div className="myLine"></div>
              <div className="secondContent">
                <p>{data.shortenedLink} </p>
                <button className={`myBtn enlarge`}>Copy</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default URLUpload;
