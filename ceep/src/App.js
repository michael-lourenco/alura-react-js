import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: ["games", "filmes", "animes"],
    }
  }

  criarNota(titulo, texto, categoria) {
    const nota = { titulo, texto, categoria }
    const novoArrayNotas = [...this.state.notas, nota];
    const novoEstado = { notas: novoArrayNotas}
    this.setState(novoEstado)
  }

  apagarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({ notas: arrayNotas })
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state,  categorias: novoArrayCategorias}
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className = "conteudo">
        <FormularioCadastro 
          categorias = { this.state.categorias } 
          criarNota = { this.criarNota.bind(this) }
        />
        <main className = "conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria = { this.adicionarCategoria.bind(this) }
            categorias = { this.state.categorias }
          />
          <ListaDeNotas 
            apagarNota = { this.apagarNota.bind(this) }
            notas = { this.state.notas }
          />
        </main>
      </section>
    );
  }
}

export default App;
