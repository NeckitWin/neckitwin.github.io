export interface SkillItemProps {
    skill: string;
    iconSrc: string;
}

const SkillItem = ({ skill, iconSrc }: SkillItemProps) => {
    return (
        <div className="min-w-24 rounded-xl bg-zinc-900/50 dark:bg-zinc-100/50 backdrop-blur-sm border border-white/10 dark:border-black/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center p-3 group">
            <div className="w-16 h-16 rounded-lg overflow-hidden mb-2 group-hover:rotate-6 transition-transform duration-300">
                <img src={iconSrc} alt={skill} className="w-full h-full object-cover" />
            </div>
            <h5 className="text-sm font-semibold text-white dark:text-black text-center">{skill}</h5>
        </div>
    )
}

export default SkillItem;