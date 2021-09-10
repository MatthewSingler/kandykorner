import React, { useEffect, useState } from "react";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
    fetch("http://localhost8088/customers")
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
        </>
    )
} 
