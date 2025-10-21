import { content } from "../lib/constants/content";
import { links } from "../lib/constants/links";
import ContactButton from "../ui/contactButton";
import GithubIcon from "../ui/icons/githubIcon";
import LinkedinIcon from "../ui/icons/linkedinIcon";

const contactLinks = [
    { href: links.github, icon: <GithubIcon className="w-7 h-7 " /> },
    { href: links.linkedin, icon: <LinkedinIcon className="w-7 h-7 " /> }
]

const Footer = () => {
    return (
        <footer className="w-full text-white dark:text-black flex flex-row justify-around items-center py-4 px-12">
            <span className="text-sm text-neutral-300 dark:text-neutral-900">{content.footer.copyright}</span>
            <ul className="flex flex-row gap-6">
                {contactLinks.map((link, index) => (
                    <li key={index}>
                        <ContactButton link={link.href}>{link.icon}</ContactButton>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer;