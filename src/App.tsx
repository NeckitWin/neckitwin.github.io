import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";

const bgs: string[] = [
  "https://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-25.gif",
  "https://images.squarespace-cdn.com/content/v1/5d7b921aa20ea468a889fb20/1568380647526-YX9J52FU8INU1YFJS65P/njPhhkca.gif",
  "https://i.pinimg.com/originals/be/2a/66/be2a6662f216fe3fa7364d6891977fa1.gif",
]

const App = () => {
  const [currentBg, setCurrentBg] = useState<string>(bgs[0]);

  return (
    <div style={{ backgroundImage: `url(${currentBg})` }} className="h-screen bg-cover bg-center duration-200">
      <header className="py-8">
        <Navbar bgs={bgs} currentBg={currentBg} setCurrentBg={setCurrentBg} />
      </header>
      <ProfileCard />
    </div>
  )
}

export default App;
