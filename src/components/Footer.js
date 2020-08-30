import React from "react"
import NiklasAlmqvistLogo from "../images/niklasalmqvist-logo.png"

function Footer() {
    return (
        <footer>
            <p>Created by</p>
            <a href="http://niklasalmqvist.se">
                <img src={NiklasAlmqvistLogo} alt="Niklas Almqvist" />
            </a>
            <span className="version">Version 2.0.0</span>
        </footer>
    )
}

export default Footer