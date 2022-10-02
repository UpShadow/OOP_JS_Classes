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

//Exemplo Pessoa Jurídicapj
let pj = new PessoaJuridica("Eduardo", "700", 5000, "1989");
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

console.log("Exibindo os arrays do grupo de contribuintes:")
let contribuintes = GC.GrupoDeContribuintes;
 for (let i of GC.GrupoDeContribuintes)
     console.log(i);
console.log("-------------------------------");

let porcentagemMulheres = GC.PorcentagemSexoFeminino();
console.log("Porcentagem de mulheres é: " + porcentagemMulheres + "%"); //nesse console.log tem apenas uma mulher cadastrada então da 100% 

console.log("-------------------------------");
let TotalImposto = GC.qtdTotalImposto();
console.log("O Imposto Total das pessoas Físicas e Jurídicas somados é: R$" + TotalImposto );

console.log("-------------------------------");
//Cadastrando mais pessoas fisicas para fazer o calculo da porcentagem
let pf1 = new PessoaFisica("André", "1024", 8500, "masculino");
let pf2 = new PessoaFisica("Vitor", "5321", 7800, "masculino");
let pf3 = new PessoaFisica("Vitoria", "786", 12000, "feminino");
let pf4 = new PessoaFisica("Gabrielly", "395", 17290, "feminino");
GC.inserirContribuintes(pf1);
GC.inserirContribuintes(pf2);
GC.inserirContribuintes(pf3);
GC.inserirContribuintes(pf4);

 console.log("Exibindo os novos arrays no grupo de contribuintes:")
 for (let i of GC.GrupoDeContribuintes)
     console.log(i);

console.log("-------------------------------");

// O calculo vai ser ( qtdMulheres = 3 / qtdTotalContribuintes = 5 ) * 100 = 60
let novaPorcentagemMulheres = GC.PorcentagemSexoFeminino();
console.log("Nova porcentagem de mulheres é: " + novaPorcentagemMulheres + "%");

console.log("-------------------------------");
let novoTotalImposto = GC.qtdTotalImposto();
console.log("O Imposto Total das pessoas Físicas e Jurídicas somados é: R$" + novoTotalImposto );