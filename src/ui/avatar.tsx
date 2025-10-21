interface AvatarProps {
    src: string;
    size: number;
    className?: string;
    decoration?: string;
    decorationSize?: number;
}

const Avatar = ({ src, size = 25, className, decoration, decorationSize }: AvatarProps) => {
    return (
        <div className="bg-cover rounded-full relative bg-center shadow-2xl" style={{
            backgroundImage: `url(${src})`,
            width: size,
            height: size,
        }}>
            <div className={`${className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover`}
                style={{
                    backgroundImage: `url(${decoration})`,
                    width: decorationSize,
                    height: decorationSize,
                }} />
        </div>
    )
}

export default Avatar;