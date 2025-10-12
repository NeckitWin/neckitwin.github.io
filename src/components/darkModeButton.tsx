import { useEffect, useState } from "react";
import MoonIcon from "../ui/icons/moonIcon";
import SunIcon from "../ui/icons/sunIcon";

const DarkModeButton = () => {
     const [isDark, setIsDark] = useState(() => 
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        const theme = isDark ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [isDark]);

    return (
        <button className="h-4.5 w-4.5 active:rotate-90 transition cursor-pointer" onClick={() => setIsDark(!isDark)}>{isDark ? <MoonIcon className="fill-black stroke-black" /> : <SunIcon className="fill-white stroke-white" />}</button>
    )
}

export default DarkModeButton;