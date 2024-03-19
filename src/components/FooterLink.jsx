import { Link } from "react-router-dom";
import styles from "../styles/FooterLink.module.css";

export default function FooterLink({ text, to, icon })
{
    return (
        <Link className={styles["footer-link"]} to={to}>
            {
                icon &&
                <img src={icon} alt={text + " link icon"} />
            }
            {text}
        </Link>
    )
}