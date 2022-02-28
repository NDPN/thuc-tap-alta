import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Menubar from "../Menubar/Menubar";
import "./Dashboard.css";
import "./Calendar.css";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Calendar from "react-calendar";

const Dashboard = () => {
  const location = useLocation();

  const [date, setDate] = useState("Ngày");
  const [total, setTotal] = useState({
    Device: [],
    Service: [],
    Number: [],
  });

  // Device active
  let connect = 0;
  let disconnect = 0;
  total.Device.filter((item) =>
    item.connect == 1 ? (connect += 1) : (disconnect += 1)
  );
  // Service active
  let active = 0;
  let unactive = 0;
  total.Service.filter((item) =>
    item.active == 1 ? (active += 1) : (unactive += 1)
  );
  // Number active
  let used = 0;
  let waiting = 0;
  let missed = 0;
  total.Number.filter((item) => {
    if (item.status == 1) {
      waiting += 1;
    } else if (item.status == 2) {
      used += 1;
    } else if (item.status == 3) {
      missed += 1;
    }
  });

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    const { state } = location;
    const { Device, Service, Number } = state;
    setTotal({
      Device: Device,
      Service: Service,
      Number: Number,
    });
  }, []);

  return (
    <div>
      <Menubar />
      <p className="title">Dash board</p>
      <p className="title-2">Biểu đồ cấp số</p>
      {/* 4 card */}
      <div className="Frame-625222">
        {/* Số thứ tự đã cấp */}
        <div className="Rectangle-3463117">
          <div className="Group-625207">
            <img
              src={window.location.origin + "/Img/Frame 624758.png"}
              alt="..."
              className="Vector-img"
            />

            <div className="info">
              <p className="text">Số thứ tự đã cấp</p>
            </div>
          </div>
          <div className="two-value">
            <p className="value">{total?.Number.length}</p>
            <p className="Rectangle-3463121"></p>
          </div>
        </div>
        {/* Số thứ tự đã sử dụng */}
        <div className="Rectangle-3463117">
          <div className="Group-625207">
            <img
              src={window.location.origin + "/Img/Frame 624759.png"}
              alt="..."
              className="Vector-img"
            />
            <div className="info">
              <p className="text">Số thứ tự đã sử dụng</p>
            </div>
          </div>
          <div className="two-value">
            <p className="value">{used}</p>
            <p className="Rectangle-3463121"></p>
          </div>
        </div>
        {/* Số thứ tự đã đang chờ */}
        <div className="Rectangle-3463117">
          <div className="Group-625207">
            <img
              src={window.location.origin + "/Img/Frame 624759 1.png"}
              alt="..."
              className="Vector-img"
            />
            <div className="info">
              <p className="text">Số thứ tự đang chờ</p>
            </div>
          </div>
          <div className="two-value">
            <p className="value">{waiting}</p>
            <p className="Rectangle-3463121"></p>
          </div>
        </div>
        {/* Số thứ tự đã bỏ qua */}
        <div className="Rectangle-3463117">
          <div className="Group-625207">
            <img
              src={window.location.origin + "/Img/Frame 624759 (1).png"}
              alt="..."
              className="Vector-img"
            />

            <div className="info">
              <p className="text">Số thứ tự đã bỏ qua</p>
            </div>
          </div>
          <div className="two-value">
            <p className="value">{missed}</p>
            <p className="Rectangle-3463121"></p>
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="chart">
        <div>
          <h3 className="Bảng-thống-kê-theo-ngày">Bảng thống kê theo {date}</h3>
          <p className="month-year">Tháng month/year</p>
        </div>
        <div className="Frame-625193">
          <h4>Xem theo</h4>
          <select value={date} onChange={handleDate} className="dropdown">
            <option value="Ngày">Ngày</option>
            <option value="Tuần">Tuần</option>
            <option value="Tháng">Tháng</option>
          </select>
        </div>
        <div className="chartLine">
          <Line
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "",
                  data: [12, 19, 3, 5, 2, 3],
                  borderColor: "#5185F7",
                  pointRadius: "0",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
      </div>
      {/* 3 card */}
      <div className="total-card-1">
        <p className="total-2">Tổng quan</p>
        {/* Card  1 */}
        <div className="Frame-625202">
          <div className="Group-625204">
            <p className="total-number">{total?.Device.length}</p>
            <div className="total-number-bottom">
              <img
                className="total-img"
                src={window.location.origin + "/Img/monitor(1).png"}
                alt="..."
              />
              <p className="total-text" style={{ color: "#ff7506" }}>
                Thiết bị
              </p>
            </div>
          </div>
          <div className="Group-625205">
            <div className="unactive">
              <p className="unactive-text">
                <span className="bull" style={{ color: "#FFD130" }}>
                  {"\u2219"}{" "}
                </span>
                Đang hoạt động{" "}
                <p style={{ float: "right", color: "#FF7506" }}>{connect}</p>
              </p>
            </div>
            <div className="unactive">
              <p className="unactive-text">
                <span className="bull" style={{ corlor: "#7E7D88" }}>
                  {"\u2219"}
                </span>
                Ngưng hoạt động{" "}
                <p style={{ float: "right", color: "#FF7506" }}>{disconnect}</p>
              </p>
            </div>
          </div>
        </div>
        {/* Card  2 */}
        <div className="Frame-625202" style={{ top: "251px" }}>
          <div className="Group-625204">
            <p className="total-number">{total?.Service.length}</p>
            <div className="total-number-bottom">
              <img
                className="total-img"
                src={window.location.origin + "/Img/Frame 332.png"}
                alt="..."
              />
              <p className="total-text" style={{ color: "#4277FF" }}>
                Dịch vụ
              </p>
            </div>
          </div>
          <div className="Group-625205">
            <div className="unactive">
              <p className="unactive-text">
                <span className="bull" style={{ corlor: "#4277FF" }}>
                  {"\u2219"}
                </span>
                Đang hoạt động{" "}
                <p style={{ float: "right", color: "#4277FF" }}>{active}</p>
              </p>
            </div>
            <div className="unactive">
              <p className="unactive-text">
                <span className="bull">{"\u2219"}</span>Ngưng hoạt động{" "}
                <p style={{ float: "right", color: "#4277FF" }}>{unactive}</p>
              </p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="Frame-625202" style={{ top: "346px" }}>
          <div className="Group-625204">
            <p className="total-number">{total?.Number.length}</p>
            <div className="total-number-bottom">
              <img
                className="total-img"
                src={window.location.origin + "/Img/fi_layers (1).png"}
                alt="..."
              />
              <p className="total-text" style={{ color: "#35C75A" }}>
                Cấp số
              </p>
            </div>
          </div>
          <div className="Group-625205">
            <div className="unactive">
              <p className="unactive-text">
                <span className="bull" style={{ color: "#35C75A" }}>
                  {"\u2219"}
                </span>
                Đang sử dụng{" "}
                <p style={{ float: "right", color: "#35C75A" }}>{used}</p>
              </p>
            </div>
            <div className="unactive">
              <p className="unactive-text">
                <span className="bull">{"\u2219"}</span>Đang chờ{" "}
                <p style={{ float: "right", color: "#35C75A" }}>{waiting}</p>
              </p>
            </div>
            <div className="unactive">
              <p className="unactive-text">
                <span className="bull" style={{ color: "#F178B6" }}>
                  {"\u2219"}
                </span>
                Bỏ qua{" "}
                <p style={{ float: "right", color: "#35C75A" }}>{missed}</p>
              </p>
            </div>
          </div>
        </div>
        <div className="date-picker">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
