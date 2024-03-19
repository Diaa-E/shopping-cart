import styles from "../styles/Cart.module.css";
import CartItem from "./CartItem";

export default function Cart({ closeCart, cart })
{
    return (
        <div 
            onClick={() => closeCart}
            className={styles["cart-overlay"]}
        >
            <div onClick={e => e.stopPropagation()} className={styles["cart-container"]}>
                <div className={styles["header"]}>
                    <h1>Shopping Cart</h1>
                </div>
                <div className={styles["cart-items"]}>
                {
                    cart.length === 0 &&
                    <h2>Cart is empty.</h2>
                }
                {
                    cart.length > 0 &&
                    (
                        cart.map(item => {

                            return (

                                <CartItem
                                
                                />
                            )
                        })
                    )
                }
                </div>
            </div>
        </div>
    )
}