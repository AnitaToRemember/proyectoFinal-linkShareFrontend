import { Link } from "react-router-dom"

const Auth = () => {
    return (
        <ul>
            <li> 
                <Link to={"/Register"}>Register</Link>
            </li>
            <li>
                <Link to={"/Login"}>Login</Link>
            </li>
        </ul>
    )
}


export default Auth