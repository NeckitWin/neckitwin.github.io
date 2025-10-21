import CenterBox from "../components/centerBox";
import { content } from "../lib/constants/content";
import { links } from "../lib/constants/links";
import Avatar from "../ui/avatar";

const Home = () => {
    return (
        <CenterBox>
            <section className="flex md:flex-row flex-col items-center gap-12 flex-wrap justify-center">
                <Avatar size={200} decorationSize={242} src={links.avatar} decoration={links.decoration} />
                <div className="flex flex-col gap-4 md:items-start items-center md:px-0 px-4">
                    <div className="flex md:flex-col md:items-start gap-2 flex-row items-center">
                        <h2 className="md:text-7xl text-[40px] font-medium text-white dark:text-black">{content.home.owner}</h2>
                        <span className="bg-gradient-to-br from-red-200 to-rose-950 text-white px-2 py-0.5 rounded-lg font-medium">{content.home.role}</span>
                    </div>
                    <p className="text-white dark:text-black text-lg">{content.home.description}</p>
                </div>
            </section>
        </CenterBox>
    );
};

export default Home;