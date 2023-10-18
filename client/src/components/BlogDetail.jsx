import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import "../assets/BlogDetail.css";
import { FormatedDate } from "../utils/formatedDate";
import { AiOutlineArrowLeft } from "react-icons/ai";


export function BlogDetail() {

    const { id } = useParams()
    const url = import.meta.env.VITE_API_URL + "/" + id;
    const [data] = useFetchData(url)

    const blogTime = data.createdAt
    const formatedTime = FormatedDate(blogTime)
    const navigate = useNavigate()

    return (
        <div className="blog-detail-container">
            <button onClick={() => navigate(-1)} className="blog-detail-back"><AiOutlineArrowLeft /></button>
            <div> <img className="blog-detail-img"  /></div>
            <div className="blog-detail-header">
                <p>{data.author}</p>
                <p>{formatedTime}</p>
            </div>
            <h2>{data.title}</h2>
            <p>{data.post}</p>
            <p>{data.author}</p>
        </div>
    )
}