import { useEffect, useState } from "react";
import ShopItem from "../components/ShopItem";
import useFetchData from "../hooks/useFetchData";

import styles from "../styles/Shop.module.css";
import { extractCategories } from "../utils/extractCategories";
import SelectInput from "../components/SelectInput";
import { filterProducts } from "../utils/filterProducts";
import { sortByPrice, sortByTitle } from "../utils/productSorter";
import SearchBar from "../components/SearchBar";
import { searchCart } from "../utils/cartUtility";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import FetchError from "../components/FetchError";

export default function Shop({})
{
    const { productId } = useParams();
    const [cart, setCart] = useOutletContext().cart;
    const products = useFetchData({url: 'https://fakestoreapi.com/products', method: "GET"});
    const categories = products.data ? extractCategories(products.data) : [];
    const [selectedCat, setSelectedCat] = useState("");
    const [sortMode, setSortMode] = useState("a-z");
    const [filteredCat, setFilteredCat] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const sorters = {
        "a-z": (items) => sortByTitle(items, false),
        "z-a": (items) => sortByTitle(items, true),
        "price-l-h": (items) => sortByPrice(items, false),
        "price-h-l": (items) => sortByPrice(items, true),
    }

    useEffect(() => {

        if (products.data)
        {
            setSelectedCat(categories[0].value);
            setFilteredCat(sorters[sortMode](products.data));
        }

    }, [products.data]);

    useEffect(() => {

        if (products.data)
        {
            setFilteredCat(sorters[sortMode](filterProducts(products.data, selectedCat)));
        }

    }, [selectedCat, sortMode]);

    if (products.loading) return <Loading/>

    if (products.error) return <FetchError errorMessage={products.error.message} />

    if (productId) return <Outlet context={{cart: [cart, setCart], products: products.data}}/>

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
                <SelectInput
                    id={"sortBy"}
                    name={"Sort products"}
                    selected={sortMode}
                    options={[
                        {
                            name: "A-Z", value: "a-z"
                        },
                        {
                            name: "Z-A", value: "z-a"
                        },
                        {
                            name: "Price (Lower first)", value: "price-l-h",
                        },
                        {
                            name: "Price (Higher first)", value: "price-h-l",
                        },
                    ]}
                    onChange={(e) => {
                        setSortMode(e.target.value);
                    }}
                />
                <SearchBar
                    query={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    id={"SearchProducts"}
                    name={"Search products"}
                />
            </div>
            <div className={styles["items-container"]}>
            {
                filteredCat.filter(item => {

                    if (searchQuery === "") return true;

                    return item.title.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery);

                }).map(item => {
                    
                    return <ShopItem
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                id={item.id}
                                inCart={searchCart(cart, item) > -1}
                             />
                })
            }
            </div>
        </>
    )
}