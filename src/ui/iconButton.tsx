interface IconButtonProps {
    link: string;
    children: React.ReactNode;
}

const IconButton = ({ link, children }: IconButtonProps) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">{children}</a>
    )
}

export default IconButton;