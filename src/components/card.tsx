import IconButton from "../ui/iconButton";

export interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    buttons?: [{ icon: React.ReactNode; link: string }],
    className?: string;
}

const Card = ({ imageSrc, title, description, buttons, className }: CardProps) => {
    return (
        <div className={className + " border border-white/20 dark:border-black/20 divide-y divide-white/20 dark:divide-black/20 rounded-xl"}>
            <img src={imageSrc} alt={title} className="w-full rounded-t-xl" />
            <div className="rounded-b-xl p-4">
                <h5 className="text-xl">{title}</h5>
                <p>{description}</p>
                {buttons?.length && <div>
                    {buttons?.map((btn) => (
                        <IconButton link={btn.link}>{btn.icon}</IconButton>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Card;