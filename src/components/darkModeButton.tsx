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
        <button className="h-5 w-5 active:rotate-90 transition cursor-pointer" onClick={() => setIsDark(!isDark)}>{isDark ? <MoonIcon className="fill-black stroke-black" /> : <SunIcon className="w-full h-full fill-white stroke-white" />}</button>
    )
}

export default DarkModeButton;