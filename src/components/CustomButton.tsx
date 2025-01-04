import * as React from "react";

interface Links {
    name: string;
    link: string;
}

interface CustomButtonProps {
    links: Links[];
}

const CustomButton = ({links}:CustomButtonProps): React.ReactNode => {
    return (
        <ul className='flex flex-row gap-6'>
            {links.map((link) => (
            <li key={link.name} className=' transition ease-linear hover:-translate-y-0.5'>
                <a href={link.link} rel='noreferrer' target='_blank'
                   className='text-white px-2 py-1.5 rounded-lg shadow-md bg-neutral-900/50 shadow-neutral-900/90 text-xs sm:text-base'>
                    {link.name}
                </a>
            </li>
            ))}
        </ul>
    )
};

export default CustomButton;