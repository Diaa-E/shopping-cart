import styles from "../styles/RegularButton.module.css";

export default function RegularButton({ text, onClick, style = "primary", classes = [], id})
{
    return (
        <button id={id} onClick={onClick} className={[styles[style], ...classes].join(" ")}>
            {text}
        </button>
    )
}