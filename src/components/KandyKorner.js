import React from "react"
import { NavBar } from "./Nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
export const KandyKorner = () => {
    return (
        <>
            <NavBar />
            <h1>Kandy Korner Sweet Shoppe</h1>
            <ApplicationViews />
        </>
    )
}