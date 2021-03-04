/* function hacerAlgo(){}

function hablar(){
    return "Hola";
    console.log("Hola")
}

let guardado = hablar()
console.log("Variable = " + guardado)
//console.log(hablar);
//console.log(typeof guardado) */

/* function suma(){
    return 1+2;
}

let s = suma();
console.log(s)
 */

/* 
function suma(num1, num2){
    return num1+num2;
}

let s = suma(1, 2);
console.log(s)
s = suma(10, 200);
console.log(s)

let num1=300;
let num2=500;

s = suma(num1, num2);
console.log(`La suma de ${num1} + ${num2} = ${s}`);


num1=400;
num2=1000;

s = suma(num1, num2);
console.log(`La suma de ${num1} + ${num2} = ${s}`); 
*/

/* function hablar(str){
    return str;
}

let res = hablar("Aprendiendo a hablar");

console.log(res); 
*/

/* 
funcion anonima
function(str){
    return str
}
 */
/* let hablar;
console.log(hablar);

hablar = function(str){
    return str;
}

console.log(hablar);

console.log(hablar("Hablando"));

 */

/* let resta = (a,b)=>{
    return a-b
}

let resultado = resta(10,5)
console.log(resultado); */

let resta = (a,b)=> a-b;

let resultado = resta(10,5)
console.log(resultado);

let hablar = str => str;
console.log(hablar("hola clase"));

let saludo = _ => "Hola";
console.log(saludo());

let ponerLaMesa = edad => {
    let str="";
    str = str + "traer platos ";
    str = str + "traer traer vasos ";
    if(edad>12){
        str = str + "traer cuchillos ";
    }else {
        str = str + "Mama trae los cuchillos ";
    }
    str = str + "traer la comida ";
    return str;
}

console.log(ponerLaMesa(8));
console.log(ponerLaMesa(18));
