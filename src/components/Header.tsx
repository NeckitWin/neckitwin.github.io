import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

interface Social {
    title: string;
    link: string;
    icon: string;
}

const ownerName: string = 'Neo'

const socials: Social[] = [
    {
        title: 'Github',
        link: 'https://github.com/NeckitWin',
        icon: 'https://github.githubassets.com/favicons/favicon-dark.png'
    },
    {
        title: 'Telegram',
        link: 'https://t.me/neckitwin',
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png'
    }
]

const langList = [
    {
        img: `https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg`,
        lang: `English`,
        code: `en`
    },
    {
        img: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2560px-Flag_of_Poland.svg.png`,
        lang: `Polski`,
        code: `pl`
    },
    {
        img: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png`,
        lang: `Deutsch`,
        code: `de`
    },
    {
        img: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png`,
        lang: `Українська`,
        code: `ua`
    },
    {
        img: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png`,
        lang: `Русский`,
        code: `ru`
    }
]

const socialButtons = socials.map((social: Social) => (
    <li key={social.title} className='flex items-center transition hover:-translate-y-0.5'>
        <a href={social.link} target='_blank' rel='noreferrer'
           className='bg-primary flex items-center flex-row gap-1 sm:gap-1.5 text-white px-2 py-1.5 rounded-lg shadow-md shadow-primaryDark'>
            <img src={social.icon} alt={social.title} className='sm:w-6 sm:h-6 w-4 h-4'/>
            <span className='font-medium'>{social.title}</span>
        </a>
    </li>
));

const Header = () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lang, setLang] = useState(savedLang);

    const {i18n} = useTranslation();

    const langHandler = (lang: string) => {
        setLang(lang);
        setIsMenuOpen(false);
        localStorage.setItem('lang', lang);
    }

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [i18n, lang])

    return (
        <header
            className='flex justify-between flex-wrap gap-3 py-4 px-5 rounded-xl shadow-md shadow-bgColor bg-bgColor/50'>
            <div className='flex items-center gap-2.5'>
                <img src="https://avatars.githubusercontent.com/u/90260450?v=4" alt="avatar"
                     className='w-10 rounded-full'/>
                <span className={`text-2xl font-bold text-white`}>{ownerName}</span>
            </div>
            <ul className='flex flex-row gap-2.5'>
                <div className='relative'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='flex flex-row text-textColor items-center justify-center bg-bgColor p-2 rounded-xl box-border h-9 gap-1 shadow-md shadow-bgColor'>
                        <img src={langList.find(l => l.code === lang)?.img}
                             alt="english" className='w-6 h-6 rounded-xl p-0.5 object-cover'/>
                        <span>{isMenuOpen ? "▲" : "▼"}</span>
                    </button>
                    <ul className={`${isMenuOpen ? 'absolute' : 'hidden'} bg-bgColor p-4 mt-5 flex flex-col gap-2 rounded-xl w-max`}>
                        {langList.map((lang, index) => (
                            <li key={index} onClick={() => langHandler(lang.code)} className='flex flex-row gap-2 cursor-pointer'>
                                <img src={lang.img} alt={lang.lang} className='w-6 h-6 rounded-xl p-0.5 object-cover'/>
                                <span className='text-textColor'>{lang.lang}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {socialButtons}
            </ul>
        </header>
    )
}

export default Header;