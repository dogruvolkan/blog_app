import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {

    const [apiData, setApiData] = useState(false);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                if (response.status === 200) {
                    setApiData(response?.data?.blog_records);
                }
            } catch (error) {
                console.error(error.response);
            }
        }
        fetchData();

    }, [])

    return apiData;
}

export default useFetchData;