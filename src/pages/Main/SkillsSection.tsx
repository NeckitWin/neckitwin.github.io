import Section from "../../components/Section.tsx";
import { useState, useMemo } from "react";
import data from './skills.json';
import {useTranslation} from "react-i18next";

interface Lang {
    title: string;
    icon: string;
    stars?: number;
}

interface SkillContentProps {
    data: Lang[];
}

const SkillContent = ({ data }: SkillContentProps) => {
    return (
        <ul className="flex flex-wrap gap-4 sm:mx-8">
            {data.map((item) => (
                <li key={item.title} className="flex flex-col gap-1 justify-around items-center bg-bgColor/50 p-1.5 rounded-lg shadow-md shadow-bgColor w-24">
                    <img src={item.icon} alt={item.title} className="w-20 h-20 rounded-3xl object-cover p-3 bg-bgColor" />
                    <div className="flex flex-col items-center">
                        <p className="text-sm break-words text-center">{item.title}</p>
                        {item.stars !== undefined && <p className="text-xs">{"⭐".repeat(item.stars)}</p>}
                    </div>
                </li>
            ))}
        </ul>
    );
};

const SkillsSection = () => {
    const {t} = useTranslation();
    const [activeSection, setActiveSection] = useState<number>(1);

    const activeData = useMemo(() => {
        switch (activeSection) {
            case 1: return data.libs;
            case 2: return data.stack;
            case 3: return data.tech;
            case 4: return data.langs;
            default: return [];
        }
    }, [activeSection]);

    const buttons = [
        { name: t("libs"), id: 1 },
        { name: t("stack"), id: 2 },
        { name: t("technology"), id: 3 },
        { name: t("languages"), id: 4 }
    ];

    return (
        <>
            <Section caption={t("skills")} />
            <section className='my-6 mx-2 text-textColor flex flex-col gap-2.5'>
                <nav className='flex flex-row gap-1.5 w-full bg-bgColor/50 rounded-2xl p-1.5 flex-wrap sm:flex-nowrap'>
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            className={`py-2 w-full rounded-xl transition ${activeSection === button.id ? 'bg-gradient-to-br from-primary to-primaryDark shadow-md shadow-primaryDark' : 'hover:bg-neutral-800'}`}
                            onClick={() => setActiveSection(button.id)}
                        >
                            {button.name}
                        </button>
                    ))}
                </nav>
                <SkillContent data={activeData} />
            </section>
        </>
    );
};

export default SkillsSection;
