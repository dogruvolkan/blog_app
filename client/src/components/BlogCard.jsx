import React from "react";
import "../assets/BlogCard.css"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function BlogCard({ blog, index }) {
    return (

        <div key={index} className="card">
            <img className="img" src={`https://picsum.photos/${index + 1}00/200`} />
            <div className="content">
                <Link to={`/blog/${blog.id}`}><h5>{blog.title}</h5> </Link>
                <p>{blog.post}</p>
            </div>
            <div className="btns">
                <div>
                    <AiOutlineEdit className="edit-btn" id="btn" />
                </div>
                <div>
                    <AiOutlineDelete className="delete-btn" id="btn" />
                </div>
            </div>
        </div>

    )
}

export default BlogCard;