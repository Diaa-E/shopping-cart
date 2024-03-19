import { useOutletContext, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import styles from "../styles/ProductDetails.module.css";
import { formatPrice } from "../utils/formatPrice";
import RegularButton from "../components/RegularButton";
import { addItemToCart, createCartItem, removeItemFromCart, searchCart } from "../utils/cartUtility";
import { useState } from "react";
import { NumberInput } from "../components/NumberInput";

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
                {
                    searchCart(cart, selectedProduct.data) === -1 &&
                    <>
                        <NumberInput
                            id={"itemAmount"}
                            name={"item quantity"}
                            min={1}
                            max={9999}
                            value={amount}
                            onChange={(e) => setAmount(+e.target.value < 1 || +e.target.value > 9999 ? 1 : +e.target.value)}
                        />
                        <RegularButton
                            text={"Add to cart"}
                            style="primary"
                            onClick={() => {
                                setCart(addItemToCart(cart, createCartItem(selectedProduct.data, amount)));
                            }}
                        />
                    </>
                }
                {
                    searchCart(cart, selectedProduct.data) > -1 &&
                    <RegularButton
                        text={"Remove from cart"}
                        style="danger"
                        classes={[styles["remove-button"]]}
                        onClick={() => {
                            setCart(removeItemFromCart(cart, selectedProduct.data));
                        }}
                    />
                }
            </div>
        </>
    )
}