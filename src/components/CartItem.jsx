import { Link } from "react-router-dom";
import styles from "../styles/CartItem.module.css";
import RegularButton from "./RegularButton";
import { addItemToCart, removeItemFromCart } from "../utils/cartUtility";
import { NumberInput } from "./NumberInput";
import PriceTag from "./PriceTag";
import { ModalContext } from "../routes/App";
import { useContext } from "react";

export default function CartItem({ item, cart, setCart, closeCart })
{
    const [openModal] = useContext(ModalContext);

    return (
        <div className={styles["cart-item-container"]}>
            <img className={styles["thumb"]} src={item.image} alt={item.title} />
            <Link id="itemTitle" onClick={closeCart} to={"/shop/" + item.id} className={styles["title"]}>{item.title}</Link>
            <div id="itemTotalCost" className={styles["total"]}>
                Total:
                <PriceTag
                    price={+item.price * +item.amount}
                />
            </div>
            <NumberInput
                id={"orderAmount" + item.id}
                max={9999}
                min={1}
                name={"Item quantity"}
                value={item.amount}
                onChange={(e) => {
                    setCart(addItemToCart(cart, {...item, amount: +e.target.value < 1 || +e.target.value > 9999 ? 1 : +e.target.value}));
                }}
            />
            <RegularButton
                id={"removeItemButton"}
                text={"Remove from cart"}
                style="danger"
                onClick={() => {
                    openModal(
                        `Are you sure you want to remove "${item.title}" from cart?`,
                        "Remove item",
                        () => { setCart(removeItemFromCart(cart, item)) }
                    )
                }}
            />
        </div>
    )
}