import CenterBox from "../components/centerBox"
import { type SkillItemProps } from "../ui/skillItem";
import { content } from "../lib/constants/content";
import SkillsSection from "../components/skillsSection";

const mainStack: SkillItemProps[] = [
    { iconSrc: "icons/react.png", skill: "React" },
    { iconSrc: "icons/redux.png", skill: "Redux" },
    { iconSrc: "icons/ts.png", skill: "TypeScript" },
    { iconSrc: "icons/tailwindcss.png", skill: "Tailwind CSS" },
];

const languages: SkillItemProps[] = [
    { iconSrc: "icons/js.png", skill: "JavaScript" },
    { iconSrc: "icons/ts.png", skill: "TypeScript" },
    { iconSrc: "icons/kotlin.png", skill: "Kotlin" },
    { iconSrc: "icons/java.png", skill: "Java" },
    { iconSrc: "icons/csharp.png", skill: "C#" },
    { iconSrc: "icons/cpp.png", skill: "C++" },
    { iconSrc: "icons/sql.png", skill: "SQL" },
];

const frameworks: SkillItemProps[] = [
    { iconSrc: "icons/next.png", skill: "Next.js" },
    { iconSrc: "icons/react.png", skill: "React" },
    { iconSrc: "icons/vue.png", skill: "Vue.js" },
    { iconSrc: "icons/angular.png", skill: "Angular" },
    { iconSrc: "icons/antd.png", skill: "Ant Design" },
    { iconSrc: "icons/redux.png", skill: "Redux" },
    { iconSrc: "icons/discordjs.png", skill: "Discord.js" },
    { iconSrc: "icons/react.png", skill: "React Router" },
    { iconSrc: "icons/react.png", skill: "R. Hook Form" },
    { iconSrc: "icons/nodejs.png", skill: "Node.js" },
];

const tools: SkillItemProps[] = [
    { iconSrc: "icons/git.png", skill: "Git" },
    { iconSrc: "icons/vscode.png", skill: "VSCode" },
    { iconSrc: "icons/vs.png", skill: "Visual Studio" },
    { iconSrc: "icons/github.png", skill: "GitHub" },
    { iconSrc: "icons/gitlab.png", skill: "GitLab" },
    { iconSrc: "icons/docker.png", skill: "Docker" },
    { iconSrc: "icons/jira.png", skill: "Jira" },
    { iconSrc: "icons/figma.png", skill: "Figma" },
    { iconSrc: "icons/photoshop.png", skill: "Photoshop" },
    { iconSrc: "icons/premiere.png", skill: "Premiere" },
    { iconSrc: "icons/dbeaver.png", skill: "DBeaver" },
];

const Skills = () => {
    return (
        <CenterBox>
            <section className="text-white dark:text-black">
                <h3 className="font-bold text-5xl text-center">{content.navigation.skills}</h3>
                <p className="text-neutral-300 dark:text-neutral-800 text-center mt-4">{content.skills.description}</p>
                <div className="flex flex-col gap-4 mt-4">
                    <SkillsSection title="Main Stack" skills={mainStack} />
                    <SkillsSection title="Languages" skills={languages} />
                    <SkillsSection title="Frameworks & libs" skills={frameworks} />
                    <SkillsSection title="Tools" skills={tools} />
                </div>
            </section>
        </CenterBox>
    )
}

export default Skills;