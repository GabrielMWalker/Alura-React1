import React, { Component } from "react";
import ListaDeNotas from "./Components/ListaDeNotas";
import FormularioCadastro from "./Components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
