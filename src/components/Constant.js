import { getDocs } from "firebase/firestore";
// Kiểm tra hoạt động và kết nối
const checkAct = (item) => {
  if (item == 2) {
    return {
      backgroundColor: "#EC3740",
      height: "18px",
      width: "18px",
      borderRadius: "50%",
    };
  } else {
    return {
      backgroundColor: "#34CD26",
      height: "18px",
      width: "18px",
      borderRadius: "50%",
    };
  }
};
// Kiểm tra độ dài
const checkLenght = (item, tdStyle, settdStyle) => {
  if (item.length > 20) {
    return (
      <>
        <p style={tdStyle} className="td-text service">
          {item}
        </p>
        <p
          onClick={() =>
            settdStyle({ ...tdStyle, display: "flex", height: "auto" })
          }
          className="onclick-text td-text"
        >
          Xem thêm
        </p>
      </>
    );
  } else {
    return <p className="td-text service">{item}</p>;
  }
};
// Lấy data
const getData = async (doc, setData) => {
  const data = await getDocs(doc);
  setData(data.docs.map((item) => ({ ...item.data(), id: item.id })));
};
// Kiểm tra dịch vụ
const checkService = (service) => {
  if (service == 1) {
    return <p className="td-text">Khám tim mạch</p>;
  } else if (service == 2) {
    return <p className="td-text">Khám sản - Phụ khoa</p>;
  } else if (service == 3) {
    return <p className="td-text">Khám răng hàm mặt</p>;
  } else return <p className="td-text">Khám tai mũi họng</p>;
};
// Kiẻm tra hoạt động
const checkActive = (status) => {
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

// Kiểm tra trạng thái
const checkStatus = (status) => {
  if (status == 1) {
    return (
      <>
        <div className="tb-content">
          <div style={checkActive(status)}></div>
          <p className="td-text">Đang chờ</p>
        </div>
      </>
    );
  } else if (status == 2) {
    return (
      <>
        <div className="tb-content">
          <div style={checkActive(status)}></div>
          <p className="td-text">Đã sử dụng</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="tb-content">
        <div style={checkActive(status)}></div>
        <p className="td-text">Bỏ qua</p>
      </div>
    </>
  );
};

export { checkAct, checkLenght, getData, checkService, checkStatus };
