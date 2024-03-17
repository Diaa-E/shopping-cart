import { useEffect, useState } from "react";
import ShopItem from "../components/ShopItem";
import useFetchData from "../hooks/useFetchData";

import styles from "../styles/Shop.module.css";
import { extractCategories } from "../utils/extractCategories";
import SelectInput from "../components/SelectInput";
import { filterProducts } from "../utils/filterProducts";

export default function Shop({})
{
    const products = useFetchData({url: 'https://fakestoreapi.com/products', method: "GET"});
    const categories = products.data ? extractCategories(products.data) : [];
    const [selectedCat, setSelectedCat] = useState("");
    const [filteredCat, setFilteredCat] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {

        if (products.data)
        {
            setSelectedCat(categories[0].value);
            setFilteredCat(products.data);
            setResults(products.data);
        }

    }, [products.data]);

    useEffect(() => {

        if (products.data)
        {
            setFilteredCat(filterProducts(products.data, selectedCat));
        }

    }, [selectedCat]);

    if (products.loading) return <h1>Loading...</h1>

    if (products.error) return <h1>Error</h1>

    return (
        <>
            <div className={styles["controls-container"]}>
            
                <SelectInput
                    id={"selectCategory"}
                    name={"Select product category"}
                    selected={selectedCat}
                    options={categories}
                    onChange={(e) => {
                        setSelectedCat(e.target.value);
                    }}
                />
            </div>
            <div className={styles["items-container"]}>
            {
                filteredCat.map(item => {
                    
                    return <ShopItem
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                id={item.id}
                             />
                })
            }
            </div>
        </>
    )
}