let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let resultadoFinal = 0
let media = 0;

for (i = 0; i < numbers.length; i++){
  soma = soma + numbers[i];
  resultadoFinal = soma;
}
console.log("A soma de todos os números é de: " + resultadoFinal);

media = resultadoFinal / 10;
console.log("A média aritmética é de : " + media);

if(media > 20){
  console.log("Valor maior que 20.");
}else{
  console.log("Valor igual ou inferior a 20");
}