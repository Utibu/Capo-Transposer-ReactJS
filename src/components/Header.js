import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <h1>CAPO TRANSPOSER</h1>
            <h5>Let your mind rest and transpose your songs with us!</h5>
            <nav>
                <Link to="/">Transpose</Link>
                <Link to="/about">About</Link>
            </nav>
            
        </header>
    )
}

export default Header