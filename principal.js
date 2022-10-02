import Contribuinte from "./Contribuinte.js";
import PessoaJuridica from "./PessoaJuridica.js";
import PessoaFisica from "./PessoaFisica.js";
import GrupoDeContribuintes from "./GrupoDeContribuintes.js";

let imposto = 0;

//Exemplo Contribuinte
let c = new Contribuinte("Carlos", "123", 3000);
console.log("Dados contribuinte comum: ")
console.log("Nome: " + c.Nome);
console.log("Documento: " + c.Documento);
console.log("Renda Bruta: " + c.RendaBruta);
console.log("-------------------------------");

//Exemplo Pessoa Jurídica
let pj = new PessoaJuridica("Eduardo", "666", 5000, "1989");
imposto = pj.calcularImposto(pj.RendaBruta);

console.log("Pessoa Jurídica: ")
console.log("Nome: " + pj.Nome);
console.log("Documento: " + pj.Documento);
console.log("Renda Bruta: " + pj.RendaBruta);
console.log("Ano de Fundação: " + pj.AnoDeFundaçao);
console.log(pj.Nome + " tem um total de R$"+ imposto + " de imposto.");
console.log("-------------------------------");

//Exemplo Pessoa Fisica
let pf = new PessoaFisica("Natalia", "456", 15000, "feminino");
imposto = pf.calcularImposto(pf.RendaBruta);

console.log("Pessoa Fisica: ")
console.log("Nome: " + pf.Nome);
console.log("Documento: " + pf.Documento);
console.log("Renda Bruta: " + pf.RendaBruta);
console.log("Sexo:" + pf.Sexo);
console.log(pf.Nome + " tem um total de R$"+ imposto + " de imposto.");
console.log("-------------------------------");

//Exemplo Grupo de Contribuintes
let GC = new GrupoDeContribuintes();
GC.inserirContribuintes(c);
GC.inserirContribuintes(pj);
GC.inserirContribuintes(pf);
console.log(GC.c.pj);