import "../assets/BlogEdit.css";
import { useForm } from "react-hook-form"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

export default function BlogEdit() {


    const navigate = useNavigate();
    const { id } = useParams();

    const url = import.meta.env.VITE_API_URL + "/" + id;
    const [data] = useFetchData(url)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const saveForm = async (data) => {
        try {
            await axios.put(url, data);
            navigate("/");
        } catch (error) {
            console.log(error.response)
        }
    }


    return (
        <div className="edit-container">
            <h2>Edit blog</h2>
            <form onSubmit={handleSubmit(saveForm)}>
                <div className="input-area">
                    <label >Blog Title:</label>
                    <input
                        className="create-input"
                        defaultValue={data.title} {...register("title", {
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
                    <label >Blog Content:</label>
                    <textarea
                        rows="8"
                        className="create-input"
                        defaultValue={data.post} {...register("post", {
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
                <button type="submit" className="create-btn">Edit</button>
            </form>
        </div>
    )
}