import React from 'react';
import Header from "./components/header";
import Main from "./components/main";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;