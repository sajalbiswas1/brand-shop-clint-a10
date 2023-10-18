import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div>
            <p>404 no fund page</p>
            <Link to={'/'}><button>Go Home</button></Link>
        </div>
    );
};

export default ErrorElement;