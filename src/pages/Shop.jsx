import useFetchProducts from "../hooks/useFetchProducts";
import { useState, useEffect } from "react";

export default function Shop({})
{
    const { products, loading, error } = useFetchProducts();

    if (loading) return <h1>Loading...</h1>

    if (error) return <h1>Error</h1>

    return (
        <>
            <h1>Shop</h1>
            {
                products.map(product => {
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