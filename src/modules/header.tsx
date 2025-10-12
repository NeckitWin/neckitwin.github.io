import DarkModeButton from "../components/darkModeButton";
import { content } from "../lib/constants/content";
import DevIcon from "../ui/icons/devIcon";
import MenuIcon from "../ui/icons/menuIcon";
import ProfileIcon from "../ui/icons/profileIcon";

const Header = () => {
    return (
        <header className="w-full text-white dark:text-black flex flex-row justify-between items-center sticky py-4 px-12">
            <img src="neckitwin.png" alt="logo" className="h-10 w-10" />
            <nav className="bg-black/80 dark:bg-white/80 border border-white/20 dark:border-black/20 backdrop-blur-md rounded-2xl py-0.5 px-1 shadow-lg">
                <ul className="flex items-center divide-x dark:divide-black/20 divide-white/20 gap-1">
                    <li>
                        <button className="py-2 px-4 cursor-pointer rounded-xl dark:hover:bg-black/5 hover:bg-white/20">
                            <ProfileIcon className="h-4 w-4 fill-white dark:fill-black" />
                        </button>
                    </li>
                    <li>
                        <ul className="flex items-center gap-1">
                            <li className="py-1.5 px-6 cursor-pointer rounded-xl dark:hover:bg-black/5 hover:bg-white/20 text-sm flex gap-1 items-center"><MenuIcon className="fill-white h-4 w-4" /><span>{content.navigation.projects}</span></li>
                            <li className="py-1.5 px-6 cursor-pointer rounded-xl dark:hover:bg-black/5 hover:bg-white/20 text-sm flex gap-1 items-center"><DevIcon className="fill-white h-4 w-4" /><span>{content.navigation.stack}</span></li>
                        </ul>
                    </li>
                    <li className="flex items-center py-1.5 px-4 rounded-xl dark:hover:bg-black/5 hover:bg-white/20"><DarkModeButton /></li>
                </ul>
            </nav>
            <span className="font-medium">📍Europe/Poland</span>
        </header>
    )
}

export default Header;