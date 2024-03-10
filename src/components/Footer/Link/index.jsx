import React from "react";
import "./Link.css";

class Link extends React.Component {
    render() {
        const {link, img, text} = this.props;
        return (
            <a className="footer-link" href={link} target="_blank" rel="noreferrer">
                <img src={img} alt=""/><p>{text}</p>
            </a>
        )
    }
}

export default Link;