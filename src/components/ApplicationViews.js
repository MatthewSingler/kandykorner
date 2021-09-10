import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./LocationList"
import { ProductList } from "./Products/ProductList"
import { EmployeeForm } from "./Employees/EmployeeForm"
import { EmployeeList } from "./Employees/EmployeeList"
import { CustomerList } from "./Customers/CustomerList"
export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>
            <Route path="/products">
                <ProductList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
        </>
    )
}
