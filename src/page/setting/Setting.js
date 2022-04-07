import React, { useState, useEffect } from "react";
import styles from "./Setting.module.scss";
import funcs from "../../../src/asset/css/FunctionStyle.module.scss";
import fonts from "../../../src/asset/css/Font.module.scss";
import Menubar from "../../component/menu/Menubar";
import Topbar from "../../component/topbar/Topbar";
import { docTicket } from "../../service/Firebase";
import SettingSerVice from "../../service/Setting/SettingService";
import TicketComp from "../../component/ticket/TicketComp";

function Setting() {
  const [setting, setSetting] = useState([]);
  const [add, setAdd] = useState(0);
  const [change, setChange] = useState({
    display: 0,
    data: "",
  });

  useEffect(() => {
    getScreenData();
  }, []);

  const getScreenData = () => {
    SettingSerVice.setting(docTicket).then((res) => {
      let newData = res.docs.map((item) => ({ ...item.data(), id: item.id }));
      setSetting(newData);
    });
  };

  const checkStatus = (status) => {
    if (status == "1") {
      // 1 equal used
      return (
        <div className={funcs.used_1}>
          <div className={funcs.dot_1} />
          <p className={fonts.medium_12} style={{ margin: "8px 0" }}>
            Đang áp dụng
          </p>
        </div>
      );
    } else if (status == "2") {
      // 2 equal off
      return (
        <div className={funcs.used_3}>
          <div className={funcs.dot_3} />
          <p className={fonts.medium_12} style={{ margin: "8px 0" }}>
            Tắt
          </p>
        </div>
      );
    }
  };

  const renderTable = () => {
    let xhtml = null;

    xhtml = setting.map((item, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{item.ComboID}</td>
          <td>{item.Name}</td>
          <td>
            {item.Start_date}
            <br />
            {item.Start_time}
          </td>
          <td>
            {item.End_date}
            <br />
            {item.End_time}
          </td>
          <td>{item.Price}</td>
          <td>{item.ComboPrice}</td>
          <td>{checkStatus(item.Status)}</td>
          <td style={{display: "flex", justifyContent: "center", columnGap: "8px", alignItems: "center"}}>
            <img src={window.location.origin + "/Img/fi_edit.png"} alt="..." style={{width: "24px", height: "24px"}}/>
            <p
              style={{ cursor: "pointer", color: "#FF993C" }}
              onClick={() => setChange({ display: 1, data: item })}
            >
              Cập nhật
            </p>
          </td>
        </tr>
      );
    });
    return xhtml;
  };

  const setDisplay = () => {
    setAdd(0);
    setChange({ display: 0 });
  };

  return (
    <div className={styles.grid}>
      <div className={styles.Menubar}>
        <Menubar />
        <div className={`${add == 0 ? [styles.off] : [styles.on]}`}>
          <TicketComp
            title="add"
            display={setDisplay}
            length={setting.length}
          />
        </div>
        <div className={`${change.display == 0 ? [styles.off] : [styles.on]}`}>
          <TicketComp display={setDisplay} changeData={change.data} />
        </div>
      </div>
      <div className={styles.Topbar}>
        <Topbar />
      </div>
      <div className={styles.Content}>
        <div className={fonts.bold_36}>Danh sách gói vé</div>
        <div className={styles.fill}>
          <input placeholder="Tìm bằng số vé" />
          <div className={styles.right}>
            <button>
              <p className={fonts.bold_18} style={{ color: "#FF993C" }}>
                Xuất file (.csv)
              </p>
            </button>
            <button style={{ backgroundColor: "#FF993C" }}>
              <p
                className={fonts.bold_18}
                style={{ color: "white" }}
                onClick={() => setAdd(1)}
              >
                Thêm gói vé
              </p>
            </button>
          </div>
        </div>
        <table className={styles.tableSetting}>
          <tr>
            <th>STT</th>
            <th>Mã gói</th>
            <th>Tên gói vé</th>
            <th>Ngày áp dụng</th>
            <th>Ngày hết hạn</th>
            <th>Giá vé (VNĐ/Vé)</th>
            <th>Giá combo (VNĐ/combo)</th>
            <th>Tình trạng</th>
            <th></th>
          </tr>
          {renderTable()}
        </table>
      </div>
    </div>
  );
}

export default Setting;
