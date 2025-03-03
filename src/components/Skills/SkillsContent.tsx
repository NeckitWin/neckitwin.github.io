import SkillItem from "./SkillItem.tsx";
import {SkillItemType} from "../../types/SkillItemType.ts";

interface SkillsContentProps {
    data: SkillItemType[];
}

const SkillsContent = ({data}: SkillsContentProps) => {
    return (
        <ul className="flex flex-wrap items-center justify-center gap-4">
            {data.map((item) => (
                <SkillItem item={item} />
            ))}
        </ul>
    );
};

export default SkillsContent;