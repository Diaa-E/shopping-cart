import { Link } from "react-router-dom";
import styles from "../styles/CartItem.module.css";
import RegularButton from "./RegularButton";

export default function CartItem({ item, cart, setCart })
{
    return (
        <Link to={"/shop/" + item.id} className={styles["cart-item-container"]}>
            <img className={styles["thumb"]} src={item.image} alt={item.title} />
            <h2 className={styles["title"]}>{item.title}</h2>
            <p>${+item.price * +item.amount}</p>
            <RegularButton
                text={"Remove from cart"}
                style="danger"
                onClick={() => {}}
            />
        </Link>
    )
}