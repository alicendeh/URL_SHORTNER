import React from "react";
import "./Button.style.css";

function Button({ title, width }) {
  return (
    <button
      style={{
        width: width ? width : "100px",
      }}
    >
      {title}{" "}
    </button>
  );
}

export default Button;
