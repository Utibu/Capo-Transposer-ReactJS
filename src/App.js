import React, {Component, useState} from "react"
import { Switch, Route, Link } from "react-router-dom"

import About from "./components/About"
import Transpose from "./components/Transpose"
import RouterParameter from "./components/RouterParameter"

function App() {
    const [ counter, setCounter ] = useState(0)

    return (
        <div>
            <h1>My website = {counter}</h1>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Add</button>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <div style={{marginTop: "50px"}}></div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/router/:id">
                    <RouterParameter />
                </Route>
                <Route path="/">
                    <Transpose />
                </Route>
            </Switch>
        </div>
        
    )
}

export default App