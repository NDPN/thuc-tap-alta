import React, { useState, useEffect } from "react";
import style from "./AddNumber.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Menubar from "../../Menubar/Menubar";
import { data, docNumber } from "../../../../components/firebase";
import { addDoc } from "firebase/firestore";
import PopupComponent from "../../../../components/Popup";
import Popup from "reactjs-popup";

const AddNumber = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { displayName, email } = data[0];
  const d = new Date();
  d.setDate(d.getDate() + 1);

  const [input, setInput] = useState({
    number: Math.floor(Math.random() * 100),
    guest: displayName,
    service: "1",
    start_date: new Date(),
    end_date: new Date(d),
    status: "1",
    source: "Kiosk",
    email: email,
  });
  const [popup, setPopup] = useState(false);

  // function
  const handleAddNumber = async () => {
    await addDoc(docNumber, input);
  };

  useEffect(() => {
    if (!location.state) return navigate(-1);
    const { state } = location;
  }, []);

  return (
    <div>
      <Menubar />
      <div
        style={{
          position: "absolute",
          width: "169px",
          height: "36px",
          left: "224px",
          top: "72px",
        }}
      >
        <h1 className="Title-1">Quản lý cấp số</h1>
      </div>
      <div
        style={{
          position: "absolute",
          width: "1272px",
          height: "556px",
          left: "224px",
          top: "156px",
          background: "#FFFF",
          boxShadow: "2px 2px 8px rgba(232, 239, 244, 0.8)",
          borderRadius: "16px",
        }}
      >
        <div className={style.Group_269841}>
          <h1 className={style.newNumber_h1}>CẤP SỐ MỚI</h1>
          <h3 className={style.newNumber_h3}>Dịch vụ khách hàng lựa chọn</h3>
          <select
            className={style.numberSelect}
            value={input.service}
            onChange={(e) => setInput({ ...input, service: e.target.value })}
          >
            <option value="1">Khám tim mạch</option>
            <option value="2">Khám sản - Phụ khoa</option>
            <option value="3">Khám răng hàm mặt</option>
            <option value="4">Khám tai mũi họng</option>
          </select>
          <div className={style.Btn_Group}>
            <button
              className="Add-btn"
              style={{ background: "rgb(255, 242, 231)", width: "115px" }}
              onClick={() => navigate("/Number")}
            >
              <p
                className="Add-btn-text"
                style={{ color: "rgb(255, 145, 56)" }}
              >
                Hủy bỏ
              </p>
            </button>
            <button
              className="Add-btn"
              style={{
                right: "0",
                background: "rgb(255, 145, 56)",
                width: "115px",
              }}
              onClick={() => {
                handleAddNumber();
                setPopup((popup) => !popup);
              }}
            >
              <p
                className="Add-btn-text"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                In số
              </p>
            </button>
            <Popup
              open={popup}
              closeOnDocumentClick
              onClose={() => setPopup(false)}
            >
              <PopupComponent number={input.number} service={input.service} />
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNumber;
