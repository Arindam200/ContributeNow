import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import("preline")
import { BrowserRouter } from "react-router-dom"
import ApiState from "./Context/api/apiState.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiState>
  </React.StrictMode>
)
