import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

    constructor() {
        super()
        this.titulo = "";
        this.texto = "";
    }

    handlerMudancaTitulo = (event) => {
        this.titulo = event.target.value;
        console.log(this.titulo);
    }

    handlerMudancaTexto = (event) => {
        this.texto = event.target.value;
    }

    render() {
        return (
        <form className="form-cadastro ">
            <input
            type = "text"
            placeholder = "Título"
            className = "form-cadastro_input"
            onChange = { this.handlerMudancaTitulo.bind(this) }
            />
            <textarea
            rows={15}
            placeholder="Escreva sua nota..."
            className="form-cadastro_input"
            onChange = { this.handlerMudancaTexto.bind(this) }
            />
            <button className="form-cadastro_input form-cadastro_submit">
            Criar Nota
            </button>
        </form>
        );
    }
}

export default FormularioCadastro;
