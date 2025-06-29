import type { Skill } from "../../types/Skill";

interface ProfileSectionProps {
    title: string;
    skills: Skill[];
}

const ProfileSection = ({ title, skills }: ProfileSectionProps) => {
    return (
        <section>
            <h3 className="dark:text-neutral-50 text-neutral-900 text-lg font-semibold">{title}</h3>
            <div className="flex flex-row flex-wrap gap-2 pt-2 border-t-1  dark:border-neutral-50/30 border-neutral-900/30">
                {skills.map((skill: Skill) => {
                    return (
                        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg w-max ${skill.bgColor}`}>
                            <img src={skill.imgSrc} alt="skill icon" className="w-6 h-6" />
                            <span className="text-neutral-50">{skill.skillName}</span>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default ProfileSection;