import {SkillItemType} from "../../types/SkillItemType.ts";

interface SkillItemProps {
    item: SkillItemType;
}

const SkillItem = ({item}: SkillItemProps) => {
    return (
        <li key={item.title}
            className="flex flex-col gap-1 justify-around items-center bg-bgColor/50 p-1.5 rounded-lg shadow-md shadow-bgColor md:w-24 w-20">
            <img src={item.icon} alt={item.title} className="md:w-20 md:h-20 h-16 w-16 rounded-3xl object-cover p-3 bg-bgColor"/>
            <div className="flex flex-col items-center">
                <p className="text-xs break-words text-center">{item.title}</p>
                {item.stars !== undefined && <p className="md:text-xs text-[8px]">{"⭐".repeat(item.stars)}</p>}
            </div>
        </li>
    )
}

export default SkillItem;