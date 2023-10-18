import "../assets/BlogCreate.css";
import { useForm } from "react-hook-form"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BlogCreate() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const saveForm = async (data) => {

        data.file = data.imgPath[0];
        data.imgPath = null;

        try {
            const url = import.meta.env.VITE_API_URL;
            await axios.post(url, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            toast.success("Ekleme işlemi başarılı!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
            //waiting close toastify
            await new Promise((resolve) => setTimeout(resolve, 2000));
            navigate("/");
        } catch (error) {
            toast.error("Ekleme işlemi başarısız!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
            console.log(error.response)
        }
    }

    return (
        <div className="blog-create-container">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit(saveForm)}>
                <div className="input-area">
                    <label >Blog Title:</label>
                    <input
                        className="create-input"
                        defaultValue="" {...register("title", {
                            required: { value: true, message: "Title is reqired" },
                            minLength: {
                                value: 10,
                                message: "Title should be minium 10 characters"
                            },
                            maxLength: {
                                value: 30,
                                message: "Title should be maximum 30 characters"
                            },
                        })}
                    />
                    {errors.title &&
                        <div className="form-error">
                            {errors.title.message}
                        </div>}
                </div>
                <div className="input-area">
                    <label >Author:</label>
                    <input
                        className="create-input"
                        defaultValue="" {...register("author", {
                            required: { value: true, message: "Author is reqired" },
                            minLength: {
                                value: 5,
                                message: "Author should be minium 5 characters"
                            },
                            maxLength: {
                                value: 20,
                                message: "Author should be maximum 20 characters"
                            },
                        })}
                    />
                    {errors.author &&
                        <div className="form-error">
                            {errors.author.message}
                        </div>}
                </div>
                <div className="input-area">
                    <label>Blog Category</label>
                    <select className="create-select" name="" id="" {...register("category", {
                        required: { value: true, message: "Blog category is required" }
                    })}>
                        <option value="html5">Html5</option>
                        <option value="css3">Css3</option>
                        <option value="javascript">Javascript</option>
                    </select>
                    {errors.post &&
                        <div className="form-error">
                            {errors.post.category}
                        </div>}
                </div>
                <div className="input-area">
                    <label >Blog Content:</label>
                    <textarea
                        rows="8"
                        className="create-input"
                        defaultValue="" {...register("post", {
                            required: { value: true, message: "Content is required" },
                            minLength: {
                                value: 50,
                                message: "Content should be minium 50 characters"
                            },
                            maxLength: {
                                value: 3000,
                                message: "Content should be maximum 1000 characters"
                            },
                        })}
                    />
                    {errors.post &&
                        <div className="form-error">
                            {errors.post.message}
                        </div>}
                </div>
                <div className="input-area">
                    <label>Blog Image:</label>
                    <input type="file" defaultValue="" {...register("imgPath", {
                        required: { value: true, message: "image is reqired" },
                    })} />
                    {errors.post &&
                        <div className="form-error">
                            {errors.post.imgPath}
                        </div>}
                </div>
                <button type="submit" className="create-btn">Add</button>
            </form>
            <ToastContainer />
        </div>
    )
}