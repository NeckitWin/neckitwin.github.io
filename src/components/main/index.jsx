import React from "react";
import "./main.css";
import Skill from "./Skill";
import Pimg from "./Pimg";
import Contact from "./Contact";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                {
                    img: "icons/code.png",
                    title: "DEVELOPER",
                    description: "Complete full stack tasks, crafting UI templates."
                }, {
                    img: "icons/owner.png",
                    title: "OWNER PROJECT",
                    description: "Project management, marketing work. Attracting and retaining the audience."
                }, {
                    img: "icons/design.png",
                    title: "DESIGNER",
                    description: "Creating a menu, website template development."
                }
            ],
            bigimg: [
                {
                    img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
                    link: "#"
                }, {
                    img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
                    link: "#"
                }
            ],
            smallimg: [
                {
                    img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
                    link: "#"
                }, {
                    img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
                    link: "#"
                }, {
                    img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
                    link: "#"
                }, {
                    img: "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg",
                    link: "#"
                }
            ],
            experience: [
                {
                    title: "JAVA",
                    description: "Minecraft mods, server support",
                    link: "https://www.java.com/",
                    img: "experience/java.png"
                }, {
                    title: "WEB",
                    description: "HTML, CSS, JS, PHP",
                    link: "https://www.w3schools.com/whatis/",
                    img: "experience/web.png"
                }, {
                    title: "NODE.JS",
                    description: "REACT, VUE, ANGULAR",
                    link: "https://www.w3schools.com/whatis/",
                    img: "experience/node.png"
                }, {
                    title: "DATABASE",
                    description: "Connecting mysql databases & work",
                    link: "https://www.mysql.com/",
                    img: "experience/database.png"
                }, {
                    title: "LINUX",
                    description: "Work with Unbuntu servers",
                    link: "https://www.linux.org/",
                    img: "experience/linux.png"
                }
            ],
            contacts: [
                {
                    img: "contacts/github.png",
                    title: "GITHUB",
                    description: "My open source projects",
                    link: "https://github.com/NeckitWin"
                }, {
                    img: "contacts/discord.png",
                    title: "DISCORD",
                    description: "My discord server or neckitwin#2003",
                    link: "https://discord.gg/btM4yg3jgA"
                }, {
                    img: "contacts/telegram.png",
                    title: "TELEGRAM",
                    description: "Contact with me on telegram",
                    link: "https://t.me/n3ckit"
                }, {
                    img: "contacts/instagram.png",
                    title: "INSTAGRAM",
                    description: "Send me message on instagram",
                    link: "https://www.instagram.com/neckitwin/"
                }
            ]
        }
    }

    render() {
        return (
            <main>
                <div className="skills-bg">
                    {this.state.skills.map((el) => (
                        <Skill key={el.title} img={el.img} title={el.title} description={el.description}/>
                    ))}
                </div>
                <div className="portfolio">
                    <h2>PORTFOLIO</h2>
                    <p>Check out some of my work</p>
                    <div className="portfolio-bimg">
                        {this.state.bigimg.map((el) => (
                            <Pimg img={el.img}/>
                        ))}
                    </div>
                    <div className="portfolio-simg">
                        {this.state.smallimg.map((el) => (
                            <Pimg img={el.img} link={el.link}/>
                        ))}
                    </div>
                    <a href="https://github.com/NeckitWin">SEE MORE</a>
                </div>

                <div className="experience-bg">
                    <h2>MY EXPERIENCE</h2>
                    <p>What I have experience working with</p>
                </div>
                <div className="contacts">
                    {this.state.experience.map((el) => (
                        <Contact key={el.title} img={el.img} title={el.title} description={el.description}
                                 link={el.link}/>
                    ))}
                </div>

                <div className="contact-bg">
                    <h2>CONTACT</h2>
                    <p>Feel free to contact me for any project or collaboration</p>
                </div>
                <div className="contacts">
                    {this.state.contacts.map((el) => (
                        <Contact key={el.title} img={el.img} title={el.title} description={el.description}
                                 link={el.link}/>
                    ))}
                </div>
            </main>
        );
    }
}

export default Main;