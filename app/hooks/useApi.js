import { useState } from "react";

const useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...params) => {
        setLoading(true);
        const response = await apiFunc(...params);
        setLoading(false);

        setError(!response.ok);
        setData(response.data);

        if (!response.ok) return response;

        return response;
    };

    return { data, error, loading, request };
};

export default useApi;
