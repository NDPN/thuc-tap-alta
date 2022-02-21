import React from 'react';
import "./css index/Addcomponent.css"

const Addcomponent = (props) => {
    const on = props.on;
    const img = props.img;
    const text = props.text;
    return (
        <div className="add-component" style={{cursor: 'pointer'}} onClick={on}>
            <img src={img} alt="..."></img>
            <p className="add-text">{text}</p>
        </div>
    );
}

export default Addcomponent;
