import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { BourbonLog } from "./Components/BourbonLog.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <BourbonLog />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)