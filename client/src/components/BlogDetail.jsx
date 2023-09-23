import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import "../assets/BlogDetail.css";

export function BlogDetail() {

    const { id } = useParams()
    const url = import.meta.env.VITE_API_URL + "/" + id;
    const [data] = useFetchData(url)

    return (
        <div className="blog-detail-container">
            <div>img</div>
            <div>{data.title}</div>
            <div>{data.post}</div>
        </div>
    )
}