import React, { Component } from "react";
import pizza8Size from "./pizza8Size";

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

// Logica Correcta
// function calcular(per, por) {
//     let cantidad = per * por
//     let pizzas = 0;
//     let pizzasm = 0;
//     let pizzasg = 0;
//     for (let i = 0; i < cantidad; i++) {
//         if (cantidad <= 8) {
//             pizzas = pizzas + 1
//             cantidad = cantidad - 8
//         } else if (cantidad > 8 && cantidad <= 10) {
//             pizzasm = pizzasm + 1
//             cantidad = cantidad - 10
//         } else if (cantidad => 12) {
//             pizzasg = pizzasg + 1
//             cantidad = cantidad - 12
//         }
//     }
//     let resultado = `se deben comprar ${pizzas} pizzas pequeñas , ${pizzasm} pizzas medianas y ${pizzasg} pizzas grandes`
//     console.log(resultado)
// }
