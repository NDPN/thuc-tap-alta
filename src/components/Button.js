import React from 'react';
import "./css index/Addcomponent.css"

const Addcomponent = (props) => {
    const on = props.on;
    const top = props.top;
    const img = props.img;
    const text = props.text;
    return (
        <div className="Button-component" onClick={on} style={{top: top}}>
            <img src={img} alt="..."></img>
            <p className="add-text">{text}</p>
        </div>
    );
}

export default Addcomponent;
