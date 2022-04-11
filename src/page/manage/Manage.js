import React, { useEffect, useState } from "react";
import styles from "./Manage.module.scss";
import funcs from "../../../src/asset/css/FunctionStyle.module.scss";
import fonts from "../../../src/asset/css/Font.module.scss";
import Menubar from "../../component/menu/Menubar";
import Topbar from "../../component/topbar/Topbar";
import Fillter from "../../component/fillter/Fillter";
import { docManage } from "../../service/Firebase";
import ManageService from "../../service/Manage/ManageService";

function Manage() {
  const [manage, setManage] = useState([]);
  const [value, setValue] = useState();
  const [filter, setFilter] = useState([]);
  const [on, setOn] = useState(0);

  const getScreendata = () => {
    ManageService.manage(docManage).then((res) => {
      let newData = res.docs.map((item) => ({ ...item.data(), id: item.id }));
      setManage(newData);
    });
  };

  const filterData = () => {
    setFilter(() => {
      return manage.filter((item) => item.Used == value);
    });
    if (value == 4) {
      setFilter(manage);
      getScreendata();
    }
  };

  const setDisplay = () => {
    filterData();
    if (on === 0) {
      setOn(on + 1);
    } else {
      setOn(on - 1);
    }
  };

  const activeChange = (item) => {
    const id = item.id;
    manage.indexOf((item) => console.log(item.id == id));
  };

  const styleUsed = (used) => {
    if (used == 1) {
      // 1 equal not used yet
      return (
        <div className={funcs.used_1}>
          <div className={funcs.dot_1} />
          <p className={fonts.medium_12} style={{ margin: "8px 0" }}>
            Chưa sử dụng
          </p>
        </div>
      );
    } else if (used == 2) {
      // 2 equal used
      return (
        <div className={funcs.used_2}>
          <div className={funcs.dot_2} />
          <p className={fonts.medium_12} style={{ margin: "8px 0" }}>
            Đã sử dụng
          </p>
        </div>
      );
    }
    // 3 equal out of date
    return (
      <div className={funcs.used_3}>
        <div className={funcs.dot_3} />
        <p className={fonts.medium_12} style={{ margin: "8px 0" }}>
          Hết hạn
        </p>
      </div>
    );
  };

  useEffect(() => {
    getScreendata();
  }, []);

  useEffect(() => {
    setFilter(manage);
  }, [manage]);

  return (
    <div className={styles.grid}>
      <div className={styles.Menubar}>
        <Menubar />
        <div className={`${on === 0 ? [styles.off] : [styles.on]}`}>
          <Fillter
            off={setDisplay}
            value={(e) => setValue(parseInt(e.target.value))}
          />
          {/* {modal.component}s */}
        </div>
      </div>
      <div className={styles.Topbar}>
        <Topbar />
      </div>
      <div className={styles.content}>
        <div className={styles.Title}>Danh sách vé</div>
        <div className={styles.fill}>
          <input placeholder="Tìm bằng số vé" />
          <div className={styles.loupe}>
            <img src={window.location.origin + "/Img/loupe_1.png"} alt="..." />
          </div>
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
            <th></th>
          </tr>
          {filter?.map((item) => [
            <tr key={manage.id}>
              <td>
                <p className={fonts.medium_14}>{item.Order}</p>
              </td>
              <td>
                <p className={fonts.medium_14}>{item.Booking}</p>
              </td>
              <td>
                <p className={fonts.medium_14}>{item.Number}</p>
              </td>
              <td>
                <p>{styleUsed(item.Used)}</p>
              </td>
              <td>
                <p className={fonts.medium_14}>{item.Start_date}</p>
              </td>
              <td>
                <p className={fonts.medium_14}>{item.End_date}</p>
              </td>
              <td>
                <p className={fonts.medium_14}>{item.Gate}</p>
              </td>
              <td className={styles.change} onClick={() => activeChange(item)}>
                <div className={styles.colDotted}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className={styles.option}>
                  <span className={fonts.medium_14}>Sử dụng vé</span>
                  <span className={fonts.medium_14}>Đổi ngày sử dụng</span>
                </div>
              </td>
            </tr>,
          ])}
        </table>
      </div>
    </div>
  );
}

export default Manage;
