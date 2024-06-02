import s from './Navbar.module.css'
import {useEffect, useState} from "react";
import languages from './language.json';
import {useTranslation} from "react-i18next";
import backgrounds from './backgrounds.json';

const Navbar = () => {
    const { i18n} = useTranslation();
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
    const [background, setBackground] = useState(localStorage.getItem('background') || backgrounds[2]);

    const changeLanguage = async (language: string) => {
        setLanguage(language);
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    }

    useEffect(() => {
        document.body.style.backgroundImage = `url("${background}")`;
        localStorage.setItem('background', background);
    }, [background]);

    const changeBackground = () => setBackground(backgrounds[(backgrounds.indexOf(background) + 1) % backgrounds.length])

    return (
        <header className={s.navbar}>
            <nav>
                <a href="https://github.com/NeckitWin">NeckitWin</a>
                <div className={s.utility}>
                    <img className={s.circle} src={languages.find(l => l.name === language)?.icon} alt={language}/>
                    <ul className={`${s.languages} ${s.visible}`}>
                        {languages.map((language, index) => (
                            <li key={index}>
                                <img src={language.icon} alt={language.name} className={s.circle} onClick={()=>changeLanguage(language.name)}/>
                            </li>
                        ))}
                    </ul>
                    <img onClick={changeBackground} style={{backgroundImage: `url(${background})`}} className={s.circle}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar