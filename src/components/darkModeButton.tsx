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
        <button className="h-6 w-6" onClick={() => setIsDark(!isDark)}>{isDark ? <MoonIcon className="w-full h-full fill-black stroke-black" /> : <SunIcon className="w-full h-full fill-white stroke-white" />}</button>
    )
}

export default DarkModeButton;