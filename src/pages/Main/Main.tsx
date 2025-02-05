import Section from "../../components/Section.tsx";
import CustomButton from "../../components/CustomButton.tsx";
import SkillsSection from "./SkillsSection.tsx";
import {useTranslation} from "react-i18next";

function Main() {
    const {t} = useTranslation();

    const animaLinks = [
        {name: t("invite"), link: 'https://discord.com/oauth2/authorize?client_id=1187466797885182141'},
        {name: t("support"), link: 'https://discord.gg/d8kCF4c3t5'},
        {name: t("website"), link: 'https://neckitwin.github.io/Anima/'}
    ];

    return (
        <main>
            <section className='my-10 mx-2 text-textColor flex flex-col gap-2'>
                <div className='flex flex-row'>
                    <h1 className='text-2xl font-medium'>{t("title")}</h1>
                    <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-2 py-1 flex items-center mx-2 mb-2.5 text-xs h-max'>
                        {t("programmer")}
                    </span>
                </div>
                <p>{t("about")}</p>
            </section>
            <Section caption={t("projects")}/>
            <section
                className='my-10 mx-2 text-textColor p-6 rounded-2xl shadow-md bg-gradient-to-br from-pink-600 to-amber-600 shadow-neutral-900'>
                <div className='flex flex-row gap-5 mb-5'>
                    <img src="/discordBot.png" alt="Anima Picture Profile" className='max-w-16 max-h-16 rounded-2xl bg-bgColor/50 p-2'/>
                    <div>
                        <h3>{t("animaTitle")}</h3>
                        <p className='sm:text-base text-sm'>{t("animaDescription")}</p>
                    </div>
                </div>
                <CustomButton links={animaLinks}/>
            </section>
            <SkillsSection />
        </main>
    )
}

export default Main;