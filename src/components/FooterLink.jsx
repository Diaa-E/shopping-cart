import styles from "../styles/FooterLink.module.css";

export default function FooterLink({ text, to, icon })
{
    return (
        <a target="_blank" className={styles["footer-link"]} href={to}>
            {
                icon &&
                <img src={icon} alt={text + " link icon"} />
            }
            {text}
        </a>
    )
}