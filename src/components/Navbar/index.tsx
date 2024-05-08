import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <header className={s.header}>
            <nav>
                <ul>
                    <li><a href="#">NeckitWin</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar