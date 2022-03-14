import React, { useEffect, useState } from "react";
import styles from "./Manage.module.scss";
import funcs from "../../css/FunctionStyle.module.scss";
import Menubar from "../../component/menu/Menubar";
import Topbar from "../../component/topbar/Topbar";
import Fillter from "../../component/fillter/Fillter";
import { docManage } from "../../service/Firebase";
import ManageService from "../../service/Manage/ManageService";

function Manage() {
  const [manage, setManage] = useState([]);
  const [on, setOn] = useState(0);

  const getScreendata = () => {
    ManageService.manage(docManage).then((res) => {
      let newData = res.docs.map((item) => ({ ...item.data(), id: item.id }));
      setManage(newData);
    });
  };

  const setDisplay = () => {
    if (on === 0) {
      // off
      setOn(on + 1);
    } else {
      // on
      setOn(on - 1);
    }
  };

  const styleUsed = (used) => {
    if (used == 1) {
      // 1 equal not used yet
      return (
        <div className={funcs.used_1}>
          <div className={funcs.dot_1} />
          <p>Chưa sử dụng</p>
        </div>
      );
    } else if (used == 2) {
      // 2 equal used
      return (
        <div className={funcs.used_2}>
          <div className={funcs.dot_2} />
          <p>Đã sử dụng</p>
        </div>
      );
    }
    // 3 equal out of date
    return (
      <div className={funcs.used_3}>
        <div className={funcs.dot_3} />
        <p>Hết hạn</p>
      </div>
    );
  };

  useEffect(() => {
    getScreendata();
  }, []);

  return (
    <div className={styles.grid}>
      <div className={styles.Menubar}>
        <Menubar />
        <div className={`${on === 0 ? [styles.off] : [styles.on]}`}>
          <Fillter off={setDisplay} />
        </div>
      </div>
      <div className={styles.Topbar}>
        <Topbar />
      </div>
      <div className={styles.content}>
        <div className={styles.Title}>Danh sách vé</div>
        <div className={styles.fill}>
          <input placeholder="Tìm bằng số vé" />
          <div className={styles.right}>
            <button onClick={() => setDisplay()}>
              <img
                src={window.location.origin + "/Img/fi_filter.png"}
                alt="..."
              />
              <p>Lọc vé</p>
            </button>
            <button>
              <p>Xuất file (.csv)</p>
            </button>
          </div>
        </div>
        <table className={styles.tableManage}>
          <tr>
            <th>
              <p>STT</p>
            </th>
            <th>
              <p>Booking code</p>
            </th>
            <th>
              <p>Số vé</p>
            </th>
            <th>
              <p>Tình trạng sử dụng</p>
            </th>
            <th>
              <p>Ngày sử dụng</p>
            </th>
            <th>
              <p>Ngày xuất vé</p>
            </th>
            <th>
              <p>Cổng check - in</p>
            </th>
          </tr>
          {manage?.map((item) => [
            <tr key={manage.id}>
              <td>
                <p>{item.Order}</p>
              </td>
              <td>
                <p>{item.Booking}</p>
              </td>
              <td>
                <p>{item.Number}</p>
              </td>
              <td>
                <p>{styleUsed(item.Used)}</p>
              </td>
              <td>
                <p>{item.Start_date}</p>
              </td>
              <td>
                <p>{item.End_date}</p>
              </td>
              <td>
                <p>{item.Gate}</p>
              </td>
            </tr>,
          ])}
        </table>
      </div>
    </div>
  );
}

export default Manage;
