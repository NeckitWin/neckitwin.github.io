import { useState } from 'react';
import './main.css';
import Skill from './Skill';
import Pimg from './Pimg';
import Contact from './Contact';

const Main = () => {
    const [skills] = useState([
        {
            img: "icons/code.png",
            title: "DEVELOPER",
            description: "Full stack, development of graphic interfaces, Working with interactivity and animations."
        },
        {
            img: "icons/owner.png",
            title: "OWNER PROJECT",
            description: "Project management, marketing work. Attracting and retaining the audience."
        },
        {
            img: "icons/design.png",
            title: "DESIGNER",
            description: "Drawing textures, creating user interface, working with 3D models."
        }
    ]);

    const [bigimg] = useState([
        {
            img: "./img/portfolio/gallery.png",
            link: "https://neckitwin.github.io/Gallery/"
        },
        {
            img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
            link: "#"
        }
    ]);

    const [smallimg] = useState([
        {
            img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
            link: "#"
        },
        {
            img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
            link: "#"
        },
        {
            img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
            link: "#"
        },
        {
            img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
            link: "#"
        }
    ]);

    const [experience] = useState([
        {
            title: "JAVA",
            description: "Minecraft mods, server support",
            link: "https://www.java.com/",
            img: "experience/java.png"
        },
        {
            title: "WEB",
            description: "HTML, CSS, JS, PHP",
            link: "https://www.w3schools.com/whatis/",
            img: "experience/web.png"
        },
        {
            title: "NODE.JS",
            description: "REACT, VUE, ANGULAR",
            link: "https://nodejs.org/",
            img: "experience/node.png"
        },
        {
            title: "DATABASE",
            description: "Connecting mysql databases & work",
            link: "https://www.mysql.com/",
            img: "experience/database.png"
        },
        {
            title: "LINUX",
            description: "Work with Unbuntu servers",
            link: "https://www.linux.org/",
            img: "experience/linux.png"
        }
    ]);

    const [contacts] = useState([
        {
            img: "contacts/github.png",
            title: "GITHUB",
            description: "My open source projects",
            link: "https://github.com/NeckitWin"
        },
        {
            img: "contacts/discord.png",
            title: "DISCORD",
            description: "My discord server or neckitwin#2003",
            link: "https://discord.gg/btM4yg3jgA"
        },
        {
            img: "contacts/telegram.png",
            title: "TELEGRAM",
            description: "Contact with me on telegram",
            link: "https://t.me/n3ckit"
        },
        {
            img: "contacts/instagram.png",
            title: "INSTAGRAM",
            description: "Send me message on instagram",
            link: "https://www.instagram.com/neckitwin/"
        }
    ]);

    return (
        <main>
            <div className="skills-bg">

                {skills.map((el) => (
                    <Skill key={el.title} img={el.img} title={el.title} description={el.description}/>
                ))}
            </div>
            <div className="portfolio">
                <h2>PORTFOLIO</h2>
                <p>Check out some of my work</p>
                <div className="portfolio-bimg">
                    {bigimg.map((el) => (
                        <Pimg link={el.link} img={el.img}/>
                    ))}
                </div>
                <div className="portfolio-simg">
                    {smallimg.map((el) => (
                        <Pimg img={el.img} link={el.link}/>
                    ))}
                </div>
                <a href="https://github.com/NeckitWin">SEE MORE</a>
            </div>

            <div className="experience-bg">
                <h2>MY EXPERIENCE</h2>
                <p>What I have experience working with</p>
                <div className="contacts">
                    {experience.map((el) => (
                        <Contact key={el.title} img={el.img} title={el.title} description={el.description}
                                 link={el.link}/>
                    ))}
                </div>
            </div>

            <div className="contact-bg">
                <h2>CONTACT</h2>
                <p>Feel free to contact me for any project or collaboration</p>
                <div className="contacts">
                    {contacts.map((el) => (
                        <Contact key={el.title} img={el.img} title={el.title} description={el.description}
                                 link={el.link}/>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Main;
