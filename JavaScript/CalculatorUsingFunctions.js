//Creating a calculator using HighOrderFunction and CallBackFunction
//This calculator receives multiple values and performs addition, substraction, multiplication, division, modulus, concatenation
function calculator(v1,v2,callbackFun)
{
    return callbackFun(v1,v2)
}

let addition = calculator(10,20,(a,b)=>a+b)
let subraction = calculator(10,20,(a,b)=>a-b)
let multiplication = calculator(10,20,(a,b)=>a*b)
let division = calculator(20,10,(a,b)=>a/b)
let modulo = calculator(20,10,(a,b)=>a%b)
let concatenation = calculator("Hi","Class",(a,b)=> a+" "+b)
console.log(addition);
console.log(subraction);
console.log(multiplication);
console.log(division);
console.log(modulo);
console.log(concatenation);
