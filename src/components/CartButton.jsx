import cartIcon from "../assets/icons/cart.svg";
import styles from "../styles/CartButton.module.css";

export default function CartButton({ cartLength, onClick })
{
    return (
        <button className={styles["cart-button"]} onClick={onClick}>
            <img src={cartIcon} alt="" />
            {
                cartLength > 0 &&
                <div className={styles["count"]}>{cartLength}</div>
            }
        </button>
    )
}