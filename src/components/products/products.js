import { useEffect, useState } from "react"
import "./products.css"


export const ProductsList = () => {
    const [products, setProducts] = useState([])

const localKandyUser = localStorage.getItem("kandy_user")
const kandyUserObject = JSON.parse(localKandyUser)


    useEffect(
        () => {
            fetch(`http://localhost:8088/productss`)
                .then(response => response.json())
                .then((productsArray) => {
                    setProducts(productsArray)
                })
        },

        []
    )

return <>
    <h2>List of Products</h2>

<article className = "products">
    {
    products.map(
            (product) => {
                return <section className="product" key={product.id}>
                    <header> {product.name}: {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"})} </header>
                </section>
            }
        )
    }
</article>
</>
}

/*
        const orderPrice = sale.entree.price + sale.vegetable.price + sale.side.price
            const finalOrderPrice = orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"})
        return `<div>Receipt #${sale.id} = ${finalOrderPrice}</div>`
*/