import React, {useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import About from "./components/About"
import ChordPage from "./components/ChordPage"
import TransposeRedux from "./components/TransposeRedux"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { setChords } from "./actions"
import "./css/style.scss"

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        let returnObject = {}
            for(let i = 1; i <= 9; i++) {
                returnObject[i] = { id: i, ["chord"]: "", "symbol": "#" }
            }
        dispatch(setChords(returnObject))
    }, [])

    return (
        <div>
            <Header />
            <div style={{marginTop: "50px"}}></div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/chord/:chordName">
                    <ChordPage />
                </Route>
                <Route path="/transposeredux">
                    <TransposeRedux />
                </Route>
                <Route path="/">
                    <TransposeRedux />
                </Route>
            </Switch>
            <Footer />
        </div>
        
    )
}

export default App