import React, { useEffect, useState } from "react";
import styles from "./Checking.module.scss";
import fonts from "../../../src/asset/css/Font.module.scss";
import Menubar from "../../component/menu/Menubar";
import Topbar from "../../component/topbar/Topbar";

function Checking() {
  const radioData = [
    {
      name: "Tất cả",
      value: 3,
    },
    {
      name: "Đã đối soát",
      value: 1,
    },
    {
      name: "Chưa đối soát",
      value: 2,
    },
  ];
  const renderRadio = () => {
    let xhtml = null;

    xhtml = radioData.map((item) => {
      return (
        <div>
          <input type="radio" name="status" value={item.value} />
          <label className={fonts.medium_16}>{item.name}</label>
        </div>
      );
    });
    return xhtml;
  };

  return (
    <div className={styles.grid}>
      <div className={styles.Menubar}>
        <Menubar />
      </div>
      <div className={styles.Topbar}>
        <Topbar />
      </div>
      {/* left content */}
      <div className={styles.contentLeft}>
        <div className={fonts.bold_36}>Đối soát vé</div>
        <div className={styles.fill}>
          <input placeholder="Tìm bằng số vé" />
          <button>
            <span className={fonts.bold_18}>Chốt đối soát</span>
          </button>
        </div>
        <table className={styles.tableChecking}>
          <tr>
            <th style={{ width: "5%" }}>
              <p>STT</p>
            </th>
            <th style={{ width: "15%" }}>
              <p>Số vé</p>
            </th>
            <th style={{ width: "25%" }}>
              <p>Tên sự kiện</p>
            </th>
            <th style={{ width: "15%" }}>
              <p>Ngày sử dụng</p>
            </th>
            <th style={{ width: "10%" }}>
              <p>Loại vé</p>
            </th>
            <th style={{ width: "15%" }}>
              <p>Cổng check-in</p>
            </th>
            <th></th>
          </tr>
        </table>
      </div>
      <div className={styles.contentRight}>
        <div className={fonts.bold_36}>Lọc vé</div>
        <select>
          <option>Tên sự kiện</option>
        </select>
        <div className={styles.radioFlex}>
          <div className={fonts.semibold_16}>Tình trạng đối soát</div>
          <div>{renderRadio()}</div>
        </div>
      </div>
    </div>
  );
}

export default Checking;
