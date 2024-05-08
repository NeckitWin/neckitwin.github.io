import './App.css'
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes} from "react-router-dom";

function App() {

    const routes = [
    ]

  return (
    <BrowserRouter>
        <Navbar />
        <main>
            <Routes>
                {routes.map(
                    (route, index) => (
                        <route.component key={index} path={route.path} />
                    )
                )}
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
