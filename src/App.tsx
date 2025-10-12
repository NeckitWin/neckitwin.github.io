import { Route, Routes } from "react-router"
import Footer from "./modules/footer"
import Header from "./modules/header"
import Home from "./views/home"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
