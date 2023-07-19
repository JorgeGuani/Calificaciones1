import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App"
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    render()
)

function render() {
    const currentUrl = window.location.pathname;
    let content = '';

    switch (currentUrl) {
        case '/':
            content = <Home/>
            break;
        case '/list':
            content = <App />
            break;
        default:
            content = <App />
            break;
    }
    return (
        <div className="container pt-5">
            { content }
        </div>
    );
}