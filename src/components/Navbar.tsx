import { useState } from "react";

interface NavbarProps {
  bgs: string[];
  currentBg: string;
  setCurrentBg: (img: string) => void;
}

const Navbar = ({bgs, currentBg, setCurrentBg}: NavbarProps) => {
  const [dark, setDark] = useState<boolean>(true)

  const currIndex:number = bgs.findIndex(bg=>bg===currentBg);
  const nextIndex: number = currIndex+1 >= bgs.length ? 0 : currIndex+1;

  const setNextImage = () => {
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
    <nav className="w-[500px] rounded-2xl bg-neutral-900/80 mx-auto">
      <ul className="flex text-center justify-center items-center dark:text-white/90 text-black font-bold">
          <li className="w-full">
              <button className="">Resume</button>
          </li>
          <li className="w-full">
              <button className="">Experience</button>
          </li>
          <li className="w-full">
              <button className="" onClick={changeTheme}>{dark ? 'dark' : 'white'}</button>
          </li>
          <li className="w-full">
              <button style={{backgroundImage: `url("${currentBg}")`}} className="w-8 h-8 m-2 rounded-full" onClick={setNextImage}></button>
          </li>
      </ul>
  </nav>
  )
}

export default Navbar;