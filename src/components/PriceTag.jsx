import styles from "../styles/PriceTag.module.css";
import { formatPrice } from "../utils/formatPrice";

export default function PriceTag({ price, wholeClasses = [], fractionClasses = [] })
{
    const splitPrice = formatPrice(+price.toFixed(2));

    return (
        <p id="price" className={[styles["price-whole"], ...wholeClasses].join(" ")}>
            ${splitPrice[0]}
            <span id="price-fraction" className={[styles["price-fraction"], ...fractionClasses].join(" ")}>
                {splitPrice[1]}
            </span>
        </p>
    )
}