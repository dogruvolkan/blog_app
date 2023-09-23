import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

export function BlogDetail() {

    const { id } = useParams()
    const url = import.meta.env.VITE_API_URL + "/" + id;
    const data = useFetchData(url)

    return (
        <>detail {id}</>
    )
}