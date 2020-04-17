import React, { Component } from "react";
import "./App.css";
import WithPizzaCounter from "./withPizzaCounter";
import Pizza8Size from "./components/pizza8Size";

class App extends Component {
    render() {
        return (
            <div className="App">
                <WithPizzaCounter />
                <Pizza8Size />
            </div>
        );
    }
}

export default App;
