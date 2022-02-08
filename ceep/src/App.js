import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const nota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, nota];
    const novoEstado = { notas: novoArrayNotas}
    this.setState(novoEstado)
  }

  apagarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({ notas: arrayNotas })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota = { this.criarNota.bind(this) }/>
        <ListaDeNotas 
          apagarNota = { this.apagarNota.bind(this) }
          notas = { this.state.notas }
        />
      </section>
    );
  }
}

export default App;
