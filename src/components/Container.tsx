interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={"py-4 px-6 bg-neutral-50/50 dark:bg-neutral-900/60 rounded-2xl backdrop-blur-xl duration-300 " + className}>
            {children}
        </div>
    );
}

export default Container;