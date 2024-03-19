import { Link } from "react-router-dom";
import styles from "../styles/ShopItem.module.css";
import { formatPrice } from "../utils/formatPrice";
import { appIcons } from "../data/appIcons.barrel";

export default function ShopItem({ image, title, price, id, inCart })
{
    const splitPrice = formatPrice(price);

    return (
        <Link to={"/shop/" + id} className={styles["shop-item"]}>
            <img src={image} alt={title + " image"} />
            <h2>{title}</h2>
            <div className={styles["details"]}>
                <p id="price" className={styles["new-price"]}>
                    ${splitPrice[0]}
                    <span id="price-fraction" className={styles["price-fraction"]}>
                        {splitPrice[1]}
                    </span>
                </p>
                {
                    inCart &&
                    <img className={styles["in-cart"]} src={appIcons.cartFull} alt="item is in cart" />
                }
            </div>
        </Link>
    )
}