import "../assets/BlogEdit.css";
import { useForm } from "react-hook-form"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.success("Düzenleme işlemi başarılı!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
            //waiting close toastify
            await new Promise((resolve) => setTimeout(resolve, 2000));
            navigate("/");
        } catch (error) {
            toast.error("Düzenleme işlemi başarısız!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
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
                    <label >Author:</label>
                    <input
                        className="create-input"
                        defaultValue={data.author} {...register("author", {
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
            <ToastContainer />
        </div>
    )
}