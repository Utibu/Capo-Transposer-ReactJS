import React, {Component, useState} from "react"
import { Switch, Route, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { increaseCounter } from "./actions"

import About from "./components/About"
import Transpose from "./components/Transpose"
import RouterParameter from "./components/RouterParameter"
import TransposeRedux from "./components/TransposeRedux"
import "./css/style.scss"

function App() {
    //const [ counter, setCounter ] = useState(0)
    const counter = useSelector(state => state.count)
    const dispatch = useDispatch()
    

    return (
        <div>
            <h1>My website = {counter}</h1>
            <button onClick={() => dispatch(increaseCounter(1))}>Add</button>
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
                <Route path="/transposeredux">
                    <TransposeRedux />
                </Route>
                <Route path="/">
                    <Transpose />
                </Route>
            </Switch>
        </div>
        
    )
}

export default App