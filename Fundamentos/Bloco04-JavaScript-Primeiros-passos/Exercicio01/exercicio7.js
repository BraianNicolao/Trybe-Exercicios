const a = 10;
const b = 11;
const c = 12;

if(a > b || a > c){
    console.log("A é maior que B e C");
}else if(b > a || c > b){
    console.log("B é maior que A e C");
}else if(c > b || c > a){
    console.log("C é maior que B e A")
}