import type { SkillItemProps } from "../ui/skillItem";
import SkillCard from "../ui/skillItem";

interface SkillsSectionProps {
    title: string;
    skills: SkillItemProps[];
}

const SkillsSection = ({ title, skills }: SkillsSectionProps) => {
    return (
        <div>
            <h4 className="text-xl font-semibold ">{title}</h4>
            <ul className="flex flex-wrap gap-6 mt-2">
                {skills.map((skill) => (
                    <li key={skill.skill+title}><SkillCard {...skill} /></li>
                ))}
            </ul>
        </div>
    )
}

export default SkillsSection;