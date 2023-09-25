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
        try {
            const url = import.meta.env.VITE_API_URL;
            await axios.post(url, data);
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
                    <label >Blog Content:</label>
                    <textarea
                        rows="8"
                        className="create-input"
                        defaultValue="" {...register("post", {
                            required: { value: true, message: "Content is reqired" },
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
                <button type="submit" className="create-btn">Add</button>
            </form>
            <ToastContainer />
        </div>
    )
}