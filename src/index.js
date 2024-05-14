const calcularImpostoRenda = require("./calculo_imposto_renda");
const calculoInss = require("./calculo_inss");

console.log(calcularImpostoRenda(13000).toFixed(2));
console.log(calculoInss(13000).toFixed(2));
