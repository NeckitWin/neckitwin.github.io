import Card, { type CardProps } from "../ui/card";
import CenterBox from "../components/centerBox";
import { content } from "../lib/constants/content";
import GithubIcon from "../ui/icons/githubIcon";
import InternetIcon from "../ui/icons/internetIcon";

const projectList: CardProps[] = [
    {
        imageSrc: "bgAnima.png",
        title: "Anima - Discord Bot",
        description: "A multifunctional Discord bot with features like AI chat and more.",
        buttons: [
            { icon: <InternetIcon className="fill-white dark:fill-black" />, link: "https://anima-bot.vercel.app/" },
            { icon: <GithubIcon className="fill-white dark:fill-black" />, link: "https://github.com/NeckitWin/Anima-DiscordBot" },
        ]
    },
]

const Projects = () => {
    return (
        <CenterBox>
            <section className="text-white dark:text-black">
                <h3 className="font-bold text-5xl text-center">{content.navigation.projects}</h3>
                <p className="text-neutral-300 dark:text-neutral-800 text-center mt-4">{content.projects.description}</p>
                <ul className="flex flex-wrap gap-8 justify-center mt-8">
                    {projectList.map((project) => (
                        <li className="basis-[30%]" key={project.title}><Card {...project} className="md:w-[400px] min-w-[320px]" /></li>
                    ))}
                </ul>
            </section>
        </CenterBox>
    )
}

export default Projects;