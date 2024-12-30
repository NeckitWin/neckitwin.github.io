import Section from "../../components/Section.tsx";
import {useState} from "react";
import Langs from './langs.json';

const buttons = [
    {name: 'Languages', id: 1},
    {name: 'Other', id: 2},
]

const SkillsSection = () => {
    const [activeSection, setActiveSection] = useState<number>(1);
    return (
        <>
            <Section caption={'Skills'}/>
            <section className='my-6 mx-2 text-textColor flex flex-col gap-2.5'>
                <nav className='flex flex-row gap-1.5 w-full bg-bgColor/50 rounded-2xl p-1.5'>
                    {buttons.map((button) => (
                        <button key={button.id} className={`py-2 w-full rounded-xl transition
                        ${activeSection == button.id ? 'bg-gradient-to-br from-primary to-primaryDark shadow-md shadow-primaryDark' : 'hover:bg-neutral-800'}`}
                                onClick={() => setActiveSection(button.id)}>
                            {button.name}
                        </button>
                    ))}
                </nav>
                {activeSection == 1 &&
                    <section className='sm:p-6'>
                        <ul className='flex flex-wrap gap-5'>
                            {Langs.map((lang: { title: string, icon: string, stars: number }) => (
                                <li key={lang.title}
                                    className='flex flex-col gap-1 justify-around bg-bgColor/50 p-1.5 rounded-lg shadow-md shadow-bgColor'>
                                    <img src={lang.icon} alt={lang.title} className='w-20 h-20 rounded-full object-cover p-3 bg-bgColor' />
                                    <div className='flex flex-col items-center'>
                                        <p className='text-sm'>{lang.title}</p>
                                        <p className='text-xs'>{"⭐".repeat(lang.stars)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                }
                {activeSection == 2 &&
                    <section>
                        <h3>Other</h3>
                    </section>
                }
            </section>
        </>
    )
}

export default SkillsSection;