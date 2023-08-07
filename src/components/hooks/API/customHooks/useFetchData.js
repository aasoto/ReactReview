import { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = (endPoint) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const {data, isLoading} = await fetchData('https://jsonplaceholder.typicode.com', endPoint);
        setData(data);
        setIsLoading(isLoading);
    }

    useEffect(() => {
        getData();
    }, [endPoint]);

    return {
        data,
        isLoading,
    };
}
