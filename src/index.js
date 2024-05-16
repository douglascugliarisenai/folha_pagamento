const calcularImpostoRenda = require("./calculo_imposto_renda");
const calculoInss = require("./calculo_inss");
const calculoSalarioLiquido = require("./calculo_salario_liquido");
const prompt = require("prompt-sync")();
const PDFKit = require("pdfkit");
const fs = require("fs");

let funcionario = {
 nome: "",
 cpf: "",
 salario: 0,
 inss: 0,
 impostoRenda: 0,
 salarioLiquido: 0
};

function main() {
 getDadosEntrada();
}

function getDadosEntrada() {
 funcionario.nome = prompt("Digite seu nome: ");
 funcionario.cpf = prompt("Digite o CPF: ");
 funcionario.mes = prompt("Digite o mês do pagamento: ");
 funcionario.salario = prompt("Digite o salario Bruto: ");

 funcionario.impostoRenda = calcularImpostoRenda(funcionario.salario);
 funcionario.inss = calculoInss(funcionario.salario);
 funcionario.salarioLiquido = calculoSalarioLiquido(funcionario.salario);

 gerarRelatorioPDF(funcionario);
}

function gerarRelatorioPDF(funcionario) {
 const dataAtual = new Date();
 const pdf = new PDFKit();

 pdf.text("--- Folha de Pagamento ---");
 pdf.text(`Data de Geração: ${dataAtual.toLocaleDateString()}`);
 pdf.text(`Mês do pagamento: ${funcionario.mes}`);
 pdf.text(`Nome: ${funcionario.nome}`);
 pdf.text(`CPF: ${funcionario.cpf}`);

 pdf.text("--- ---");
 pdf.text(`Salario Bruto: R$ ${funcionario.salario}`);
 pdf.text("--- ---");
 pdf.text(`INSS: R$ ${funcionario.inss.toFixed(2)}`);
 pdf.text(`Imposto de Renda: R$ ${funcionario.impostoRenda.toFixed(2)}`);
 pdf.text("Outros descontos: R$ 0.00");
 pdf.text("--- ---");
 pdf.text(`Salario Liiquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
 pdf.text("--- ---");

 pdf.pipe(
  fs.createWriteStream(
   `Folha-Pagamento-${funcionario.nome}-mes-${funcionario.mes}.pdf`
  )
 );

 pdf.end();
}

main();
