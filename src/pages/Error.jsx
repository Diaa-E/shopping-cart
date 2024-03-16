import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

export default function Error({})
{
    const error = useRouteError();
    console.error(error.status + ": " + error.statusText);
    return (
        <>
            <h1>{`Error: ${error.status}  (${error.statusText})`}</h1>
            <Link to={"/"}>Home</Link>
        </>
    )
}