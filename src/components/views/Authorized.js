import { Navigate, useLocation } from "react-router-dom"
import { useProducts } from "../products/products"

export const Authorized = ({ children }) => {
    const location = useLocation()
    

    if (localStorage.getItem("kandy_user")) {
        return children
    }
    else {
        return <Navigate
            to={`/login/${location.search}`}
            replace
            state={{ location }} />
    }
}

