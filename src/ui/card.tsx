import IconButton from "./iconButton";

export interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    buttons?: { icon: React.ReactNode; link: string }[],
    className?: string;
}

const Card = ({ imageSrc, title, description, buttons, className }: CardProps) => {
    return (
        <div className={className + " border border-white/20 dark:border-black/20 divide-y divide-white/20 dark:divide-black/20 rounded-xl"}>
            <img src={imageSrc} alt={title} className="w-full rounded-t-xl" />
            <div className="rounded-b-xl p-4 dark:bg-zinc-300">
                <h5 className="text-lg font-semibold">{title}</h5>
                <p className="text-sm">{description}</p>
                {buttons?.length && <div className="flex flex-row justify-self-end gap-4">
                    {buttons?.map((btn, index) => (
                        <IconButton key={index} link={btn.link}>{btn.icon}</IconButton>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Card;