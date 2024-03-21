import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
import errorLogo from "../assets/images/logo_error.svg";
import styles from "../styles/Error.module.css";

export default function Error({})
{
    const error = useRouteError();
    console.error(error.status + ": " + error.statusText);
    return (
        <div className={styles["error-container"]}>
            <img className={styles["error-logo"]} src={errorLogo} alt="" />
            <div className={styles["error-text"]}>
                <h1 className={styles["error-number"]}>{error.status}</h1>
                <h2 className={styles["error-title"]}>{error.statusText}</h2>
            </div>
            <Link className={styles["home-link"]} to={"/"}>Home</Link>
        </div>
    )
}