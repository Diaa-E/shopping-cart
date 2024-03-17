import styles from "../styles/ShopItem.module.css";
import { formatPrice } from "../utils/formatPrice";

export default function ShopItem({ image, title, price })
{
    const splitPrice = formatPrice(price);

    return (
        <div className={styles["shop-item"]}>
            <img src={image} alt={title + " image"} />
            <h2>{title}</h2>
            <div className={styles["details"]}>
                <p id="price" className={styles["new-price"]}>
                    ${splitPrice[0]}
                    <span id="price-fraction" className={styles["price-fraction"]}>
                        {splitPrice[1]}
                    </span>
                </p>
            </div>
        </div>
    )
}