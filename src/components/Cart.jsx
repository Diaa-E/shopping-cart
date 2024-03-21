import { useContext } from "react";
import { appIcons } from "../data/appIcons.barrel";
import styles from "../styles/Cart.module.css";
import { getSubtotal } from "../utils/subtotal";
import CartItem from "./CartItem";
import IconButton from "./IconButton";
import PriceTag from "./PriceTag";
import RegularButton from "./RegularButton";
import { ModalContext } from "../routes/App";

export default function Cart({ closeCart, cart, setCart })
{
    const [openModal] = useContext(ModalContext);

    return (
        <div 
            id="cartBackdrop"
            onClick={closeCart}
            className={styles["cart-backdrop"]}
        >
            <div id="cart" onClick={e => e.stopPropagation()} className={styles["cart-container"]}>
                <div id="cartHeader" className={styles["header"]}>
                    <h1 id="cartTitle" className={styles["title"]}>Shopping Cart {`(${cart.length})`}</h1>
                    <IconButton
                        icon={appIcons.close}
                        id={"closeCart"}
                        text={"Close cart"}
                        onClick={closeCart}
                    />
                </div>
                <div id="cartItems" className={styles["cart-items"]}>
                {
                    cart.length === 0 &&
                    <h2 id="emptyCart" className={styles["empty"]}>Cart is empty.</h2>
                }
                {
                    cart.length > 0 &&
                    (
                        cart.map(item => {

                            return (

                                <CartItem
                                    key={item.id}
                                    item={item}
                                    cart={cart}
                                    setCart={setCart}
                                    closeCart={closeCart}
                                />
                            )
                        })
                    )
                }
                </div>
                {
                    cart.length > 0 &&
                    <>
                        <h3 id="subtotal" className={styles["subtotal"]}>
                            Subtotal:
                            <PriceTag
                                price={getSubtotal(cart)}
                            />
                        </h3>
                        <div className={styles["cart-controls"]}>
                            <RegularButton
                                text={"Clear cart"}
                                style="danger"
                                onClick={() => {
                                    openModal(
                                        "Are you sure you want to clear all items from cart?",
                                        "Clear cart",
                                        () => setCart([])
                                    );
                                }}
                                classes={[styles["clear-cart"]]}
                                id={"clearCartButton"}
                            />
                            <RegularButton
                                text={"Checkout"}
                                style="primary"
                                onClick={() => {}}
                                classes={[styles["checkout"]]}
                                id={"checkoutButton"}
                            />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}