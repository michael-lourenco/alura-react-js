import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(props) {
        super(props)
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem Categoria";
    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    _handlerMudancaTitulo = (event) => {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handlerMudancaTexto = (event) => {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _handlerMudancaCategoria = (event) => {
        event.stopPropagation();
        this.categoria = event.target.value;
    }

    render() {
        return (
        <form className = "form-cadastro "
            onSubmit = { this._criarNota.bind(this) }
        >
            <select onChange = { this._handlerMudancaCategoria.bind(this) } name = "form-cadastro_input">
                <option>Sem Categoria</option>
                {this.props.categorias.map((categoria, index) => {
                    return <option key = { index }> { categoria }</option>
                })}
            </select>
            <input
            type = "text"
            placeholder = "Título"
            className = "form-cadastro_input"
            onChange = { this._handlerMudancaTitulo.bind(this) }
            />
            <textarea
            rows = {15}
            placeholder = "Escreva sua nota..."
            className = "form-cadastro_input"
            onChange = { this._handlerMudancaTexto.bind(this) }
            />
            <button className = "form-cadastro_input form-cadastro_submit">
            Criar Nota
            </button>
        </form>
        );
    }
}

export default FormularioCadastro;
