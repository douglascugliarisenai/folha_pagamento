const calcularImpostoRenda = require("./calculo_imposto_renda");
const calculoInss = require("./calculo_inss");
const calculoSalarioLiquido = require("./calculo_salario_liquido");
const prompt = require("prompt-sync")();

let funcionario = {
 nome: "",
 cpf: "",
 salario: 0,
 inss: 0,
 impostoRenda: 0,
 salarioLiquido: 0
};

funcionario.nome = prompt("Digite seu nome: ");
funcionario.cpf = prompt("Qual o CPF?");
funcionario.salario = prompt("Qual o Salário Bruto?");

funcionario.impostoRenda = calcularImpostoRenda(funcionario.salario);
funcionario.inss = calculoInss(funcionario.salario);
funcionario.salarioLiquido = calculoSalarioLiquido(funcionario.salario);

console.log("------ Folha de Pagamento -----");
console.log(`Nome: ${funcionario.nome}`);
console.log(`CPF: ${funcionario.cpf}`);
console.log(`Salario Bruto: ${funcionario.salario}`);
console.log(`Imposto de Renda: ${funcionario.impostoRenda}`);
console.log(`INSS: ${funcionario.inss.toFixed(2)}`);
console.log(`Salario Liiquido: ${funcionario.salarioLiquido.toFixed(2)}`);
console.log("------ Folha de Pagamento -----");
