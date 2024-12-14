interface Social {
    title: string;
    link: string;
    icon: string;
}

const ownerName: string = 'Neo'

const socials: Social[] = [
    {
        title: 'Github',
        link: 'https://github.com/NeckitWin',
        icon: 'https://github.githubassets.com/favicons/favicon-dark.png'
    },
    {
        title: 'Telegram',
        link: 'https://t.me/neckitwin',
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png'
    },
    {
        title: 'Discord',
        link: 'https://discord.gg/d8kCF4c3t5',
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png'
    }
]

const socialButtons = socials.map((social) => (
    <li key={social.title} className='flex items-center transition hover:-translate-y-0.5'>
        <a href={social.link} target='_blank' rel='noreferrer'
           className='bg-primary flex flex-row gap-1.5 text-white px-2 py-1.5 rounded-lg shadow-md shadow-primaryDark'>
            <img src={social.icon} alt={social.title} className='w-6'/>
            <span className='font-medium'>{social.title}</span>
        </a>
    </li>
));

function Header() {
    return (
        <header>
            <div
                className='flex justify-between flex-wrap gap-3 py-4 px-5 rounded-xl shadow-md shadow-bgColor bg-bgColor/50'>
                <div className='flex items-center gap-2.5'>
                    <img src="https://avatars.githubusercontent.com/u/90260450?v=4" alt="avatar"
                         className='w-10 rounded-full'/>
                    <span className={`text-2xl font-bold text-white`}>{ownerName}</span>
                </div>
                <ul className='flex flex-row gap-2.5'>
                    {socialButtons}
                </ul>
            </div>
        </header>
    )
}

export default Header;