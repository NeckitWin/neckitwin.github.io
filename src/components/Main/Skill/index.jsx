import React from "react";
import "./skill.css";

const Skill = ({img, title, description}) => {
    return (
        <div className="skill">
            <img src={img} alt="icon"/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Skill;