import React from "react"
import { Switch, Route } from "react-router-dom"

import About from "./components/About"
import Transpose from "./components/Transpose"
import RouterParameter from "./components/RouterParameter"
import TransposeRedux from "./components/TransposeRedux"
import Header from "./components/Header"
import "./css/style.scss"

function App() {
    return (
        <div>
            <Header />
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
                    <TransposeRedux />
                </Route>
            </Switch>
        </div>
        
    )
}

export default App