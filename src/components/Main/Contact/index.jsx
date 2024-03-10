import React from "react";
import "./contact.css";

class Contact extends React.Component {

    render() {
        const {link, img, title, description} = this.props;
        return (
            <a className="contact" href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="contant"/>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </a>
        )
    }
}

export default Contact;