import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductForm = () => {
    const [product, update] = useState({
        name: "",
        productTypeId: "",
        pricePerUnit: "",
    });

const navigate = useNavigate();
const [productTypes, setProductTypes] = useState([])

const handleSaveButtonClick = (event) => {
    event.preventDefault();
    console.log("You clicked the button!!");

const productToSendToApi = {
    name: product.name,
    productType: +product.productTypeId,
    price: +product.pricePerUnit,
};

    return fetch(`http://localhost:8088/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
    },
        body: JSON.stringify(productToSendToApi),
    })
        .then((response) => response.json())
        .then(() => {
            navigate("/products");
    });
};

useEffect(
    () => {
        fetch(`http://localhost:8088/productTypes`)
            .then(response => response.json())
            .then((productsArray) => {
                setProductTypes(productsArray)
            })
    },
    []
)

return (
    <form className="productForm">
    <h2 className="productForm_title">New Product Addition</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="New candy name"
            value={product.name}
            onChange={(event) => {
                const copy = { ...product };
                copy.name = event.target.value;
                update(copy);
            }}
        />
        </div>
        <div className="form-group">
            <label htmlFor="productTypeId">Product Type</label>
            <select
            required autoFocus
            className="form-control"
            placeholder="Product Type"
            value={product.productTypeId}
            onChange={(event) => {
                const copy = { ...product };
                copy.productTypeId = event.target.value;
                update(copy);
            }
        }
        >
            <option value="" selected>Select Candy Type</option>
            {productTypes.map(item => (
                <option value={item.id} key={item.id}>{item.type}</option>
            ))}
        </select>
        </div>
        <div className="form-group">
            <label htmlFor="pricePerUnit">Price Per Unit</label>
            <input
            required
            type="number"
            className="form-control"
            placeholder="New candy price per unit"
            value={product.pricePerUnit}
            onChange={(event) => {
            const copy = { ...product };
            copy.pricePerUnit = event.target.value;
            update(copy);
            }}
        />
        </div>
    </fieldset>
    <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
    >Submit form</button>
    </form>
    );
};
