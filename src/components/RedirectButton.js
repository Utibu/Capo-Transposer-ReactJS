import React, {useState} from "react"
import { Redirect } from "react-router-dom"

function RedirectButton(props) {
    const [redirect, setRedirect] = useState(false)
    const redirectDOM = redirect && <Redirect to={props.path} />

    function onClick() {
        setRedirect(true)
    }

    return (
        <div>
            {redirectDOM}
            <button onClick={onClick}>{props.value}</button>
        </div>
    )
}

export default RedirectButton