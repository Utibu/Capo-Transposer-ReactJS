import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from "react-router-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import Reducers from "./reducers"

import App from "./App"

const store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render((
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    ), document.getElementById("root"))