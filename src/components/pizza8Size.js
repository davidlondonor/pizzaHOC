import React, { Component } from "react";
import withPizzaCounter from "../withPizzaCounter";

class pizza8Size extends Component {
    render() {
        const { count, incrementCount } = this.props;

        return (
            <div>
                <h1 onMouseOver={incrementCount}>Size {count} Times</h1>
            </div>
        );
    }
}

export default withPizzaCounter(pizza8Size);
