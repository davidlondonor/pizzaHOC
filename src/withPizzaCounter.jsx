import React, { Component } from "react";
import pizza8Size from "./components/pizza8Size";

class PizzaCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;

        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} Times</button>
            </div>
        );
    }
}

export default pizza8Size(PizzaCounter);
