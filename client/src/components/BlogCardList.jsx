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
                {data.length > 0 && <h1>Blog List</h1>}
                <b>{data.length} {data.length > 1 ? "blogs" : "blog"} found</b>
                <button className="add-btn"><Link to="/add" className="link">Add New Blog</Link></button>
            </div>
            <div className="blog-container">
                {data.length > 0 ? data.map((blog, index) => (
                    <BlogCard blog={blog} index={index} />
                )) : <p className="blog-empty">
                    No blogs found. <br /> Click on add new blog button to create
                </p>}
            </div>
        </div>
    )
}

export default BlogCardList;