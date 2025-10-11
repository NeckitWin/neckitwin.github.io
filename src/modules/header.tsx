import DarkModeButton from "../components/darkModeButton";
import ProfileIcon from "../ui/icons/profileIcon";

const Header = () => {
    return (
        <header className="w-full text-white dark:text-black flex flex-row justify-between items-center sticky p-8">
            <img src="neckitwin.png" alt="logo" className="h-10 w-10" />
            <nav className=" bg-black/80 dark:bg-white/80">
                <ul className="flex gap-4 items-center">
                    <li><ProfileIcon className="w-6 h-6 fill-white dark:fill-black" /></li>
                    <li>Projects</li>
                    <li>Stack</li>
                    <li className="flex items-center"><DarkModeButton /></li>
                </ul>
            </nav>
            <span>📍Europe/Poland</span>
        </header>
    )
}

export default Header;