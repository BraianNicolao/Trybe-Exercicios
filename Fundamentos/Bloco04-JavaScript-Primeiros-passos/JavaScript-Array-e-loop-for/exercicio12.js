let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 100;


for(i = 0; i < numbers.length; i++){
  if(numbers[i] < menorNumero){
    menorNumero = numbers[i]
  }
}

console.log("O menor valor no array é de: " + menorNumero);