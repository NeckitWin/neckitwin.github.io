import React from "react";
import "./skill.css";

class Skill extends React.Component {
    render() {
        const {img, title, description} = this.props;
        return (
            <div className="skill">
                <img src={img} alt="icon"/>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        )
    }
}

export default Skill;