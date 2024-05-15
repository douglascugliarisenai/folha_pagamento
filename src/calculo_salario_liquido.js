const calcularImpostoRenda = require("./calculo_imposto_renda");
const calculoInss = require("./calculo_inss");

module.exports = function calculoSalarioLiquido(salario) {
 const impostoRenda = calcularImpostoRenda(salario);
 const inss = calculoInss(salario);

 let totalDesconto = impostoRenda + inss;
 return salario - totalDesconto;
};
