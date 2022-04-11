import React from "react";
import styles from "./Topbar.module.scss";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topLeft}>
        <input placeholder="Search" />
        <div className={styles.loupe}>
          <img src={window.location.origin + "/Img/loupe_1.png"} alt="..." />
        </div>
      </div>
      <div className={styles.topRight}>
        <img
          src={window.location.origin + "/Img/fi_mail.png"}
          alt="..."
          className={styles.icon}
        />
        <img
          src={window.location.origin + "/Img/fi_bell.png"}
          alt="..."
          className={styles.icon}
        />
        <img
          src={window.location.origin + "/Img/sasuke.webp"}
          alt="..."
          className={styles.avt}
        />
      </div>
    </div>
  );
}

export default Topbar;
