import React, { useState, useEffect } from "react";
import style from "./DescNumber.module.css";
import Menubar from "../../Menubar/Menubar";
import Button from "../../../../components/Button";
import { data } from "../../../../components/firebase";
import { useLocation, useNavigate } from "react-router-dom";

const DescNumber = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showData, setshowData] = useState([]);
  console.log(showData)

  const d = new Date();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const day = d.getDay();
  const nextDay = day + 1;
  const month = d.getMonth();
  const year = d.getFullYear();

  // function
  const checkAct = (status) => {
    if (status == 1) {
      return {
        backgroundColor: "#4277FF",
        height: "18px",
        width: "18px",
        borderRadius: "50%",
      };
    } else if (status == 2) {
      return {
        backgroundColor: "#7E7D88",
        height: "18px",
        width: "18px",
        borderRadius: "50%",
      };
    } else {
      return {
        backgroundColor: "#E73F3F",
        height: "18px",
        width: "18px",
        borderRadius: "50%",
      };
    }
  };
  const checkStatus = (status) => {
    if (status == 1) {
      return (
        <>
          <div className={style.descNumber}>
            <div style={checkAct(status)}></div>
            <p className="td-text">Đang chờ</p>
          </div>
        </>
      );
    } else if (status == 2) {
      return (
        <>
          <span className={style.descNumber}>
            <div style={checkAct(status)}></div>
            <p className="td-text">Đã sử dụng</p>
          </span>
        </>
      );
    }
    return (
      <>
        <span className={style.descNumber}>
          <div style={checkAct(status)}></div>
          <p className="td-text">Bỏ qua</p>
        </span>
      </>
    );
  };
  const checkService = (service) => {
    if (service == 1) {
      return (
        <span className="text-desc" style={{ width: "143px" }}>
          Khám tim mạch
        </span>
      );
    } else if (service == 2) {
      return (
        <span className="text-desc" style={{ width: "143px" }}>
          Khám sản - Phụ khoa
        </span>
      );
    } else if (service == 3) {
      return (
        <span className="text-desc" style={{ width: "143px" }}>
          Khám răng hàm mặt
        </span>
      );
    } else
      return (
        <span className="text-desc" style={{ width: "143px" }}>
          Khám tai mũi họng
        </span>
      );
  };

  useEffect(() => {
    if (!location.state) return navigate(-1);
    const { state } = location;
    setshowData(state);
  }, []);
  return (
    <div>
      <Menubar />
      <Button
        on={() => navigate("/Number")}
        text="Quay lại"
        img={window.location.origin + "/Img/back-square.png"}
        top="244px"
      />
      <div
        style={{
          position: "absolute",
          width: "169px",
          height: "36px",
          left: "224px",
          top: "72px",
        }}
      >
        <h1 className="Title-1">Quản lý thiết bị</h1>
      </div>
      <form className="Desc-device">
        <h1 className="Thong-tin-thiet-bi">Thông tin Cấp số</h1>
        <div className="Group-625230" style={{ top: "66px", left: "24px" }}>
          <p className="lable-text-desc">
            Họ tên: <span className="text-desc">{showData?.guest}</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "66px", left: "568px" }}>
          <p className="lable-text-desc">
            Nguồn cấp: <span className="text-desc">{showData?.source}</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "106px", left: "24px" }}>
          <p className="lable-text-desc">
            Tên dịch vụ: {checkService(showData?.service)}
          </p>
        </div>
        {/* status */}
        <div className="Group-625230" style={{ top: "106px", left: "568px" }}>
          <p className="lable-text-desc" style={{ width: "500px" }}>
            Trạng thái: {checkStatus(showData?.status)}
          </p>
        </div>
        <div className="Group-625230" style={{ top: "146px", left: "24px" }}>
          <p className="lable-text-desc">
            Số thứ tự: <span className="text-desc">{showData?.number}</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "146px", left: "568px" }}>
          <p className="lable-text-desc">
            Số điện thoại: <span className="text-desc">test</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "186px", left: "24px" }}>
          <p className="lable-text-desc">
            Thời gian cấp:{" "}
            <span className="text-desc">
              {hour + ":" + minute + " - " + day + "/" + month + "/" + year}
            </span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "186px", left: "568px" }}>
          <p className="lable-text-desc">
            Địa chỉ Email: <span className="text-desc">{showData?.email}</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "226px", left: "24px" }}>
          <p className="lable-text-desc">
            Hạn sử dụng:{" "}
            <span className="text-desc">
              {hour + ":" + minute + " - " + nextDay + "/" + month + "/" + year}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default DescNumber;
