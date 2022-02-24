import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menubar from "../../Menubar/Menubar";
import { data, docNumber } from "../../../../components/firebase";
import { addDoc } from "firebase/firestore";
import PopupComponent from "../../../../components/Popup";
import Popup from "reactjs-popup";

const AddNumber = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { displayName } = data[0];
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
  });

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
      <form
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
        <h1>CẤP SỐ MỚI</h1>
        <h3>Dịch vụ khách hàng lựa chọn</h3>
        <select
          value={input.service}
          onChange={(e) => setInput({ ...input, service: e.target.value })}
        >
          <option value="1">Khám tim mạch</option>
          <option value="2">Khám sản - Phụ khoa</option>
          <option value="3">Khám răng hàm mặt</option>
          <option value="4">Khám tai mũi họng</option>
        </select>
        <div>
          <button onClick={() => navigate("/Number")}>Hủy bỏ</button>
          <button
            onClick={() => {
              handleAddNumber();
              navigate("/Number");
            }}
          >
            In số
          </button>
          {/* <Popup trigger={true}>
            <PopupComponent />
          </Popup> */}
        </div>
      </form>
    </div>
  );
};

export default AddNumber;
