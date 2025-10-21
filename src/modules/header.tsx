import { Link } from "react-router";
import DarkModeButton from "../components/darkModeButton";
import { content } from "../lib/constants/content";
import DevIcon from "../ui/icons/devIcon";
import MenuIcon from "../ui/icons/menuIcon";
import ProfileIcon from "../ui/icons/profileIcon";

const routes = [
    { path: "projects", icon: <MenuIcon className="fill-white dark:fill-black h-4 w-4" />, label: content.navigation.projects },
    { path: "skills", icon: <DevIcon className="fill-white dark:fill-black h-4 w-4" />, label: content.navigation.skills },
]

const Header = () => {
    return (
        <header className="w-full text-white dark:text-black flex flex-row md:justify-between justify-center items-center md:sticky py-4 md:px-12">
            <span className="w-48 hidden md:block"><img src="neckitwin.png" alt="logo" className="h-10 w-10" /></span>
            <nav className="bg-black/80 dark:bg-white/80 border border-white/20 dark:border-black/20 backdrop-blur-md rounded-2xl py-0.5 px-1 shadow-lg flex">
                <Link to='/' className="py-2 px-4 cursor-pointer rounded-xl dark:hover:bg-black/5 hover:bg-white/20 duration-200">
                    <ProfileIcon className="h-4 w-4 fill-white dark:fill-black" />
                </Link>
                <ul className="flex items-center gap-1">
                    {routes.map((route) => (
                        <li key={route.path}><Link to={route.path} className="py-1.5 px-6 duration-200 cursor-pointer rounded-xl dark:hover:bg-black/5 hover:bg-white/20 text-sm flex gap-1 items-center">{route.icon}<span>{route.label}</span></Link></li>
                    ))}
                </ul>
                <div className="flex items-center py-1.5 px-4 rounded-xl dark:hover:bg-black/5 hover:bg-white/20 cursor-pointer duration-200"><DarkModeButton /></div>
            </nav>
            <span className="font-medium w-48 text-end hidden md:block">{content.header.location}</span>
        </header>
    )
}

export default Header;