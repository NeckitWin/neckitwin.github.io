import React from "react";
import "./contact.css";

const Contact = ({link, img, title, description}) => {
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

export default Contact;