import React, { useState } from "react";
import Menubar from "./Menubar";
import "./css index/Dashboard.css";

const Dashboard = () => {
  const [data, setdata] = useState([
    {
      img: "/Img/Ellipse-10.png",
      title: "Số thứ tự đã cấp",
      value: "4221",
      parameter: "32.41%",
    },
    {
      img: "/Img/Ellipse-10-(1).png",
      title: "Số thứ tự đã sử dụng",
      value: "3721",
      parameter: "32.41%",
    },
    {
      img: "/Img/Ellipse-10-(2).png",
      title: "Số thứ tự đang chờ",
      value: "468",
      parameter: "56.41%",
    },
    {
      img: "/Img/Ellipse-10-(3).png",
      title: "Số thứ tự đã bỏ qua",
      value: "32",
      parameter: "22.41%",
    },
  ]);

  const [value, setvalue] = useState("Ngày");

  const handleValue = (e) => {
    setvalue(e.target.value);
  };
  return (
    <div>
      <Menubar />
      
      <div className="Frame-625222">
        {data.map((item) => {
          return (
            <div className="Rectangle-3463117">
              <div className="Group-625207">
                <img
                  src={window.location.origin + item.img}
                  className="Vector"
                />
                <div className="info">
                  <p className="text">{item.title}</p>
                </div>
              </div>
              <div className="two-value">
                <p className="value">{item.value}</p>
                <p className="Rectangle-3463121">{item.parameter}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chart">
        <div>
          <h3 className="Bảng-thống-kê-theo-ngày">
            Bảng thống kê theo {value}
          </h3>
          <p className="month-year">Tháng month/year</p>
        </div>
        <div className="Frame-625193">
          <h4>Xem theo</h4>
          <select value={value} onChange={handleValue} className="dropdown">
            <option value="Ngày">Ngày</option>
            <option value="Tuần">Tuần</option>
            <option value="Tháng">Tháng</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
