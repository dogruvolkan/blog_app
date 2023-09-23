import BlogCard from "./BlogCard";
import "../assets/BlogCardList.css";
import useFetchData from "../hooks/useFetchData";
import Spinner from 'react-bootstrap/Spinner';

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
        <div className="blog-container">
            {data && data.map((blog, index) => (
                <BlogCard blog={blog} index={index} />
            ))}
        </div>
    )
}

export default BlogCardList;