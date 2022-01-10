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
  const [test, setTest] = useState(false);

  useEffect(() => {
    let exists = localStorage.getItem("EXISTS");
    let links = JSON.parse(localStorage.getItem("LINKS"));

    if (exists === null) {
      setshortenedLink([]);
    } else {
      setshortenedLink([...links]);
    }
  }, []);

  const shortenLink = async () => {
    if (link === "") {
      setisEmpty(true);
    } else {
      setisLoading(true);
      setisEmpty(false);

      let res = await axios.get(`
        https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html
        `);

      await setshortenedLink([
        ...shortenedLink,
        {
          fullLink: link,
          shortenedLink: res.data.result.short_link,
          onClipBoard: false,
        },
      ]);

      localStorage.setItem(
        "LINKS",
        JSON.stringify([
          ...shortenedLink,
          {
            fullLink: link,
            shortenedLink: res.data.result.short_link,
            onClipBoard: false,
          },
        ])
      );
      if (res.data) {
        localStorage.setItem("EXISTS", true);
        setisLoading(false);
        setlink("");
      }
    }
  };

  const onChange = (e) => {
    setlink(e.target.value);
  };

  const copy = (data, index) => {
    setTest(!test);
    navigator.clipboard.writeText(data.shortenedLink);
    let newArray = [...shortenedLink];
    newArray[index] = {
      ...newArray[index],
      onClipBoard: true,
    };

    setshortenedLink(newArray);
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
            {isEmpty && <i className={`noLink next`}>Please add a link</i>}

            <button className="myBtn" onClick={shortenLink}>
              {isLoading ? (
                <div className="spinnerContainer">
                  <div className="spinner"></div>
                </div>
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
                <LinesEllipsis
                  className="full"
                  text={data.fullLink}
                  maxLine="1"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </div>
              <div className="myLine"></div>
              <div className="secondContent">
                <p>{data.shortenedLink} </p>
                {data.onClipBoard ? (
                  <button
                    style={{
                      backgroundColor: "hsl(257, 27%, 26%)",
                    }}
                    className={`myBtn enlarge copied`}
                  >
                    Copied!
                  </button>
                ) : (
                  <button
                    onClick={() => copy(data, index)}
                    className={`myBtn enlarge`}
                  >
                    Copy
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default URLUpload;
