import Section from "../../components/Section.tsx";
import { useState } from "react";
import data from "../data/skills.json";
import { useTranslation } from "react-i18next";
import SkillsContent from "./SkillsContent.tsx";
import SkillsNav from "./SkillsNav.tsx";
const SkillsSection = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState<number>(1);

    const hiddenClass = "opacity-0 -translate-y-2 pointer-events-none hidden absolute md:block";

    const sections = [
        { id: 1, data: data.libs },
        { id: 2, data: data.stack },
        { id: 3, data: data.tech },
        { id: 4, data: data.langs }
    ];

    const buttons = [
        { name: t("libs"), id: 1 },
        { name: t("stack"), id: 2 },
        { name: t("technology"), id: 3 },
        { name: t("languages"), id: 4 }
    ];

    return (
        <>
            <Section>{t("skills")}</Section>
            <section className="my-6 mx-2 text-textColor flex flex-col gap-2.5">
                <SkillsNav activeSection={activeSection} setActiveSection={setActiveSection} buttons={buttons} />

                <div className='relative transition-[height] duration-300'>
                    {sections.map(({id, data}) => (
                        <div key={id} className={`${activeSection === id ? "duration-300 opacity-100 translate-y-0" : `${hiddenClass}`}`}>
                            <SkillsContent data={data}/>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default SkillsSection;
