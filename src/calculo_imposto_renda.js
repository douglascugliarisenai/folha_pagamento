module.exports = function calcularImpostoRenda(salario) {
    if (salario <= 2112.0) {
        return 0;
    } else if (salario >= 1903.99 && salario <= 2826.65) {
        return salario * 0.075;
    } else if (salario >= 2826.66 && salario <= 3751.05) {
        return salario * 0.15;
    } else if (salario >= 3751.06 && salario <= 4664.68) {
        return salario * 0.225;
    } else {
        return salario * 0.275;
    }
};
