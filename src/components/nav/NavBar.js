import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate ()

    return (
        <ul className="navbar">
            <li className="navbar__item navbar__locations">
                <Link className="navbar_link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item navbar__products">
                <Link className="navbar_link" to="/products">Products</Link>
            </li>
            {
                localStorage.getItem("kandy_user")
                    ? <li className= "navbar__item navbar__logout">
                        <Link className="navbar link" to="" onClick={() => {
                            localStorage. removeItem ("kandy _user")
                            navigate ("/", { replace: true })
                        }}> Logouts/Link</Link>
                    </li>
                    : ""
                    }
        </ul>
    )
}
