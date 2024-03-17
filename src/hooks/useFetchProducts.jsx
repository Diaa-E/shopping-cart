import { useEffect, useState } from "react";

export default function useFetchProducts() {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products', { method: "GET", mode: "cors" })
            .then(response => {

                if (!response.ok) throw new Error("Error: " + response.status);

                return response.json();
            })
            .then(responseData => {

                setProducts(responseData);
                setError(null);
            })
            .catch(err => {

                console.error(err);
                setError(err);
                setProducts(null);
            })
            .finally(() => {

                setLoading(false);
            });

    }, []);

    return { products, loading, error };
}