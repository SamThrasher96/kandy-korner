import { useEffect, useState } from "react"
import "./products.css"
import { useNavigate } from "react-router-dom"


export const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [expensive, setExpensive] = useState(false)
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    
    useEffect(() => {
        const sortedProducts = products.sort((a, b) => {
            if (a.name < b.name) {
            return -1;
            }
            if (a.name > b.name) {
            return 1;
            }
            return 0;
          });
        setFilteredProducts(sortedProducts);
    }, [products]);
    
    useEffect(
        () => {
            if (expensive) {
                const topPrice = products.filter(product => product.pricePerUnit >= 2)
            setFilteredProducts(topPrice)
        }
        else {
            setFilteredProducts(products)
        }
        },
        [expensive]
    )


    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=productType`)
                .then(response => response.json())
                .then((productsArray) => {
                    setProducts(productsArray)
                })
                setFilteredProducts(products)
        },

        []
    )

return <> 
    {
        kandyUserObject.staff
        ? <>
            <button onClick={ () => {setExpensive(true)}}>Top Price</button>
            <button onClick={ () => {setExpensive(false)}}>Show All</button>
            <button onClick={() => navigate("/product/create")} >Create new candy</button>
        </>
        : <>
            <button onClick={ () => {setExpensive(true)}}>Top Price</button>
            <button onClick={ () => {setExpensive(false)}}>Show All</button>
        </>
    }

    <h2>List of Products</h2>

<article className = "products">
    {
    filteredProducts.map(
            (product) => {
                const finalPrice = product.pricePerUnit.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"})
                return <section className="product" key={product.id}>
                    <header>Kandy name: {product.name} </header>
                    <header>Kandy price: {finalPrice} </header>
                    <footer>Product type: {product.productType.type} </footer>
                </section>
            }
        )
    }
</article>
</>
}
