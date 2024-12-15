import Section from "../components/Section.tsx";
import CustomButtons from "../components/CustomButtons.tsx";
import {useState} from "react";

const animaLinks = [
    {name: 'Invite', link: 'https://discord.com/oauth2/authorize?client_id=1187466797885182141'},
    {name: 'Support Server', link: 'https://discord.gg/d8kCF4c3t5'},
    {name: 'Website', link: 'https://neckitwin.github.io/Anima/'}
];

function Main() {
    const [activeSection, setActiveSection] = useState<number>(1)

    return (
        <main>
            <section className='my-10 mx-2 text-textColor flex flex-col gap-2'>
                <div className='flex flex-row'>
                    <h1 className='text-2xl font-medium'>Hi, Im Nikita</h1>
                    <span
                        className='bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-2 py-1 flex items-center mx-2 mb-2.5 text-xs'>
                        Programmer
                    </span>
                </div>
                <p>Im a fullstack developer, I love to code and learn new things. I have experience in web development
                    and I am currently learning mobile development.</p>
            </section>
            <Section caption={'Projects'}/>
            <section
                className='my-10 mx-2 text-textColor p-6 rounded-2xl shadow-md bg-gradient-to-br from-pink-600 to-amber-600 shadow-neutral-900'>
                <div className='flex flex-row gap-5 mb-5'>
                    <img src="/anima.png" alt="Anima" className='max-w-16 max-h-16 rounded-full'/>
                    <div>
                        <h3>Anima</h3>
                        <p>
                            Discord Bot Anima is a bot that can help you with moderation and fun commands. It is a bot
                            that is constantly being updated and improved.
                        </p>
                    </div>
                </div>
                <CustomButtons links={animaLinks}/>
            </section>
            <Section caption={'Skills'}/>
            <section className='my-6 mx-2 text-textColor flex flex-col gap-2.5'>
                <nav className='flex flex-row gap-5'>
                    <button className=''
                        onClick={() => setActiveSection(1)}>Language</button>
                    <button className=''
                        onClick={() => setActiveSection(2)}>Technology</button>
                </nav>
                {activeSection == 1 &&
                    <section className={activeSection == 1 ? 'visible' : 'hidden'}>
                        language
                    </section>
                }
                {activeSection == 2 &&
                    <section className={activeSection == 2 ? 'visible' : 'hidden'}>
                        technology
                    </section>
                }
            </section>
        </main>
    )
}

export default Main;