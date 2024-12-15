interface Links {
    name: string;
    link: string;
}

const CustomButtons: React.FC<{ links: Links[] }> = ({links}) => {
    return (
        <ul className='flex flex-row gap-6'>
            {links.map((link) => (
            <li key={link.name} className='transition hover:-translate-y-0.5'>
                <a href={link.link} rel='noreferrer' target='_blank'
                   className='flex flex-row gap-1.5 text-white px-2 py-1.5 rounded-lg shadow-md bg-neutral-900/50 shadow-neutral-900/90'>
                    {link.name}
                </a>
            </li>
            ))}
        </ul>
    )
};

export default CustomButtons;