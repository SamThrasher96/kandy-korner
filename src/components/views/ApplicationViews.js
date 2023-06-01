import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/locations.js"
import { ProductsList } from "../products/products.js"

export const ApplicationViews = () => {
	return (
 	<Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner Shop</h1>
                    <div>Your one-stop-shop to get all sugar needs</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ < LocationList /> } />
				<Route path="products" element={ < ProductsList /> } />

            </Route>
        </Routes>
	)
}

