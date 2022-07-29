import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./frontend/clock.jsx"
import Tabs from "./frontend/tabs.jsx"
// import App from "./app";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    console.log(root);
    const widg = <h1>Hi I am a widget</h1>
    const tabs = [
        {
            title: "one",
            content: "I am the First"
        },

        {
            title: "two",
            content: "I am the Second"
        },

        {
            title: "three",
            content: "I am the Third"
        }
    ]
    // ReactDOM.render([<Clock />, <Tabs tabs={tabs}/>], root);
    // ReactDOM.render(<Tabs />, root);
})