import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaNotas extends Component {
  render() {
    return (
      <section>
        <ul>
          {Array.of("Trabalho", "trabalho", "Estudos").map((categorias) => {
            return (
              <li>
                <div>{categorias}</div>
                <CardNota />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListaNotas;
