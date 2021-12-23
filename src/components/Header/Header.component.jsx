import React, { useState } from "react";
import { logo } from "../../assets/images";
import "./Header.style.css";

function Header() {
  const [menuToggler, setmenuToggler] = useState(false);

  const toggleMenu = () => {
    setmenuToggler(!menuToggler);
  };
  return (
    <>
      <nav className="navWrapper">
        <div className="firstSection">
          <img src={logo} alt="logo" />
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <div className="secondSection">
          <p>Login</p>
          <button>Signup</button>
        </div>
        <div className="menu" onClick={toggleMenu}>
          {menuToggler ? (
            <i class="fas fa-times"></i>
          ) : (
            <i class="fas fa-bars"></i>
          )}
        </div>
      </nav>
      <div
        className={`hey ${menuToggler ? "hamburgerMenu" : "show"} `}
        // "hamburgerMenu"
      >
        <div>
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <div className="line">
          <hr />
        </div>
        <div>
          <p>Login</p>
          <button>Signup</button>
        </div>
      </div>
    </>
  );
}

export default Header;
