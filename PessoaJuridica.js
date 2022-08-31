import Contribuinte from "./Contribuinte.js";

export default class PessoaJuridica extends Contribuinte {
    constructor(nome, documento, rendaBruta, anoDeFundaçao) {
        super(nome, documento, rendaBruta);
        this.anoDeFundaçao = anoDeFundaçao;
    }

    get AnoDeFundaçao() { return this.anoDeFundaçao; }
    set AnoDeFundaçao(value) { this.anoDeFundaçao = value; }

    calcularImposto() {
        let r = this.RendaBruta;
        let value = r*0.10;     
        return value;   
    }
}