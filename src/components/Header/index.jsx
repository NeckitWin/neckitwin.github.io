import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-content">
            <img src="https://avatars.githubusercontent.com/u/90260450?v=4" alt="avatar"/>
            <h1>NeckitWin</h1>
            <p>Java/JavaScript developer</p>
        </div>
      </header>
    );
  }
}

export default Header;