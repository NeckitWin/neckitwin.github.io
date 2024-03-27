import './main.css';
import Skill from './Skill';
import Pimg from './Pimg';
import Contact from './Contact';
import data from './../../data'

const Main = () => {
    return (
        <main>
            <div className="skills-bg">

                {data[0].skills.map((el, index) => (
                    <Skill key={index} img={el.img} title={el.title} description={el.description}/>
                ))}
            </div>
            <div className="portfolio">
                <h2>PORTFOLIO</h2>
                <p>Check out some of my work</p>
                <div className="portfolio-bimg">
                    {data[0].bigimg.map((el, index) => (
                        <Pimg key={index} link={el.link} img={el.img}/>
                    ))}
                </div>
                <div className="portfolio-simg">
                    {data[0].smallimg.map((el, index) => (
                        <Pimg key={index} img={el.img} link={el.link}/>
                    ))}
                </div>
                <a href="https://github.com/NeckitWin">SEE MORE</a>
            </div>

            <div className="experience-bg">
                <h2>MY EXPERIENCE</h2>
                <p>What I have experience working with</p>
                <div className="contacts">
                    {data[0].experience.map((el, index) => (
                        <Contact key={index} img={el.img} title={el.title} description={el.description}
                                 link={el.link}/>
                    ))}
                </div>
            </div>

            <div className="contact-bg">
                <h2>CONTACT</h2>
                <p>Feel free to contact me for any project or collaboration</p>
                <div className="contacts">
                    {data[0].contacts.map((el, index) => (
                        <Contact key={index} img={el.img} title={el.title} description={el.description}
                                 link={el.link}/>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Main;
