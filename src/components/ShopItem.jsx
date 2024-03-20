import { Link } from "react-router-dom";
import styles from "../styles/ShopItem.module.css";
import { appIcons } from "../data/appIcons.barrel";
import PriceTag from "./PriceTag";

export default function ShopItem({ image, title, price, id, inCart })
{
    return (
        <Link id={"shopItem" + id} to={"/shop/" + id} className={styles["shop-item"]}>
            <img id="shopItemThumb" src={image} alt={title + " image"} />
            <h2 id="shopItemTitle">{title}</h2>
            <div className={styles["details"]}>
            <PriceTag
                price={price}
            />
                {
                    inCart &&
                    <img className={styles["in-cart"]} src={appIcons.cartFull} alt="item is in cart" />
                }
            </div>
        </Link>
    )
}