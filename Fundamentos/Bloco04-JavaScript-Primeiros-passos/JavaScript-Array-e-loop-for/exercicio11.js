let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;

for(i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0){
      cont++;
    }
}

if(cont === 0){
  console('nenhum valor impar encontrado');
}else {
  console.log("Ah " + cont + " números impares no array.");
}
