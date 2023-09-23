import BlogCard from "./BlogCard";
import "../assets/BlogCardList.css";
import useFetchData from "../hooks/useFetchData";

function BlogCardList(){

    const url = import.meta.env.VITE_API_URL;
    const data = useFetchData(url)

    return (
        <div className="blog-container">
            {data && data.map((blog, index) => (
                <BlogCard blog={blog} index={index} />
            ))}
        </div>
    )
}

export default BlogCardList;