import React from "react";
import "../css index/Card.css";

const Card = (props) => {
  const text = props.text;
  const item = props.item;
  const img = props.img;
  return (
    <div className="Frame-625202">
      <div className="Group-625204">
        <p className="total-number">{item.length}</p>
        <img className="total-img" src={img} alt="..." />
        <p className="total-text" style={{ color: "#ff7506" }}>
          {text}
        </p>
      </div>
      <div className="Group-625205">
        <div className="active">
          <p className="active-text">
            <span className="bull">{"\u2219"}</span>Đang hoạt động
            <span> 123</span>
          </p>
        </div>
        <div className="unactive">
          <p className="unactive-text">
            <span className="bull">{"\u2219"}</span>Ngưng hoạt động
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
