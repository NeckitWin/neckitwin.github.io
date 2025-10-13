import Card, { type CardProps } from "../components/card";
import CenterBox from "../components/centerBox";

const projectList: CardProps[] = [
    {
        imageSrc: "bgAnima.png",
        title: "Anima - Discord Bot",
        description: "A multifunctional Discord bot with features like AI chat and more.",
    },
    {
        imageSrc: "bgAnima.png",
        title: "Anima - Discord Bot",
        description: "A multifunctional Discord bot with features like AI chat and more.",
    },
    {
        imageSrc: "bgAnima.png",
        title: "Anima - Discord Bot",
        description: "A multifunctional Discord bot with features like AI chat and more.",
    },
]

const Projects = () => {
    return (
        <CenterBox>
            <section className="text-white dark:text-black">
                <h3 className="font-bold text-5xl text-center">Projects</h3>
                <p className="text-neutral-300 dark:text-neutral-800 text-center mt-4">Here are some of my notable projects</p>
                <ul className="flex flex-wrap gap-8 justify-center mt-8">
                    {projectList.map((project) => (
                        <li key={project.title}><Card {...project} className="w-[400px]" /></li>
                    ))}
                </ul>
            </section>
        </CenterBox>
    )
}

export default Projects;