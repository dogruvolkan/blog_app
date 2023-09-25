import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import "../assets/BlogDetail.css";

export function BlogDetail() {

    const { id } = useParams()
    const url = import.meta.env.VITE_API_URL + "/" + id;
    const [data] = useFetchData(url)

    return (
        <div className="blog-detail-container">
            <div> <img className="img" src={`https://picsum.photos/${parseInt(id) + 1}00/200`} /></div>
            <h2>{data.title}</h2>
            <p>{data.post}</p>
            <p>{data.author}</p>
        </div>
    )
}