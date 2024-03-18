import styles from "../styles/RegularButton.module.css";

export default function RegularButton({ text, onClick, style = "primary" })
{
    return (
        <button onClick={onClick} className={styles[style]}>
            {text}
        </button>
    )
}