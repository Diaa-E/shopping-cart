import styles from "../styles/FetchError.module.css";

export default function FetchError({ errorMessage })
{
    return (
        <div id="errorContainer" className={styles["error-container"]}>
            <h1 id="errorTitle" className={styles["title"]}>Something went wrong!</h1>
            <h2 id="errorMessage" className={styles["error-message"]}>{errorMessage}</h2>
        </div>
    )
}