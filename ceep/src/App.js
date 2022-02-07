import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  criarNota(titulo, texto) {
    console.log(`Ǹota ${titulo} criada no App`);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota = { this.criarNota }/>
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
