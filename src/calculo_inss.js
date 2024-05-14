function calculoInss(salario) {
 if (salario <= 1412.0) {
  return salario * 0.08;
 } else if (salario >= 1412.0 && salario <= 2666.68) {
  return salario * 0.09;
 } else if (salario >= 2666.68 && salario <= 4000.03) {
  return salario * 0.11;
 } else {
  return (
   1412.81 * 0.08 + (salario - 1412.81) * 0.09 + (salario - 2666.68) * 0.11
  );
 }
}
