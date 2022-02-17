import React from 'react';
import "./css index/Addcomponent.css"

const Addcomponent = (props) => {
    const on = props.on;
    const off = props.off;
    const text = props.text;
    return (
        <div className="add-component" onClick={on}>
            <img src={window.location.origin + "/Img/add-square.png"} alt="..."></img>
            <p className="add-text">{text}</p>
        </div>
    );
}

export default Addcomponent;
