import { useRouteError } from "react-router-dom";
import "../assets/Error.css";


export default function Error() {

    const error = useRouteError();


    return (
        <div className="error-container">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>Page {error.statusText || error.message}</i>
            </p>
        </div>
    )
}