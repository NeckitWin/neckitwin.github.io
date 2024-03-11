import React from "react";
import "./pimg.css";

const Pimg = ({img, link}) => {
    return (
        <a href={link} className="pimg">
            <img src={img} alt="Big project"/>
        </a>
    )
}

export default Pimg;