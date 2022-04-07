import React, { useState, useEffect } from "react";
import styles from "./fillter.module.scss";
import fonts from "../../../src/asset/css/Font.module.scss";

function Fillter(props) {
  // const off = props.off;
  const value = props.value;

  const radioData = [
    {
      name: "Tất cả",
      value: 4,
    },
    {
      name: "Đã sử dụng",
      value: 2,
    },
    {
      name: "Chưa sử dụng",
      value: 1,
    },
    {
      name: "Hết hạn",
      value: 3,
    },
  ];

  const renderRadio = () => {
    let xhtml = null;

    xhtml = radioData.map((item) => {
      return (
        <div>
          <input
            name="value"
            type="radio"
            value={item.value}
            onChange={(e) => value(e)}
          />
          <label className={fonts.medium_16}>{item.name}</label>
        </div>
      );
    });
    return xhtml;
  };

  return (
    // <div className={`${visible === true ? styles.filter : [styles.off]}`}>
    <div className={styles.form}>
      <div className={fonts.bold_24} style={{ textAlign: "center" }}>
        Lọc vé
      </div>
      <div className={styles.twoInput}>
        <div className={styles.dateInput}>
          <div className={styles.dateFlex}>
            <label>Từ ngày</label>
            <input type="date" />
          </div>
          <div className={styles.dateFlex} style={{ marginLeft: "76px" }}>
            <label>Đến ngày</label>
            <input type="date" />
          </div>
        </div>
      </div>
      <div className={styles.radioInput}>
        <p className={fonts.semibold_16}>Tình trạng sử dụng</p>
        <div className={styles.radioFlex}>{renderRadio()}</div>
      </div>
      <div className={styles.checkInput}>
        <p className={fonts.semibold_16}>Cổng check-in</p>
        <div className={styles.checkFlex}>
          <div style={{ width: "66.47px" }}>
            <input type="checkbox" />
            <label className={fonts.medium_16}>Tất cả</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className={fonts.medium_16}>Cổng 1</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className={fonts.medium_16}>Cổng 2</label>
          </div>
        </div>
        <div className={styles.checkFlex}>
          <div>
            <input type="checkbox" />
            <label className={fonts.medium_16}>Cổng 3</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className={fonts.medium_16}>Cổng 4</label>
          </div>
          <div>
            <input type="checkbox" />
            <label className={fonts.medium_16}>Cổng 5</label>
          </div>
        </div>
      </div>
      <button
        onClick={() => (props.off ? props.off() : "")}
      >
        <span className={fonts.bold_18} style={{ color: "#FF993C" }}>
          Lọc
        </span>
      </button>
    </div>
    // </div>
  );
}

export default Fillter;
