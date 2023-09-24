import React, { useEffect, useState } from "react";
import "../assets/BlogCard.css"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
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
            }

        } catch (error) {
            console.log(error.response)
        }
    }

    if (deleted) {
        return null;
    }

    return (
        <div key={index} className="card">
            <img className="img" src={`https://picsum.photos/${index + 1}00/200`} />
            <div className="content">
                <Link to={`/blog/${blog.id}`}><h5>{blog.title}</h5> </Link>
                <p>{blog.post}</p>
            </div>
            <div className="btns">
                <div>
                    <Link to={`/edit/${blog.id}`}> <AiOutlineEdit className="edit-btn" id="btn" /></Link>
                </div>
                <div>
                    <AiOutlineDelete className="delete-btn" id="btn" onClick={handleDelete} />
                </div>
            </div>
        </div>

    )
}

export default BlogCard;