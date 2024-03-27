import "./footer.css";
import Link from "./Link";
import data from './../../data'

const Footer = () => {

return (
    <footer>
        <div>
            {data[0].links.map((el, index) => (
                <Link key={index} img={el.img} text={el.text}
                      link={el.link}/>
            ))}
        </div>
        <img src="img/block.png" alt="block"/>
    </footer>
)

}

export default Footer;