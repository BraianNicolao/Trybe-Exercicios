let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let resultadoFinal = 0

for (i = 0; i < numbers.length; i++){
  soma = soma + numbers[i];
  resultadoFinal = soma;
}
console.log("A soma de todos os números é de: " + resultadoFinal);