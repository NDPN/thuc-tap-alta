import React from "react";
import styles from "./Menubar.module.scss";

function Menubar() {
  return (
    <div style={{ width: "252px", height: "572px" }}>
      <img
        src={window.location.origin + "/Img/insight-logo.png"}
        alt="..."
        className={styles.logoMenu}
      />
      <div className={styles.page}>
        <div className={styles.content}>
          <img src={window.location.origin + "/Img/u_home-alt.png"} alt="..." />
          <p>Trang chủ</p>
        </div>
        <div className={styles.content}>
          <img src={window.location.origin + "/Img/u_ticket.png"} alt="..." />
          <p>Quản lý vé</p>
        </div>
        <div className={styles.content}>
          <img src={window.location.origin + "/Img/u_invoice.png"} alt="..." />
          <p>Đối soát vé</p>
        </div>
        <div className={styles.content}>
          <img src={window.location.origin + "/Img/u_setting.png"} alt="..." />
          <p>Cài đặt</p>
        </div>
        <div className={styles.content}>
          <p>Gói dịch vụ</p>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
