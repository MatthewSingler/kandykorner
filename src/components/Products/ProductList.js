import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, changeProducts] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
                .then(res => res.json())
                .then((productsArray) => {
                    changeProducts(productsArray)
                })
        },
        []
    )

    return (
        <>

            {
                products.map(
                    (productObject) => {
                        return <p key={`product--${productObject.id}`}>{productObject.name} is a {productObject.productType.type}</p>
                    }
                )
            }
        </>
    )
}