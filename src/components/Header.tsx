interface Social {
    title: string;
    link: string;
    icon: string;
}

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

const ownerName: string = 'Neo'

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
                    {socials.map((social) => (
                        <li key={social.title} className='flex items-center transition hover:-translate-y-0.5'>
                            <a href={social.link} target='_blank' rel='noreferrer'
                               className={`bg-primary flex flex-row gap-1.5 text-white px-2 py-1.5 rounded-lg shadow-md shadow-primaryDark`}>
                                <img src={social.icon} alt={social.title} className='w-6'/>
                                <span className='font-medium'>{social.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <section className='my-10 mx-1 text-textColor flex flex-col gap-2'>
                <div className='flex flex-row'>
                    <h1 className='text-2xl font-medium'>Hi, Im Nikita</h1>
                    <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-2 py-1 flex items-center mx-2 mb-2.5 text-xs'>Fullstack</span>
                </div>
                <p>Im a fullstack developer, I love to code and learn new things. I have experience in web development and I am currently learning mobile development.</p>
            </section>
        </header>
    )
}

export default Header;
