import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {

    const [apiData, setApiData] = useState(false);
    const [loading , setLaoding] = useState(true);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                if (response.status === 200) {
                    setApiData(response?.data?.blog_record);
                }
                setLaoding(false);
            } catch (error) {
                setLaoding(false);
                console.error(error.response);
            }
        }
        fetchData();

    }, [])

    return [apiData , loading];
}

export default useFetchData;