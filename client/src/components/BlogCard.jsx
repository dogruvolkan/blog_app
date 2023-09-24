import React, { useEffect, useState } from "react";
import "../assets/BlogCard.css"
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogCard({ blog, index }) {

    const [deleted, setDeleted] = useState(false);

    const handleDelete = async () => {
        try {
            const url = import.meta.env.VITE_API_URL + "/" + blog.id;
            const result = confirm("Are you sure delete this blog")
            if (result) {
                await axios.delete(url);
                setDeleted(true);
                window.location.reload(true);
            }

        } catch (error) {
            console.log(error.response)
        }
    }

    if (deleted) {
        return null;
    }

    const newBlog = blog.post.slice(0, 90)
    console.log("new", newBlog);

    return (
        <div key={index} className="card">
            <img className="img" src={`https://picsum.photos/${index + 1}00/200`} />
            <div className="content">
                <h5 className="blog-title">{blog.title}</h5>
                <p className="blog-content">{newBlog}{blog.post.length > 90 && '...'}</p>
            </div>
            <div className="btns">
                <div>
                    <Link to={`/edit/${blog.id}`}> <AiOutlineEdit className="edit-btn" id="btn" /></Link>
                </div>
                <div>
                    <AiOutlineDelete className="delete-btn" id="btn" onClick={handleDelete} />
                </div>
                <div>
                    <Link to={`/blog/${blog.id}`}>  <AiOutlineEye className="detail-btn" id="btn" /></Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;