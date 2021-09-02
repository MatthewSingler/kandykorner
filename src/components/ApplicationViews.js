import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./LocationList"
import { ProductList } from "./Products/ProductList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>
            <Route path="/products">
                <ProductList />
            </Route>
        </>
    )
}
