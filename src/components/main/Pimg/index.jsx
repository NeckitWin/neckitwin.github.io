import React from "react";
import "./bimg.css";

class Bimg extends React.Component{
    render() {
        const {img, link} = this.props;
        return (
            <a href={link} className="bimg">
                <img src={img} alt="Big image"/>
            </a>
        )
    }
}

export default Bimg;