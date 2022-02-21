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

export { checkAct, checkLenght };
