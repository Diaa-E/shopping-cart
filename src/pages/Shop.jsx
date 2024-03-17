import useFetchData from "../hooks/useFetchData";
import { useState, useEffect } from "react";

export default function Shop({})
{
    const products = useFetchData({url: 'https://fakestoreapi.com/products', method: "GET"});

    if (products.loading) return <h1>Loading...</h1>

    if (products.error) return <h1>Error</h1>

    return (
        <>
            <h1>Shop</h1>
            {
                products.data.map(product => {
                    return (
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <img src={product.image} alt="" />
                            <p>{product.id}</p>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                            <p>{product.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}