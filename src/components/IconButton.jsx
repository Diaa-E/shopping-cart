import styles from "../styles/IconButton.module.css";

export default function IconButton({ icon, onClick, text, id })
{
    return (
        <button title={text} id={id} className={styles["icon-button"]} onClick={onClick}>
            <img src={icon} alt={text} />
        </button>
    )
}