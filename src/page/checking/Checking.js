import React, { useEffect, useState } from "react";
import styles from "./Checking.module.scss";
import fonts from "../../../src/asset/css/Font.module.scss";
import Menubar from "../../component/menu/Menubar";
import Topbar from "../../component/topbar/Topbar";
import { docManage } from "../../service/Firebase";
import CheckingService from "../../service/Checking/Checking";

function Checking() {
  const radioData = [
    {
      name: "Tất cả",
      value: 3,
    },
    {
      name: "Đã đối soát",
      value: 2,
    },
    {
      name: "Chưa đối soát",
      value: 1,
    },
  ];
  const [checking, setChecking] = useState([]);
  const [value, setValue] = useState();
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    getScreendata();
  }, []);

  useEffect(() => {
    setFilter(checking);
  }, [checking]);

  const getScreendata = () => {
    CheckingService.checking(docManage).then((res) => {
      let newData = res.docs.map((item) => ({ ...item.data(), id: item.id }));
      setChecking(newData);
    });
  };

  const filterData = () => {
    setFilter(() => {
      return checking.filter((item) => item.Checked == value);
    });
    if (value == 3) {
      setFilter(checking);
      getScreendata();
    }
  };
  // const passData = () => {
  //   return setChecking(filter);
  // };

  const Checked = (item) => {
    if (item == 1) {
      return (
        <td className={fonts.italic_medium_14} style={{ color: "#A5A8B1" }}>
          Chưa đối soát
        </td>
      );
    } else {
      return (
        <td className={fonts.italic_medium_14} style={{ color: "#FD5959" }}>
          Đã đối soát
        </td>
      );
    }
  };

  const renderTable = () => {
    let xhtml = null;

    xhtml = filter.map((item) => {
      return (
        <tr>
          <td style={{ textAlign: "center" }}>{item.id}</td>
          <td>{item.TicketNumber}</td>
          <td>{item.Name}</td>
          <td>{item.Start_date}</td>
          <td>{item.GateType}</td>
          <td>{item.Gate}</td>
          <td>{Checked(item.Checked)}</td>
        </tr>
      );
    });
    return xhtml;
  };

  const renderRadio = () => {
    let xhtml = null;

    xhtml = radioData.map((item) => {
      return (
        <div>
          <input
            className={styles.radio}
            type="radio"
            name="status"
            value={item.value}
            onChange={(e) => setValue(e.target.value)}
          />
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
              <p style={{ textAlign: "center" }}>STT</p>
            </th>
            <th style={{ width: "10%" }}>
              <p>Số vé</p>
            </th>
            <th style={{ width: "20%" }}>
              <p>Tên sự kiện</p>
            </th>
            <th style={{ width: "11%" }}>
              <p>Ngày sử dụng</p>
            </th>
            <th style={{ width: "7%" }}>
              <p>Tên loại vé</p>
            </th>
            <th style={{ width: "10%" }}>
              <p>Cổng check-in</p>
            </th>
            <th style={{ width: "15%" }}></th>
          </tr>
          {renderTable()}
        </table>
      </div>
      {/* Right content */}
      <div className={styles.contentRight}>
        <div className={fonts.bold_36}>Lọc vé</div>
        <select>
          <option>Hội chợ triển lãm tiêu dùng 2021</option>
        </select>
        <div className={styles.bottomRight}>
          <div className={styles.flexContent}>
            <div className={fonts.semibold_16}>Tình trạng đối soát</div>
            <div>{renderRadio()}</div>
          </div>
          <div className={styles.flexContent}>
            <div className={fonts.semibold_16}>Loại vé</div>
            <div>Vé cổng</div>
          </div>
          <div className={styles.flexContent}>
            <div className={fonts.semibold_16}>Từ ngày</div>
            <input type="date" className={styles.date} />
          </div>
          <div className={styles.flexContent}>
            <div className={fonts.semibold_16}>Đến ngày</div>
            <input type="date" className={styles.date} />
          </div>
          <button
            onClick={() => {
              filterData();
            }}
          >
            <span className={fonts.bold_18}>Lọc</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checking;
