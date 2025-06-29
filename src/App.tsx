import { useState } from "react";
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume";


const App = () => {
  const bgs: string[] = [
  'https://wallpapers-clan.com/wp-content/uploads/2024/03/starfall-night-sky-mountains-aesthetic-gif-preview-desktop-wallpaper.gif',
  'https://www.purestorage.com/content/dam/purestorage/online-assets/graphics/pure1-bento-bg.gif.imgo.jpg',
]

  const [currentBg, setCurrentBg] = useState<string>(bgs[0]);
  
  return (
    <div style={{ backgroundImage: `url(${currentBg})` }} className="h-screen bg-cover bg-center duration-200">
      <header className="py-8">
        <Navbar bgs={bgs} currentBg={currentBg} setCurrentBg={setCurrentBg} />
      </header>
      <Resume />
    </div>
  )
}

export default App;
