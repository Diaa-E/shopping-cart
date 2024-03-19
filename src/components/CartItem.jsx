import { Link } from "react-router-dom";
import styles from "../styles/CartItem.module.css";
import RegularButton from "./RegularButton";
import { addItemToCart, removeItemFromCart } from "../utils/cartUtility";
import { NumberInput } from "./NumberInput";
import PriceTag from "./PriceTag";

export default function CartItem({ item, cart, setCart })
{
    return (
        <div className={styles["cart-item-container"]}>
            <img className={styles["thumb"]} src={item.image} alt={item.title} />
            <Link to={"/shop/" + item.id} className={styles["title"]}>{item.title}</Link>
            <PriceTag
                price={+item.price * +item.amount}
            />
            <NumberInput
                id={"orderAmount"}
                max={9999}
                min={1}
                name={"Item quantity"}
                value={item.amount}
                onChange={(e) => {
                    setCart(addItemToCart(cart, {...item, amount: +e.target.value < 1 || +e.target.value > 9999 ? 1 : +e.target.value}));
                }}
            />
            <RegularButton
                text={"Remove from cart"}
                style="danger"
                onClick={() => {setCart(removeItemFromCart(cart, item))}}
            />
        </div>
    )
}