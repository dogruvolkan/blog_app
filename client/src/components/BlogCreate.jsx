import "../assets/BlogCreate.css";
import { useForm } from "react-hook-form"
import axios from "axios";

export default function BlogCreate() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const saveForm = async (data) => {
        try {
            const url = import.meta.env.VITE_API_URL;
            await axios.post(url, data);
            window.location.href = "/";
        } catch (error) {
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
                            min: {
                                value: 3,
                                message: "Title should be minium 3 characters"
                            },
                        })}
                    />
                    {errors.title &&
                        <div className="form-error">
                            {errors.title.message}
                        </div>}
                </div>
                <div className="input-area">
                    <label >Blog Content:</label>
                    <textarea
                        className="create-input"
                        defaultValue="" {...register("post", {
                            required: { value: true, message: "Content is reqired" },
                            min: {
                                value: 3,
                                message: "Content should be minium 3 characters"
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
        </div>
    )
}