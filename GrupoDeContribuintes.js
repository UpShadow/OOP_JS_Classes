import Contribuinte from "./Contribuinte";

export default class GrupoDeContribuintes {
    constructor() {
        this.grupoDeContribuintes = new Array();
    }

    get GrupoDeContribuintes() { return this.grupoDeContribuintes; }
    set GrupoDeContribuintes(value) { this.grupoDeContribuintes = value; }

    inserirContribuintes() {
        this.GrupoDeContribuintes.push(Contribuinte);      
    }

    qtdTotalImposto() {

    }

    PorcentagemSexoFeminino() {
        
    }
}