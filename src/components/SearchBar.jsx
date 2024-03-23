import { appIcons } from "../data/appIcons.barrel";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ query, onChange, id, name })
{
    return (
        <div className={styles["search-bar-container"]}>
            <input
                className={styles["search-bar"]}
                placeholder="Search..."
                type="search"
                onChange={onChange}
                value={query}
                id={id}
                name={name}
            />
            <label htmlFor={id} className={styles["search-icon-container"]}>
                <img className={styles["search-icon"]} src={appIcons.search} alt="search icon" />
            </label>
        </div>
    )
}