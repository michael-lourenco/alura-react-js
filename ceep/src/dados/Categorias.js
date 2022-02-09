export default class Caterogias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => func(this.categorias));
    }

}