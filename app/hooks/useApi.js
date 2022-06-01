import { useState } from "react";
import { StyleSheet, View } from "react-native";

const useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...params) => {
        setLoading(true);
        const response = await apiFunc(...params);
        setLoading(false);

        if (!response.ok) return setError(true);

        setError(false);
        setData(response.data);
    };

    return { data, error, loading, request };
};

const styles = StyleSheet.create({
    container: {},
});

export default useApi;
