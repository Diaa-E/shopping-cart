import { useEffect, useState } from "react";
import styles from "../styles/MobileNav.module.css";
import IconButton from "./IconButton";
import { appIcons } from "../data/appIcons.barrel";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

export default function MobileNav({ setLockScroll })
{
    const [open, setOpen] = useState(false);

    useEffect(() => {

        open ? setLockScroll(true) : setLockScroll(false);
        
    }, [open])

    return (
        <>
            {
                open &&
                <div id="navBackdrop" onClick={() => setOpen(false)} className={styles["nav-backdrop"]}> 
                    <nav onClick={e => e.stopPropagation()} className={styles["nav-container"]}>
                        <div className={styles["nav-header"]}>
                            <h1 className={styles["nav-title"]}>Go to</h1>
                            <IconButton
                                icon={appIcons.close}
                                id={"closeNavMenu"}
                                onClick={() => setOpen(false)}
                                text={"Close navigation menu"}
                            />
                        </div>
                        <ul className={styles["nav-list"]}>
                            <NavItem onClick={() => setOpen(false)} to={"/shop"} text={"Shop"} />
                            <NavItem onClick={() => setOpen(false)} to={"/about"} text={"About"} />
                        </ul>
                    </nav>
                </div>
            }
            <IconButton
                icon={appIcons.menu}
                id={"navMenu"}
                onClick={() => setOpen(true)}
                text={"open navigation menu"}
            />
        </>
    )
}

function NavItem({to, text, onClick})
{
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});
    const classes = [styles["nav-item"], isActive ? styles["active"] : ""];

    return (
        <li>
            <Link onClick={onClick} className={classes.join(" ")} to={to}>{text}</Link>
        </li>
    )
}