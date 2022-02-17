// Kiểm tra hoạt động và kết nối
const check = (item) => {
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



export { check };
