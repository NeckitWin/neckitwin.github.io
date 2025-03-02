interface SkillNavProps {
    activeSection: number;
    setActiveSection: (id: number) => void;
    buttons: { name: string; id: number }[];
}

const SkillsNav = ({ activeSection, setActiveSection, buttons }: SkillNavProps) => {
    return (
        <nav className='flex flex-row gap-1.5 w-full bg-bgColor/50 rounded-2xl p-1.5 flex-wrap sm:flex-nowrap'>
            {buttons.map((button) => (
                <button
                    key={button.id}
                    className={`py-2 w-full rounded-xl transition 
                    ${activeSection === button.id ? 'bg-gradient-to-br from-primary to-primaryDark shadow-md shadow-primaryDark' : 'hover:bg-neutral-800'}`}
                    onClick={() => setActiveSection(button.id)}>
                    {button.name}
                </button>
            ))}
        </nav>
    );
};

export default SkillsNav;