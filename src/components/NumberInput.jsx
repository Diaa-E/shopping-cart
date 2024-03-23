import { appIcons } from "../data/appIcons.barrel";
import styles from "../styles/NumberInput.module.css";
import IconButton from "./IconButton";

export function NumberInput({ value, onChange, setValue, max, min, id, name })
{
    return (
    <div className={styles["number-input-container"]}>
        <IconButton
            icon={appIcons.minus}
            id={"minusButton"}
            text={"Reduce quantity by one"}
            classes={[styles["minus-button"]]}
            onClick={() => {setValue(+value === min ? min : value - 1)}}
        />
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
        <IconButton
            icon={appIcons.plus}
            id={"plusButton"}
            text={"Increase quantity by one"}
            onClick={() => {setValue(+value === max ? max : value + 1)}}
        />
    </div>
    )
}