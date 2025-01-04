import Section from "../../components/Section.tsx";
import CustomButton from "../../components/CustomButton.tsx";
import SkillsSection from "./SkillsSection.tsx";

const animaLinks = [
    {name: 'Invite', link: 'https://discord.com/oauth2/authorize?client_id=1187466797885182141'},
    {name: 'Support Server', link: 'https://discord.gg/d8kCF4c3t5'},
    {name: 'Website', link: 'https://neckitwin.github.io/Anima/'}
];

function Main() {
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
                <p>I am a full-stack developer, I love coding, learning, and discovering new things. I have experience in website development, bots, business logic, and graphics. I am also studying game and mobile dev.</p>
            </section>
            <Section caption={'Projects'}/>
            <section
                className='my-10 mx-2 text-textColor p-6 rounded-2xl shadow-md bg-gradient-to-br from-pink-600 to-amber-600 shadow-neutral-900'>
                <div className='flex flex-row gap-5 mb-5'>
                    <img src="/discordBot.png" alt="Anima Picture Profile" className='max-w-16 max-h-16 rounded-2xl bg-bgColor/50 p-2'/>
                    <div>
                        <h3>Anima - Discord Bot</h3>
                        <p className='sm:text-base text-sm'>
                            Discord Bot Anima is a bot that can help you with moderation and fun commands. It is a bot
                            that is constantly being updated and improved.
                        </p>
                    </div>
                </div>
                <CustomButton links={animaLinks}/>
            </section>
            <SkillsSection />
        </main>
    )
}

export default Main;