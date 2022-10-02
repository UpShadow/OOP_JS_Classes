import Contribuinte from "./Contribuinte.js";
import PessoaFisica from "./PessoaFisica.js";
import PessoaJuridica from "./PessoaJuridica.js";

export default class GrupoDeContribuintes {
    constructor() {
        this.grupoDeContribuintes = new Array();
    }

    get GrupoDeContribuintes() { return this.grupoDeContribuintes; }
    set GrupoDeContribuintes(value) { this.grupoDeContribuintes = value; }

    inserirContribuintes(Contribuinte) {
        this.GrupoDeContribuintes.push(Contribuinte);      
    }

    qtdTotalImposto() {
        let contribuintes =  this. GrupoDeContribuintes;
        let totalImposto = 0;

        for(let i of contribuintes) {

        }
    }

    PorcentagemSexoFeminino() {
        let contribuintes = this.GrupoDeContribuintes;
        let qtdMulheres = 0;
        let qtdTotalContribuintes = 0;

        for(let i of contribuintes) {
            if(i instanceof PessoaFisica)
            {
                qtdTotalContribuintes++;
                if(i.Sexo == "feminino") {
                    qtdMulheres++;
                }
            }
        }
        
        let porcentagemMulheres = (qtdMulheres/qtdTotalContribuintes)*100;
        return porcentagemMulheres;
    }
}