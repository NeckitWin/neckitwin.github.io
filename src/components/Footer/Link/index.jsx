import "./Link.css";

const Link = ({link, img, text}) => {
    return (
        <a className="footer-link" href={link} target="_blank" rel="noreferrer">
            <img src={img} alt=""/><p>{text}</p>
        </a>
    )
}

export default Link;