import React from "react";
import "./pimg.css";
class Pimg extends React.Component{
    render() {
        const {img, link} = this.props;
        return (
            <a href={link} className="pimg">
                <img src={img} alt="Big project"/>
            </a>
        )
    }
}

export default Pimg;