import type { Skill } from "../../types/Skill";
import Container from "../Container";
import ProfileSection from "./ProfileSection";
const skills: Skill[] = [
    {
        bgColor: "bg-blue-500/50",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        skillName: "React"
    },
    {
        bgColor: "bg-gray-800/50",
        imgSrc: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
        skillName: "Next.js"
    },
    {
        bgColor: "bg-violet-500/50",
        imgSrc: "https://www.svgrepo.com/show/303557/redux-logo.svg",
        skillName: "Redux"
    },
    {
        bgColor: "bg-cyan-500/50",
        imgSrc: "https://www.svgrepo.com/show/374118/tailwind.svg",
        skillName: "Tailwind CSS"
    },
    {// ts
        bgColor: "bg-blue-600/50",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        skillName: "TypeScript"
    },
    {
        bgColor: "bg-yellow-500/50",
        imgSrc: "https://www.svgrepo.com/show/452045/js.svg",
        skillName: "JavaScript"
    },
    {
        bgColor: "bg-gray-700/50",
        imgSrc: "https://www.svgrepo.com/show/452075/node-js.svg",
        skillName: "Node.js"
    }
]

const ProfileCard = () => {
    return (
        <Container className="max-w-[400px]">
            <img src="https://i.pinimg.com/474x/2b/da/51/2bda51ca60cc3b5daaa8e062eb880430.jpg" alt="avatar" width={200} height={200} className="rounded-full mx-auto" />
            <h2 className="text-3xl font-bold text-center mt-4 text-neutral-900 dark:text-neutral-50">NeckitWin</h2>
            <ProfileSection title="Skills" skills={skills} />
        </Container>
    )
}

export default ProfileCard;