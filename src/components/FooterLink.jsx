import { Link } from "react-router-dom";
import styles from "../styles/FooterLink.module.css";

export default function FooterLink({ text, to, icon })
{
    return (
        <Link id={text + "Link"} className={styles["footer-link"]} to={to}>
            {
                icon &&
                <img id={text + "LinkIcon"} src={icon} alt={text + " link icon"} />
            }
            {text}
        </Link>
    )
}