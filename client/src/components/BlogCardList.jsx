import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import "../assets/BlogCardList.css";

function BlogCardList(){

    const [apiData, setApiData] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = import.meta.env.VITE_API_URL;
                const response = await axios.get(apiKey);
                if (response.status === 200) {
                    setApiData(response?.data?.blog_records);
                }
            } catch (error) {
                console.error(error.response);
            }
        }
        fetchData();

    }, [])

    return (
        <div className="blog-container">
            {apiData && apiData.map((blog, index) => (
                <BlogCard blog={blog} index={index} />
            ))}
        </div>
    )
}

export default BlogCardList;