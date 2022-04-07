import React, { useState, useEffect } from "react";
import styles from "./TicketComp.module.scss";
import fonts from "../../asset/css/Font.module.scss";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../service/Firebase";
import SettingService from "../../service/Setting/SettingService";

function TicketComp(props) {
  const title = props.title;
  const display = props.display;
  const changeData = props.changeData;

  const [price, setPrice] = useState({
    ComboPrice: "-",
    Price: "",
    Ticket: "",
  });
  const [add, setAdd] = useState({
    ComboID: "",
    ComboPrice: "-",
    End_date: "",
    End_time: "",
    Name: "",
    Price: "",
    Start_date: "",
    Start_time: "",
    Status: "1",
  });

  const [change, setChange] = useState();

  useEffect(() => {
    setChange(changeData);
  }, [changeData]);

  const handleAddTicket = async () => {
    await setDoc(doc(db, "Ticket", add.Name), add);
    window.location.reload();
  };
  const handleUpdateTicket = () => {
    SettingService.delTicket(changeData.Name);
    SettingService.updTicket(change.Name, change);
    // window.location.reload();
  };

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
              <input
                style={{ width: "376px" }}
                onChange={(e) => setAdd({ ...add, Name: e.target.value })}
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.input}>
              <label className={fonts.semibold_16}>Ngày áp dụng</label>
              <div className={styles.dateGroup}>
                <input
                  type="date"
                  onChange={(e) =>
                    setAdd({ ...add, Start_date: e.target.value })
                  }
                />
                <input
                  type="time"
                  onChange={(e) =>
                    setAdd({ ...add, Start_time: e.target.value })
                  }
                />
              </div>
            </div>
            <div className={styles.input}>
              <label className={fonts.semibold_16}>Ngày hết hạn</label>
              <div className={styles.dateGroup}>
                <input
                  type="date"
                  onChange={(e) => setAdd({ ...add, End_date: e.target.value })}
                />
                <input
                  type="time"
                  onChange={(e) => setAdd({ ...add, End_time: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div>
            <div className={fonts.semibold_16}>Giá vé áp dụng</div>
            <div>
              <input
                type="checkbox"
                style={{ width: "24px", height: "24px" }}
                onChange={() => setAdd({ ...add, Price: price.Price })}
              />
              <label className={fonts.medium_16}>Vé lẻ (vnđ/vé) với giá </label>
              <input
                style={{ width: "calc(148px - 32px)" }}
                onChange={(e) => setPrice({ ...add, Price: e.target.value })}
              />
              <label className={fonts.medium_16}> / vé</label>
            </div>
            <div>
              <input
                type="checkbox"
                style={{ width: "24px", height: "24px" }}
                onChange={() =>
                  setAdd({
                    ...add,
                    ComboPrice: price.Price + " / " + price.Ticket + " vé",
                  })
                }
              />
              <label className={fonts.medium_16}>Combo vé với giá </label>
              <input
                style={{ width: "calc(148px - 32px)" }}
                onChange={(e) =>
                  setPrice({ ...price, ComboPrice: e.target.value })
                }
              />
              <span className={fonts.medium_16}> / </span>
              <input
                style={{ width: "calc(72px - 32px)" }}
                onChange={(e) => setPrice({ ...price, Ticket: e.target.value })}
              />
              <span className={fonts.medium_16}>vé</span>
            </div>
          </div>
          <div>
            <div className={fonts.semibold_16}>Tình trạng</div>
            <select
              style={{ width: "176px" }}
              value={add.Status}
              onChange={(e) => setAdd({ ...add, Status: e.target.value })}
            >
              <option value="1">Đang áp dụng</option>
              <option value="2">Tắt</option>
            </select>
          </div>
          <div className={styles.twoButton}>
            <button style={{ background: "white" }} onClick={() => display()}>
              <span className={fonts.bold_18} style={{ color: "#FF993C" }}>
                Hủy
              </span>
            </button>
            <button
              style={{ background: "#FF993C" }}
              onClick={() => {
                handleAddTicket();
                display();
              }}
            >
              <span className={fonts.bold_18} style={{ color: "white" }}>
                Lưu
              </span>
            </button>
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
                <input
                  style={{ width: "245px" }}
                  onChange={(e) =>
                    setChange({ ...change, ComboID: e.target.value })
                  }
                />
              </div>
            </div>
            <div className={styles.input}>
              <label className={fonts.semibold_16}>Tên sự kiện</label>
              <div>
                <input
                  style={{ width: "367px" }}
                  onChange={(e) =>
                    setChange({ ...change, Name: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.input}>
              <label className={fonts.semibold_16}>Ngày áp dụng</label>
              <div className={styles.dateGroup}>
                <input
                  type="date"
                  onChange={(e) =>
                    setChange({ ...change, Start_date: e.target.value })
                  }
                />
                <input
                  type="time"
                  onChange={(e) =>
                    setChange({ ...change, Start_time: e.target.value })
                  }
                />
              </div>
            </div>
            <div className={styles.input}>
              <label className={fonts.semibold_16}>Ngày hết hạn</label>
              <div className={styles.dateGroup}>
                <input
                  type="date"
                  onChange={(e) =>
                    setChange({ ...change, End_date: e.target.value })
                  }
                />
                <input
                  type="time"
                  onChange={(e) =>
                    setChange({ ...change, End_time: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <div className={fonts.semibold_16}>Giá vé áp dụng</div>
            <div>
              <input
                type="checkbox"
                style={{ width: "24px", height: "24px" }}
                onChange={() => setChange({ ...change, Price: price.Price })}
              />
              <label className={fonts.medium_16}>Vé lẻ (vnđ/vé) với giá </label>
              <input
                style={{ width: "calc(148px - 32px)" }}
                onChange={(e) => setPrice({ ...change, Price: e.target.value })}
              />
              <label className={fonts.medium_16}> / vé</label>
            </div>
            <div>
              <input
                type="checkbox"
                style={{ width: "24px", height: "24px" }}
                onChange={() =>
                  setChange({
                    ...change,
                    ComboPrice: price.Price + " / " + price.Ticket + " vé",
                  })
                }
              />
              <label className={fonts.medium_16}>Combo vé với giá </label>
              <input
                style={{ width: "calc(148px - 32px)" }}
                onChange={(e) =>
                  setPrice({ ...change, ComboPrice: e.target.value })
                }
              />
              <span className={fonts.medium_16}> / </span>
              <input
                style={{ width: "calc(72px - 32px)" }}
                onChange={(e) => setPrice({ ...price, Ticket: e.target.value })}
              />
              <span className={fonts.medium_16}>vé</span>
            </div>
          </div>
          <div>
            <div className={fonts.semibold_16}>Tình trạng</div>
            <select
              style={{ width: "176px" }}
              value={price.Status}
              onChange={(e) => setChange({ ...change, Status: e.target.value })}
            >
              <option value="1">Đang áp dụng</option>
              <option value="2">Tắt</option>
            </select>
          </div>
          <div className={styles.twoButton}>
            <button style={{ background: "white" }} onClick={() => display()}>
              <span className={fonts.bold_18} style={{ color: "#FF993C" }}>
                Hủy
              </span>
            </button>
            <button
              style={{ background: "#FF993C" }}
              onClick={() => {
                handleUpdateTicket();
                display();
              }}
            >
              <span className={fonts.bold_18} style={{ color: "white" }}>
                Lưu
              </span>
            </button>
          </div>
        </>
      );
    }
  };

  return <div className={styles.form}>{renderComponent()}</div>;
}

export default TicketComp;
