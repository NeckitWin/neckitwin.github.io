import DarkModeButton from "../components/darkModeButton";
import ProfileIcon from "../ui/icons/profileIcon";

const Header = () => {
    
    return (
        <header className="w-full bg-black dark:bg-white text-white dark:text-black">
            <h2>📍Europe/Poland</h2>
            <nav>
                <ul>
                    <li><ProfileIcon className="w-6 h-6 fill-white dark:fill-black" /></li>
                    <li>Projects</li>
                    <li>Stack</li>
                    <li><DarkModeButton /></li>
                </ul>
            </nav>
            <span></span>
        </header>
    )
}

export default Header;