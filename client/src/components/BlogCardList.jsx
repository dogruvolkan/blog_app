import BlogCard from "./BlogCard";
import "../assets/BlogCardList.css";
import useFetchData from "../hooks/useFetchData";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";

function BlogCardList() {

    const url = import.meta.env.VITE_API_URL;
    const [data, loading] = useFetchData(url)

    if (loading) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" />
            </div>
        )
    }

    return (
        <div className="blog">
            <div className="blog-header">
                <h1>Blog List</h1>
                <button className="add-btn"><Link to="/add" className="link">Add New Blog</Link></button>
            </div>
            <div className="blog-container">
                {data && data.map((blog, index) => (
                    <BlogCard blog={blog} index={index} />
                ))}
            </div>
        </div>
    )
}

export default BlogCardList;