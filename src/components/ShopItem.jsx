import styles from "../styles/ShopItem.module.css";

export default function ShopItem({ image, title, price })
{
    const splitPrice = price.toString().split(".");

    return (
        <div className={styles["shop-item"]}>
            <img src={image} alt={title + " image"} />
            <h2>{title}</h2>
            <div className={styles["details"]}>
                <p className={styles["new-price"]}>
                    ${splitPrice[0]}
                    <span className={styles["cents"]}>
                        {splitPrice[1] ? splitPrice[1] : "00"}
                    </span>
                </p>
            </div>
        </div>
    )
}