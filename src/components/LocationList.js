import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocation] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationArray) => {
                    setLocation(locationArray)
                })
        },
        []
    )

    return (
        <>

            {
                locations.map(
                    (locationObj) => {
                        return <p key={`location--${locationObj.id}`}>{locationObj.address}</p>
                    }
                )
            }
        </>
    )
}