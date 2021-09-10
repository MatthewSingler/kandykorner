import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const history = useHistory()

    useEffect(
        () => {
    fetch("http://localhost:8088/customers")
        .then(r => r.json())
        .then((customerArray) => {
        setCustomers(customerArray)
        })
    }, 
    []
    )

    return (
        <>
            {
                customers.map((customerObj) => {
                    return <p key={`customer--${customerObj.id}`}>{customerObj.name}</p>
                }
                )
            }
            <button onClick={() => history.push("/customers/create")} className="btn btn-primary">
                Add Customer
            </button>
        </>
    )
} 
