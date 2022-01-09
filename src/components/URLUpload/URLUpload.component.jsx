import axios from "axios";
import React, { useState, useEffect } from "react";
import { bg_shorten_desktop } from "../../assets/images";
import "./URLUpload.style.css";

function URLUpload() {
  const [link, setlink] = useState("");
  const [isEmpty, setisEmpty] = useState(false);
  const [shortenedLink, setshortenedLink] = useState([]);

  useEffect(() => {
    let p = localStorage.getItem("LINK");
    console.log(p, "p here");
  }, []);

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
              Shorten It!
            </button>
          </div>
        </div>
      </div>
      {shortenedLink.length > 0 && (
        <div className="shotenLinkContainer">
          {shortenedLink.map((data, index) => (
            <div className="whiteContainer" key={index}>
              <div>
                <p className="full">{data.fullLink}</p>
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
