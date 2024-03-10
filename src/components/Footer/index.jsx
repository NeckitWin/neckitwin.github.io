import React from "react";
import "./footer.css";

class Footer extends React.Component{
    render() {
        return(
            <footer>
                <div className="wave"></div>
                <a href="main">About me</a>
            </footer>
        )
    }
}

export default Footer;