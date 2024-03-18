import { useOutletContext, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import styles from "../styles/ProductDetails.module.css";
import { formatPrice } from "../utils/formatPrice";
import RegularButton from "../components/RegularButton";
import { createCartItem } from "../utils/cartUtility";
import { useState } from "react";

export default function ProductDetails({})
{
    const [cart, setCart] = useOutletContext().cart;
    const [amount, setAmount] = useState(1);
    const { productId } = useParams();
    const selectedProduct = useFetchData({ url: `https://fakestoreapi.com/products/${productId}`, method: "GET"});
    const splitPrice = selectedProduct.data ? formatPrice(selectedProduct.data.price) : [];

    if (selectedProduct.loading) return <h1>Loading...</h1>

    if (selectedProduct.error) return <h1>Error</h1>

    return (
        <>
            <div className={styles["product-details-container"]}>
                <img src={selectedProduct.data.image} alt={selectedProduct.data.title} />
                <div className={styles["details"]}>
                    <h1>{selectedProduct.data.title}</h1>
                    <p>{selectedProduct.data.description}</p>
                    <p id="price" className={styles["price"]}>
                        ${splitPrice[0]}
                        <span id="price-fraction" className={styles["price-fraction"]}>
                            {splitPrice[1]}
                        </span>
                    </p>
                </div>
                <RegularButton
                    text={"Add to cart"}
                    style="primary"
                    onClick={() => setCart([...cart, createCartItem(selectedProduct.data, amount)])}
                />
            </div>
        </>
    )
}