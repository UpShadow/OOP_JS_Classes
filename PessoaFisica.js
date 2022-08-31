import Contribuinte from "./Contribuinte.js";

export default class PessoaFisica extends Contribuinte {
    constructor(nome, documento, rendaBruta, sexo) {
        super(nome, documento, rendaBruta);
        this.sexo = sexo;
    }

    get Sexo() { return this.sexo; }
    set Sexo(value) { this.sexo = value; }

    calcularImposto() {
        let r = this.RendaBruta;
        let value = 0;
        if(r >= 0.00 && r <= 1400.00) {
            value = (r*0)-0;
        } else if(r >= 1400.01 && r <= 2100.00) {
            value = (r*0.10)-100;
        } else if(r >= 2100.01 && r <= 2800.00) {
            value = (r*0.15)-270;
        } else if(r >= 2800.01 && r <= 3600.00) {
            value = (r*0.25)-500;
        }else if(r >= 3600.01) {
            value = (r*0.30)-700;
        }
        return value;
    }
}