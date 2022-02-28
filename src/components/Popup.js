import React from "react";
import style from "../components/css index/popup.module.css";

const Popup = (props) => {
  const number = props.number;
  const service = props.service;
  const checkService = (service) => {
    if (service == 1) {
      return <>Khám tim mạch</>;
    } else if (service == 2) {
      return <>Khám sản - Phụ khoa</>;
    } else if (service == 3) {
      return <>Khám răng hàm mặt</>;
    } else return <>Khám tai mũi họng</>;
  };
  
  const d = new Date();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const day = d.getDay();
  const nextDay = day + 1;
  const month = d.getMonth();
  const year = d.getFullYear();

  return (
    <div className={style.popupCard}>
      <div className={style.popupNumber}>
        <h4 className={style.popup_h4}>Số thứ tự được cấp</h4>
        <h3 className={style.popup_h3}>{number}</h3>
        <p className={style.popupService}>
          DV: {checkService(service)} (tại quầy số 1)
        </p>
      </div>
      <div className={style.popupDate}>
        <div className={style.startDate}>
          <p className={style.p}>Thời gian cấp: </p>
          <p className={style.p}>
            {hour + ":" + minute + " " + day + "/" + month + "/" + year}
          </p>
        </div>
        <div className={style.endDate}>
          <p className={style.p}>Hạn sử dụng: </p>
          <p className={style.p}>
            {hour + ":" + minute + " " + nextDay + "/" + month + "/" + year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
