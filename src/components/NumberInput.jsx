import styles from "../styles/NumberInput.module.css";

export function NumberInput({ value, onChange, max, min, id, name })
{
    return (
        <input
            className={styles["number-input"]}
            name={name}
            id={id}
            min={min}
            max={max}
            type="number"
            value={value}
            onChange={onChange}
        />
    )
}