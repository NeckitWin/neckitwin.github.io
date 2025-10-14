interface IconButtonProps {
    link: string;
    children: React.ReactNode;
}

const IconButton = ({ link, children }: IconButtonProps) => {
    return (
        <a
            className="h-10 w-10 p-2 bg-gradient-to-br from-zinc-700 to-zinc-900 dark:from-zinc-300 dark:to-zinc-500 rounded-xl flex items-center justify-center shadow shadow-white/25 dark:shadow-black transition hover:-translate-y-0.5"
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    )
}

export default IconButton;