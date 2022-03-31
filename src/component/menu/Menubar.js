import React, { useState } from "react";
import styles from "./Menubar.module.scss";
import { NavLink } from "react-router-dom";

function Menubar() {
  const [currentPage, setCurrentPage] = useState([]);

  return (
    <div style={{ width: "252px", height: "572px" }}>
      <img
        src={window.location.origin + "/Img/insight-logo.png"}
        alt="..."
        className={styles.logoMenu}
      />
      <div className={styles.page}>
        <NavLink activeClassName exact to="/" className={styles.content}>
          <img src={window.location.origin + "/Img/u_home-alt.png"} alt="..." />
          <p>Trang chủ</p>
        </NavLink>
        <NavLink
          activeClassName={"active"}
          to="/Manage"
          className={[styles.content]}
        >
          <img src={window.location.origin + "/Img/u_ticket.png"} alt="..." />
          <p>Quản lý vé</p>
        </NavLink>
        <NavLink to="/Checking" className={[styles.content]}>
          <img src={window.location.origin + "/Img/u_invoice.png"} alt="..." />
          <p>Đối soát vé</p>
        </NavLink>
        <NavLink to="/Setting" className={styles.content}>
          <img src={window.location.origin + "/Img/u_setting.png"} alt="..." />
          <p>Cài đặt</p>
        </NavLink>
        <div className={styles.content}>
          <p>Gói dịch vụ</p>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
