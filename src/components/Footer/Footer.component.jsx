import React from "react";
import styles from "./Footer.style.module.css";
import { Button } from "../../components";
import {
  bg_boost_desktop,
  icon_facebook,
  icon_instagram,
  icon_pinterest,
  icon_twitter,
} from "../../assets/images";

function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.fistContainer}>
        <img src={bg_boost_desktop} className={styles.img} />
        <div className={styles.itemContiner}>
          <p>Boost your links today</p>
          <div className={styles.btnContainer}>
            <Button width={"150px"} title={"Get Started"} />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.items}>
          <div className={styles.logo}>
            <p>Shortly</p>
          </div>
          <div className={styles.item}>
            <ul>
              <p>Features</p>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className={styles.item}>
            <ul>
              <p>Resources</p>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.item}>
            <ul>
              <p>Company</p>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.icons}>
            <img src={icon_facebook} />
            <img src={icon_twitter} />
            <img src={icon_pinterest} />
            <img src={icon_instagram} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
