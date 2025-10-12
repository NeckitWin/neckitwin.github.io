interface ContactButtonProps {
    children: React.ReactNode;
    link: string;
}

const ContactButton = ({ children, link }: ContactButtonProps) => {
    return (
        <a href={link} className="fill-white dark:fill-black hover:fill-neutral-500 duration-200" target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}

export default ContactButton;