import React, { useState } from "react";
import styles from "./TicketComp.module.scss";
import fonts from "../../asset/css/Font.module.scss";

function TicketComp(props) {
  const title = props.title;
  const display = props.display;
  console.log(display)

  const [add, setAdd] = useState([]);
  const [change, setChange] = useState([]);

  const renderComponent = () => {
    if (title === "add") {
      return (
        <>
          <div className={fonts.bold_24} style={{ textAlign: "center" }}>
            Thêm gói vé
          </div>
          <div className={styles.input}>
            <label className={fonts.semibold_16}>Tên gói vé</label>
            <div>
              <input style={{ width: "376px" }} />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={fonts.bold_24} style={{ textAlign: "center" }}>
            Cập nhật thông tin gói vé
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.input}>
              <label className={fonts.semibold_16}>Mã sự kiện</label>
              <div>
                <input style={{ width: "245px" }} />
              </div>
            </div>
            <div className={styles.input}>
              <label className={fonts.semibold_16}>Tên sự kiện</label>
              <div>
                <input style={{ width: "367px" }} />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  const handleOff = () => {
    if (title == "add") {
      display(add, setAdd);
    } else {
      display(change, setChange);
    }
  };

  return (
    <div className={styles.form}>
      {renderComponent()}
      <div className={styles.inputGroup}>
        <div className={styles.input}>
          <label className={fonts.semibold_16}>Ngày áp dụng</label>
          <div className={styles.dateGroup}>
            <input type="date" />
            <input type="time" />
          </div>
        </div>
        <div className={styles.input}>
          <label className={fonts.semibold_16}>Ngày hết hạn</label>
          <div className={styles.dateGroup}>
            <input type="date" />
            <input type="time" />
          </div>
        </div>
      </div>
      <div>
        <div className={fonts.semibold_16}>Giá vé áp dụng</div>
        <div>
          <input type="checkbox" style={{ width: "24px", height: "24px" }} />
          <label className={fonts.medium_16}>Vé lẻ (vnđ/vé) với giá </label>
          <input style={{ width: "calc(148px - 32px)" }} />
          <label className={fonts.medium_16}> / vé</label>
        </div>
        <div>
          <input type="checkbox" style={{ width: "24px", height: "24px" }} />
          <label className={fonts.medium_16}>Combo vé với giá </label>
          <input style={{ width: "calc(148px - 32px)" }} />
          <span className={fonts.medium_16}> / </span>
          <input style={{ width: "calc(72px - 32px)" }} />
          <span className={fonts.medium_16}>vé</span>
        </div>
      </div>
      <div>
        <div className={fonts.semibold_16}>Tình trạng</div>
        <select style={{ width: "176px" }}>
          <option>Đang áp dụng</option>
          <option>Tắt</option>
        </select>
      </div>
      <div className={styles.twoButton}>
        <button style={{ background: "white" }} onClick={() => display()}>
          <span className={fonts.bold_18} style={{ color: "#FF993C" }}>
            Hủy
          </span>
        </button>
        <button style={{ background: "#FF993C" }}>
          <span className={fonts.bold_18} style={{ color: "white" }}>
            Lưu
          </span>
        </button>
      </div>
    </div>
  );
}

export default TicketComp;
