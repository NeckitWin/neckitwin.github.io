import { useState } from "react";
import "./footer.css";
import Link from "./Link";

const Footer = () => {
    const [links] = useState([
        {
            link: "https://boticord.top/bot/429562004399980546+1187466797885182141/pending?ref=anima",
            img: "https://cdn.boticord.top/avatars/1187466797885182141/a_c09e748f5b6ea6f58d69a180f3b84d74_256.webp",
            text: "Anima - my discord bot"
        },
        {
            link: "https://www.linkedin.com/in/mykyta-vinohradov-6008b62b7/",
            img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
            text: "My LinkedIn for job offers"
        }
    ]);
return (
    <footer>
        <div>
            {links.map((el) => (
                <Link key={el.text} img={el.img} text={el.text}
                      link={el.link}/>
            ))}
        </div>
        <img src="img/block.png" alt="block"/>
    </footer>
)

}

export default Footer;