import { Route, Routes } from "react-router"
import Footer from "./modules/footer"
import Header from "./modules/header"
import Home from "./views/home"
import Projects from "./views/projects"
import Skills from "./views/skills"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-neutral-200 bg-black/[96%] duration-300">
      <Header />
      <main className="flex flex-1 w-full">
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;