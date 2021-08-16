import React, { Component } from "react";
import ListaNotas from "./Components/ListaNotas";
import FormularioCadastro from "./Components/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListaNotas/>
      </section>
    );
  }
}

export default App;
