import ShopItem from "../components/ShopItem";
import useFetchData from "../hooks/useFetchData";

import styles from "../styles/Shop.module.css";

export default function Shop({})
{
    const products = useFetchData({url: 'https://fakestoreapi.com/products', method: "GET"});

    if (products.loading) return <h1>Loading...</h1>

    if (products.error) return <h1>Error</h1>

    return (
        <>
            <div className={styles["items-container"]}>
            {
                products.data.map(item => {
                    
                    return <ShopItem
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                             />
                })
            }
            </div>
        </>
    )
}