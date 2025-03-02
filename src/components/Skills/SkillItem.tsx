import {SkillItemType} from "../../types/SkillItemType.ts";

interface SkillItemProps {
    item: SkillItemType;
}

const SkillItem = ({item}: SkillItemProps) => {
    return (
        <li key={item.title}
            className="flex flex-col gap-1 justify-around items-center bg-bgColor/50 p-1.5 rounded-lg shadow-md shadow-bgColor w-24">
            <img src={item.icon} alt={item.title} className="w-20 h-20 rounded-3xl object-cover p-3 bg-bgColor"/>
            <div className="flex flex-col items-center">
                <p className="text-sm break-words text-center">{item.title}</p>
                {item.stars !== undefined && <p className="text-xs">{"⭐".repeat(item.stars)}</p>}
            </div>
        </li>
    )
}

export default SkillItem;