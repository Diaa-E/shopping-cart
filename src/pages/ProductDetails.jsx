import { useOutletContext, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import styles from "../styles/ProductDetails.module.css";
import RegularButton from "../components/RegularButton";
import { addItemToCart, createCartItem, removeItemFromCart, searchCart } from "../utils/cartUtility";
import { useEffect, useState } from "react";
import { NumberInput } from "../components/NumberInput";
import PriceTag from "../components/PriceTag";

export default function ProductDetails({})
{
    const [cart, setCart] = useOutletContext().cart;
    const products = useOutletContext().products;
    const [amount, setAmount] = useState(1);
    const { productId } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(products.find(item => item.id.toString() === productId.toString()));

    useEffect(() => {

        setSelectedProduct(products.find(item => item.id.toString() === productId.toString()));
        
    }, [productId]);

    return (
        <>
            <div className={styles["product-details-container"]}>
                <img src={selectedProduct.image} alt={selectedProduct.title} />
                <div className={styles["details"]}>
                    <h1>{selectedProduct.title}</h1>
                    <p>{selectedProduct.description}</p>
                    <PriceTag
                        price={selectedProduct.price}
                        wholeClasses={[styles["price"]]}
                        fractionClasses={[styles["price-fraction"]]}
                    />
                </div>
                {
                    searchCart(cart, selectedProduct) === -1 &&
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
                                setCart(addItemToCart(cart, createCartItem(selectedProduct, amount)));
                            }}
                        />
                    </>
                }
                {
                    searchCart(cart, selectedProduct) > -1 &&
                    <RegularButton
                        text={"Remove from cart"}
                        style="danger"
                        classes={[styles["remove-button"]]}
                        onClick={() => {
                            setCart(removeItemFromCart(cart, selectedProduct));
                        }}
                    />
                }
            </div>
        </>
    )
}