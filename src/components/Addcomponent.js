import React from 'react';
import "./css index/Addcomponent.css"

const Addcomponent = (props) => {
    const on = props.on;
    return (
        <div className="add-component" onClick={on}>
            <img src={window.location.origin + "/Img/add-square.png"} alt="..."></img>
            <p className="add-text">Thêm thiết bị</p>
        </div>
    );
}

export default Addcomponent;
