import cartIcon from "../assets/icons/cart.svg";
import styles from "../styles/CartButton.module.css";

export default function CartButton({ cartLength, onClick })
{
    return (
        <button title="Open Cart" id="cartButton" className={styles["cart-button"]} onClick={onClick}>
            <img id="cartIcon" src={cartIcon} alt="" />
            {
                cartLength > 0 &&
                <div id="cartCount" className={styles["count"]}>{cartLength}</div>
            }
        </button>
    )
}