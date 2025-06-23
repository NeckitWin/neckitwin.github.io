import { useState } from "react";
import MoonIcon from "@/assets/moon.svg?react";
import SunIcon from "@/assets/sun.svg?react";

interface NavbarProps {
  bgs: string[];
  currentBg: string;
  setCurrentBg: (img: string) => void;
}

const Navbar = ({ bgs, currentBg, setCurrentBg }: NavbarProps) => {
  const [dark, setDark] = useState<boolean>(false)

  const setNextImage = () => {
    const currIndex: number = bgs.findIndex(bg => bg === currentBg);
    const nextIndex: number = currIndex + 1 >= bgs.length ? 0 : currIndex + 1;
    setCurrentBg(bgs[nextIndex])
  }

  const changeTheme = () => {
    setDark(prev => {
      const newDark = !prev;
      if (newDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newDark;
    });
  }

  return (
    <nav className="rounded-2xl w-max dark:bg-neutral-900/40 bg-neutral-50/40 dark:text-neutral-50 text-neutral-900 mx-auto backdrop-blur-xs duration-300">
      <ul className="flex text-center justify-center gap-4 items-center font-medium py-2 px-4">
        <li>
          <button className="">Resume</button>
        </li>
        <li>
          <button className="">Experience</button>
        </li>
        <li className="flex items-center justify-center gap-2">
          <button onClick={changeTheme} className="flex items-center justify-center">
            {dark ?
              <MoonIcon width={30} height={30} className="text-neutral-50 duration-200 active:rotate-360" /> :
              <SunIcon width={30} height={30} className="text-neutral-900 duration-200 active:rotate-360" />}
          </button>
          <button onClick={setNextImage}>
            <img src={currentBg} alt="background" className="w-7 h-7 rounded-full"  />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;