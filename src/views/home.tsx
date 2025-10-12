import { links } from "../lib/constants/links";
import Avatar from "../ui/avatar";

const Home = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-row items-center gap-12">
                <Avatar size={200} src={links.avatar} />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-2">
                        <h2 className="text-7xl font-medium text-white dark:text-black">NeckitWin</h2>
                        <span className="bg-gradient-to-br from-red-200 to-rose-950 text-white px-1.5 py-0.5 rounded font-medium">Full Stack Developer</span>
                    </div>
                    <p className="text-white dark:text-black text-lg">Web developer who builds websites, apps and bots.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;