import Section from "../../components/Section.tsx";
import { useState, useMemo } from "react";
import data from '../data/skills.json';
import { useTranslation } from "react-i18next";
import SkillsContent from "./SkillsContent.tsx";
import SkillsNav from "./SkillsNav.tsx";

const SkillsSection = () => {
    const { t } = useTranslation();
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
                <SkillsNav activeSection={activeSection} setActiveSection={setActiveSection} buttons={buttons} />
                <SkillsContent data={activeData} />
            </section>
        </>
    );
};

export default SkillsSection;
