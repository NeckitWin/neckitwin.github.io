import {ReactNode} from "react";

interface SectionProps {
    children: ReactNode;
}

const Section = ({children}: SectionProps) => {
    return (
        <div
            className='text-center py-4 px-5 rounded-xl shadow-md shadow-bgColor bg-bgColor/50 text-textColor text-3xl underline underline-offset-8 decoration-primary font-medium m-2'>
            {children}
        </div>
    )
}

export default Section;