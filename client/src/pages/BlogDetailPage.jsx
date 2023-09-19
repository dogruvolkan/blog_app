import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogDetailPage() {

    const [apiData, setApiData] = useState(false);

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = import.meta.env.VITE_API_URL + "/" + id;
                console.log(apiKey)
                const response = await axios.get(apiKey);
                if (response.status === 200) {
                    setApiData(response?.data?.blog_record);
                }
            } catch (error) {
                console.error(error.response);
            }
        }
        fetchData();

    }, [])

    console.log(apiData)

    return (
        <>
            {apiData.title}
        </>
    )
}