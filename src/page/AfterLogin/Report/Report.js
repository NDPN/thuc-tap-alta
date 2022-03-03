import React, { useState, useEffect } from "react";
import Menubar from "../../AfterLogin/Menubar/Menubar";
import Button from "../../../components/Button";
import { docNumber } from "../../../components/firebase";
import {
  getData,
  checkService,
  checkStatus,
} from "../../../components/Constant";

const Report = () => {
  const [Report, setReport] = useState([]);

  // Date
  const d = new Date();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const day = d.getDay();

  const month = d.getMonth();
  const year = d.getFullYear();

  useEffect(() => {
    getData(docNumber, setReport);
  }, []);
  return (
    <div>
      <Menubar />
      <Button
        img={window.location.origin + "/Img/Document-download.png"}
        text="Tải về"
        top="244px"
      />
      {/* search thời gian */}
      <div className="Group-317" style={{ width: "320px", left: "224px" }}>
        <h3
          className="text"
          style={{
            position: "absolute",
            left: "0.97px",
            top: "0px",
            fontFamily: "Nunito",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Chọn thời gian
        </h3>

        <input
          type="date"
          style={{
            left: "0",
          }}
        />
        <input
          type="date"
          style={{
            right: "0",
          }}
        />
      </div>
      {/* Report talbe */}
      <table>
        <tr>
          <th className="th-text">Số thứ tự</th>
          <th className="th-text">Tên dịch vụ</th>
          <th className="th-text">Thời gian cấp</th>
          <th className="th-text">Tình trạng</th>
          <th className="th-text">Nguồn cấp</th>
        </tr>
        {Report.map((item) => [
          <tr key={item.ID}>
            <td style={{ height: "49px" }}>
              <p className="td-text">{item.number}</p>
            </td>
            <td>{checkService(item.service)}</td>
            <td>
              <p className="td-text">
                {hour + ":" + minute + " - " + day + "/" + month + "/" + year}
              </p>
            </td>
            <td>
              <p className="td-text">{checkStatus(item.status)}</p>
            </td>
            <td>
              <p className="td-text">{item.source}</p>
            </td>
          </tr>,
        ])}
      </table>
    </div>
  );
};

export default Report;
