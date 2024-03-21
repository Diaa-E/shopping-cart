import { Link, useMatch, useResolvedPath } from "react-router-dom";

import styles from "../styles/NavBar.module.css";

export default function NavBar({ mobileMode })
{
    return (
        <nav>
            <ul className={styles["nav-container"]}>
                <NavItem to={"/shop"} text={"Shop"}/>
                <NavItem to={"/about"} text={"About"}/>
            </ul>
        </nav>
    )
}

function NavItem({to, text})
{
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});
    const classes = [styles["nav-item"], isActive ? styles["active"] : ""];

    return (
        <li>
            <Link className={classes.join(" ")} to={to}>{text}</Link>
        </li>
    )
}