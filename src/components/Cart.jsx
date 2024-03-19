import { appIcons } from "../data/appIcons.barrel";
import styles from "../styles/Cart.module.css";
import CartItem from "./CartItem";
import IconButton from "./IconButton";
import PriceTag from "./PriceTag";
import RegularButton from "./RegularButton";

export default function Cart({ closeCart, cart, setCart })
{
    return (
        <div 
            onClick={closeCart}
            className={styles["cart-overlay"]}
        >
            <div onClick={e => e.stopPropagation()} className={styles["cart-container"]}>
                <div className={styles["header"]}>
                    <h1 className={styles["title"]}>Shopping Cart {`(${cart.length})`}</h1>
                    <IconButton
                        icon={appIcons.close}
                        id={"closeCart"}
                        text={"Close cart"}
                        onClick={closeCart}
                    />
                </div>
                <div className={styles["cart-items"]}>
                {
                    cart.length === 0 &&
                    <h2 className={styles["empty"]}>Cart is empty.</h2>
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
                        <h3 className={styles["subtotal"]}>
                            Subtotal:
                            <PriceTag
                                price={cart.reduce((total, current) => total + +current.price.toFixed(2) * +current.amount, 0)}
                            />
                        </h3>
                        <div className={styles["cart-controls"]}>
                            <RegularButton
                                text={"Clear cart"}
                                style="danger"
                                onClick={() => {setCart([])}}
                                classes={[styles["clear-cart"]]}
                            />
                            <RegularButton
                                text={"Checkout"}
                                style="primary"
                                onClick={() => {}}
                                classes={[styles["checkout"]]}
                            />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}