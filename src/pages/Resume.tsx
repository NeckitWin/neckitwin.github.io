import ProfileCard from "../components/Profile/ProfileCard";

const Resume = () => {
    return (
        <div className="mx-auto w-max flex flex-row gap-4">
            <ProfileCard />

            <div className="p-4 w-max bg-neutral-50/50 dark:bg-neutral-900/50 rounded-2xl backdrop-blur-lg duration-300">
                <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">Resume</h1>
                <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                    This is my resume. It contains my skills, experiences, and education.
                </p>
            </div>
        </div>
    )
}

export default Resume;