import React from "react";
import "./Button.style.css";

function Button({ title, width, br }) {
  return (
    <button
      style={{
        width: width ? width : "100px",
        borderRadius: br ? br : "55px",
      }}
    >
      {title}
    </button>
  );
}

export default Button;
