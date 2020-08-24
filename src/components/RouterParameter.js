import React from "react"
import {useParams} from "react-router-dom"

function RouterParameter() {
    const { id } = useParams()
    return (
        <h1>Hej {id}</h1>
    )
}

export default RouterParameter