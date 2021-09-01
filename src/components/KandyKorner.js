import React from "react"
import { LocationList } from "./LocationList"
import { ProductList } from "./Products/ProductList"

export const KandyKorner = () => {
    return (
        <>
            <h1>Kandy Korner Sweet Shoppe</h1>
            <h3>Locations</h3>
            <LocationList />
            <h3>Products</h3>
            <ProductList />
        </>
    )
}