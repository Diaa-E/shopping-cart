import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ query, onChange, id, name })
{
    return (
        <input
            className={styles["search-bar"]}
            placeholder="Search..."
            type="search"
            onChange={onChange}
            value={query}
            id={id}
            name={name}
        />
    )
}