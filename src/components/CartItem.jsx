import { Link } from "react-router-dom";
import styles from "../styles/CartItem.module.css";
import RegularButton from "./RegularButton";
import { addItemToCart, removeItemFromCart } from "../utils/cartUtility";
import { NumberInput } from "./NumberInput";
import { useState } from "react";

export default function CartItem({ item, cart, setCart })
{

    return (
        <Link to={"/shop/" + item.id} className={styles["cart-item-container"]}>
            <img className={styles["thumb"]} src={item.image} alt={item.title} />
            <h2 className={styles["title"]}>{item.title}</h2>
            <p>${+item.price * +item.amount}</p>
            <NumberInput
                id={"orderAmount"}
                max={9999}
                min={1}
                name={"Item quantity"}
                value={item.amount}
                onChange={(e) => {
                    setCart(addItemToCart(cart, {...item, amount: e.target.value}));
                }}
            />
            <RegularButton
                text={"Remove from cart"}
                style="danger"
                onClick={() => {setCart(removeItemFromCart(cart, item))}}
            />
        </Link>
    )
}