interface AvatarProps {
    src: string;
    size?: number;
    className?: string;
    decoration?: string;
}

const Avatar = ({ src, size, className, decoration }: AvatarProps) => {
    return (
        <img src={src} alt={decoration} className={`rounded-full ${className}`} style={{
            width: size || 25,
            height: size || 25,
            backgroundImage: `url(${src})`,
        }} />
    )
}

export default Avatar;