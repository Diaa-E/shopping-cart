import { useEffect, useState } from "react";

export default function useFetchData({url, method}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url, { method: method, mode: "cors" })
            .then(response => {

                if (!response.ok) throw new Error("Error: " + response.status);

                return response.json();
            })
            .then(responseData => {

                setData(responseData);
                setError(null);
            })
            .catch(err => {

                console.error(err);
                setError(err);
                setData(null);
            })
            .finally(() => {

                setLoading(false);
            });

    }, []);

    return { data: data, loading: loading, error: error };
}